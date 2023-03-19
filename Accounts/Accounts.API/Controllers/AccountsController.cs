using Accounts.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accounts.API.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountsController : ControllerBase
{
    [Authorize]
    public IActionResult Get()
    {
        return Ok();
    }
}