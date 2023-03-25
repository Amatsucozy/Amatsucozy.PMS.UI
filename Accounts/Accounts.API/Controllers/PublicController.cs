using Microsoft.AspNetCore.Mvc;

namespace Accounts.API.Controllers;

[ApiController]
[Route("Public/api/[controller]")]
public abstract class PublicController : ControllerBase
{
}