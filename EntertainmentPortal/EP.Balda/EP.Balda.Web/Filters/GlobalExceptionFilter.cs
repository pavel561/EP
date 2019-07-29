﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace EP.Balda.Web.Filters
{
    public class GlobalExceptionFilter : ActionFilterAttribute
    {
        public void OnException(ExceptionContext context)
        {
            context.ExceptionHandled = true;
            context.Result = new ContentResult
            {
                Content = $"{context.ActionDescriptor.DisplayName} {context.Exception.StackTrace} {context.Exception.Message}",
                StatusCode = StatusCodes.Status500InternalServerError
            };
        }
    }
}