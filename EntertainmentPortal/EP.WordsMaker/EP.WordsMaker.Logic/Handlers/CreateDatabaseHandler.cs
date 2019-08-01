﻿using System.Threading;
using System.Threading.Tasks;
using EP.WordsMaker.Data.Context;
using EP.WordsMaker.Logic.Commands;
using MediatR;

namespace EP.WordsMaker.Logic.Handlers
{
    public class CreateDatabaseHandler : AsyncRequestHandler<CreateDatabaseCommand>
    {
        private readonly GameDbContext _context;

        public CreateDatabaseHandler(GameDbContext context)
        {
            _context = context;
        }

        protected override async Task Handle(CreateDatabaseCommand request, CancellationToken cancellationToken)
        {
            await _context.Database.EnsureCreatedAsync(cancellationToken);
        }
    }
}