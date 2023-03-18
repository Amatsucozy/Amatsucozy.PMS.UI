using Accounts.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Accounts.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpPost]
    public IActionResult LoggedIn(UserLoggedInDto userLoggedInDto)
    {
        return Ok();
    }
}