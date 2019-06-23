﻿using AutoMapper;
using CSharpFunctionalExtensions;
using EP.Balda.Data.Context;
using EP.Balda.Logic.Models;
using EP.Balda.Logic.Queries;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using EP.Balda.Data.Models;

namespace EP.Balda.Logic.Handlers
{
    public class GetGameHandler : IRequestHandler<GetGame, Maybe<Game>>
    {
        private readonly IMapper _mapper;
        private readonly BaldaGameDbContext _context;

        public GetGameHandler(IMapper mapper, BaldaGameDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Maybe<Game>> Handle(GetGame request, CancellationToken cancellationToken)
        {
            var gameDb = await (_context.Games
                .Where(g => g.Id == request.Id)
                .FirstOrDefaultAsync<GameDb>());

            return gameDb == null? 
                Maybe<Game>.None : 
                Maybe<Game>.From(_mapper.Map<Game>(gameDb));
        }
    }
}