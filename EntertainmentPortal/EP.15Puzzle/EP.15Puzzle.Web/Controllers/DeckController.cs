﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using EP._15Puzzle.Logic;
using EP._15Puzzle.Logic.Commands;
using EP._15Puzzle.Logic.Models;
using EP._15Puzzle.Logic.Queries;
using EP._15Puzzle.Web.Hubs;
using IdentityServer4.Models;
using JetBrains.Annotations;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;

namespace EP._15Puzzle.Web.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IHubContext<NoticeHub> _hubContext;


        public DeckController(IMediator mediator, IHubContext<NoticeHub> hubContext)
        {
            _mediator = mediator;
            _hubContext = hubContext;
        }
        // GET: api/Deck
        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Deck), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.NotFound, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> Get()
        {
            var result = await _mediator.Send(new GetDeckQuery(HttpContext.Request.Headers["Email"]));
            return result.IsSuccess ? (IActionResult)Ok(result.Value) : NotFound("Start page");
        }

        // POST: api/Deck
        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Deck), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> Post([FromBody] NewDeckCommand newDeckCommand)
        {
            newDeckCommand.Email = HttpContext.Request.Headers["Email"];
            var result = await _mediator.Send(newDeckCommand);
            if (result.IsSuccess)
            {
                return (IActionResult)Ok(result.Value);
            }

            return NotFound(result.Error);
        }



        // PUT: api/Deck
        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPut]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Deck), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> Put([FromBody][NotNull] int tile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var result = await _mediator.Send(new MoveTileCommand(HttpContext.Request.Headers["Email"], tile));
            if (result.IsFailure && result.Error.StartsWith("Selected"))
            {
                await _hubContext.Clients.All.SendAsync("notice", result.Error);
            }
            return result.IsSuccess ? (IActionResult)Ok(result.Value) : BadRequest(result.Error);

        }

       
        
    }
    
}