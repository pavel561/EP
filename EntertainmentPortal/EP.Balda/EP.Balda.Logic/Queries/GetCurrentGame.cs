﻿using CSharpFunctionalExtensions;
using EP.Balda.Logic.Models;
using MediatR;

namespace EP.Balda.Logic.Queries
{
    public class GetCurrentGame : IRequest<Maybe<Game>>
    {
        public string Id { get; set; }
    }
}
