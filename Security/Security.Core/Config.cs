using Duende.IdentityServer.Models;

namespace Security.Core;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        new List<IdentityResource>
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile()
        };
    
    public static IEnumerable<ApiScope> ApiScopes =>
        new List<ApiScope>
        {
            new(name: "sts", displayName: "STS"),
            new(name: "accounts", displayName: "Accounts"),
            new(name: "pms", displayName: "PMS")
        };

    public static IEnumerable<Client> Clients =>
        new List<Client>
        {
            new()
            {
                ClientId = "pms-ui",
                AllowedGrantTypes = GrantTypes.Code,
                AllowedScopes =
                {
                    "openid",
                    "profile",
                    "sts",
                    "accounts",
                    "pms"
                },
                RedirectUris =
                {
                    "http://localhost:4200",
                    "http://localhost:4200/challenge",
                },
                PostLogoutRedirectUris =
                {
                    "http://localhost:4200"
                },
                AllowedCorsOrigins =
                {
                    "http://localhost:4200"
                },
                AccessTokenType = AccessTokenType.Jwt,
                RequireClientSecret = false
            }
        };
}