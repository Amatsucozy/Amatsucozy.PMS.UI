using Duende.IdentityServer.Models;

namespace Security.Core;

public static class Config
{
    public static IEnumerable<ApiScope> ApiScopes =>
        new List<ApiScope>
        {
            new(name: "openid", displayName: "OpenID"),
            new(name: "profile", displayName: "Profile"),
            new(name: "ui", displayName: "PMS UI"),
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

                // no interactive user, use the clientid/secret for authentication
                AllowedGrantTypes = GrantTypes.Code,

                // secret for authentication
                ClientSecrets =
                {
                    new Secret("secret".Sha256())
                },

                // scopes that client has access to
                AllowedScopes =
                {
                    "openid",
                    "profile",
                    "ui",
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