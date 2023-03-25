using Microsoft.AspNetCore.Mvc;

namespace Amatsucozy.PMS.Accounts.API.Controllers;

[ApiController]
[Route("Public/api/[controller]")]
public abstract class PublicController : ControllerBase
{
}