﻿using System;
using System.Net;
using System.Threading.Tasks;
using EP.Hangman.Logic.Commands;
using EP.Hangman.Logic.Models;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using EP.Hangman.Logic.Queries;
using EP.Hangman.Web.Filters;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;

namespace EP.Hangman.Web.Controllers
{
    [Route("api/playhangman")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //[Authorize(AuthenticationSchemes = "Google")]
    //[Authorize(AuthenticationSchemes = "Facebook")]
    public class PlayHangmanController : ControllerBase
    {

        private readonly IMediator _mediator;
        private readonly ILogger _logger;

        public PlayHangmanController(IMediator mediator, ILogger<PlayHangmanController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }
        
        //GET: api/PlayHangman/{id}
        [HttpGet("{id}")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(ControllerData), Description = "Red")]
        [SwaggerResponse(HttpStatusCode.NotFound, typeof(ControllerData), Description = "Session not found")]
        public async Task<IActionResult> GetUserSessionAsync(string id)
        {
            _logger.LogInformation("Received GET request");
            var result = await _mediator.Send(new GetUserSession(id));
            _logger.LogInformation("GET request executed");
            return result.IsSuccess ? (IActionResult)Ok(result.Value) : NotFound(result.Error);
        }

        //POST: api/PlayHangman
        [HttpPost]
        [SwaggerResponse(HttpStatusCode.Created, typeof(ControllerData), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(ControllerData), Description = "Object didn't create")]
        public async Task<IActionResult> CreateNewGameCookieAsync()
        {
            var result = await _mediator.Send(new CreateNewGameCommand());
            _logger.LogInformation("Received POST request");
            _logger.LogInformation("POST request executed");
            return result.IsFailure ? BadRequest(result.Error) : (IActionResult) Created("Success", result.Value); 
        }

        //PUT: api/PlayHangman
        [HttpPut]
        [SwaggerResponse(HttpStatusCode.OK, typeof(ControllerData), Description = "Updated")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(ControllerData), Description = "Data didn't update")]
        public async Task<IActionResult> CheckLetterAsync([FromBody]ControllerData model) 
        [ValidationFilter]
        {
            _logger.LogInformation("Received PUT request");
            var result = await _mediator.Send(new CheckLetterCommand(model));
            _logger.LogInformation("PUT request executed");
            return result.IsSuccess ? (IActionResult)Ok(result.Value) : BadRequest(result.Error);
        }

        //DELETE: api/PlayHangman
        [HttpDelete]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(ControllerData), Description = "Data didn't delete")]
        [SwaggerResponse(HttpStatusCode.NoContent, typeof(ControllerData), Description = "Deleted")]
        [ValidationFilter]
        public async Task<IActionResult> DeleteGameSessionAsync([FromBody]ControllerData model)
            _logger.LogInformation("Received DELETE request");
        {
            var result = await _mediator.Send(new DeleteGameSessionCommand(model));
            _logger.LogInformation("DELETE request executed");
            return result.IsSuccess ? (IActionResult) Ok(result.Value) : BadRequest(result.Error);
        }
    }
}
