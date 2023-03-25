using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Amatsucozy.PMS.Security.API.Pages;

[AllowAnonymous]
public class Index : PageModel
{
    public string Version;
        
    public void OnGet()
    {
        Version = typeof(Duende.IdentityServer.Hosting.IdentityServerMiddleware).Assembly.GetCustomAttribute<AssemblyInformationalVersionAttribute>()?.InformationalVersion.Split('+').First();
    }
}