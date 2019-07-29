﻿using CSharpFunctionalExtensions;
using EP.Balda.Logic.Models;
using MediatR;

namespace EP.Balda.Logic.Commands
{
    public class CreateNewGameCommand : IRequest<Result<Game>>
    {
        public string PlayerId { get; set; }

        public int MapSize { get; set; }
    }
}