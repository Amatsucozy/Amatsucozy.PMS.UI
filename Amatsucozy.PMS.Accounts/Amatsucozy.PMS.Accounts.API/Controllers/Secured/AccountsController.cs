using Amatsucozy.PMS.Shared.API.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace Amatsucozy.PMS.Accounts.API.Controllers.Secured;

public sealed class AccountsController : SecuredController
{
    public IActionResult Get()
    {
        return Ok();
    }
}