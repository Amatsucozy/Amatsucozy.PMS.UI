using Microsoft.AspNetCore.Mvc;

namespace Amatsucozy.PMS.Shared.API.Controllers;

[ApiController]
[Route("Public/api/[controller]")]
public abstract class PublicController : ControllerBase
{
}