﻿using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using EP.SeaBattle.Data.Context;
using EP.SeaBattle.Data.Models;
using EP.SeaBattle.Logic.Commands;
using EP.SeaBattle.Logic.Models;
using CSharpFunctionalExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace EP.SeaBattle.Logic.Handlers
{
    public class AddNewShipHandler : IRequestHandler<AddNewShipCommand, Maybe<IEnumerable<Ship>>>
    {
        private readonly SeaBattleDbContext _context;
        private readonly IMapper _mapper;
        private readonly IValidator<AddNewShipCommand> _validator;
        private readonly ILogger _logger;

        public AddNewShipHandler(SeaBattleDbContext context, IMapper mapper, IValidator<AddNewShipCommand> validator, ILogger<AddNewShipHandler> logger)
        {
            _context = context;
            _mapper = mapper;
            _validator = validator;
            _logger = logger;
        }

        public async Task<Maybe<IEnumerable<Ship>>> Handle(AddNewShipCommand request, CancellationToken cancellationToken)
        {
            var validationResult = await _validator.ValidateAsync(request, ruleSet: "AddShipValidation", cancellationToken: cancellationToken);
            if (validationResult.IsValid)
            {
                PlayerDb playerDb = await _context.Players
                                                    .Include(p => p.Ships)
                                                    .ThenInclude(s => s.Cells)
                                                    .FirstOrDefaultAsync(p => p.Id == request.PlayerId)
                                                    .ConfigureAwait(false);

                Player player = _mapper.Map<Player>(playerDb);
                ShipsManager shipsManager = new ShipsManager(player);


                if (shipsManager.AddShip(request.X, request.Y, request.Orientation, request.Rank, out Ship ship))
                {
                    playerDb.Ships.Add(_mapper.Map<ShipDb>(ship));
                    try
                    {
                        await _context.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
                        return Maybe<IEnumerable<Ship>>.From(_mapper.Map<IEnumerable<Ship>>(playerDb.Ships));
                    }
                    catch (DbUpdateException ex)
                    {
                        _logger.LogError(ex.Message);
                        return Maybe<IEnumerable<Ship>>.None;
                    }
                }
                else
                {
                    _logger.LogInformation($"Ship was not added to the field. " +
                        $"Ship info X: {request.X} Y: {request.Y}, Orientation {request.Orientation}, Rank {request.Rank}, " +
                        $" Player {request.PlayerId}");
                    return Maybe<IEnumerable<Ship>>.From(_mapper.Map<IEnumerable<Ship>>(playerDb.Ships));
                }
            }
            else
            {
                _logger.LogInformation(string.Join(", ", validationResult.Errors));
                return Maybe<IEnumerable<Ship>>.From(_mapper.Map<IEnumerable<Ship>>(_context.Ships));
            }
        }
    }
}
