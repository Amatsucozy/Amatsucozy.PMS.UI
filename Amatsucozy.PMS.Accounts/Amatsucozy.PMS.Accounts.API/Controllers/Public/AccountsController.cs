using Microsoft.AspNetCore.Mvc;

namespace Amatsucozy.PMS.Accounts.API.Controllers.Public;

public sealed class AccountsController : PublicController
{
    public IActionResult Get()
    {
        return Ok();
    }
}