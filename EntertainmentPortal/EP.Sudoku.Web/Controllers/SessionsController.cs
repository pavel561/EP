﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using EP.Sudoku.Logic.Commands;
using EP.Sudoku.Logic.Models;
using EP.Sudoku.Logic.Queries;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NJsonSchema.Annotations;
using NSwag.Annotations;

namespace EP.Sudoku.Web.Controllers
{
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ILogger<SessionsController> _logger;

        public SessionsController(IMediator mediator, ILogger<SessionsController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }

        [HttpGet("api/sessions/{id}")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Session), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.NotFound, typeof(void), Description = "Session not found")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> GetSessionByIdAsync(int id)
        {
            if (id <= 0)
            {
                _logger.LogError($"Incorrect value for the sessions's Id was set. '{id}' - is <= 0...");
                return BadRequest();
            }
            var session = await _mediator.Send(new GetSessionById(id));
            return session != null ? (IActionResult)Ok(session) : NotFound();
        }

        [HttpPost("api/sessions")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Session), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> CreateSession([FromBody] Session model)
        {
            if (model == null)
            {
                return BadRequest();
            }
            var session = await _mediator.Send(new CreateSessionCommand(model));

            return session != null ? (IActionResult)Ok(session) : BadRequest();
        }

        [HttpPut("api/sessions")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Session), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> EditSession([FromBody]UpdateSessionCommand model)
        {
            if (model == null)
            {
                return BadRequest();
            }
            var session = await _mediator.Send(model);
            return session != null ? (IActionResult)Ok(session) : BadRequest();
        }

        [HttpPut("api/setCellValue")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Session), Description = "Success")]
        [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = "Invalid data")]
        public async Task<IActionResult> SetCellValue([FromBody, NotNull, 
            CustomizeValidator(RuleSet = "PreValidationCell")]SetCellValueCommand model)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogError($"Incorrect value for the cell's Value was set up...");
                return BadRequest();
            }

            var result = await _mediator.Send(model);
            return result.IsFailure ? (IActionResult)BadRequest(result.Error) : Ok(result.Value);
        }
    }
}
