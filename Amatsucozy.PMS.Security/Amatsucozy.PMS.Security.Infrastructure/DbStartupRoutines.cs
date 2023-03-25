using Amatsucozy.PMS.Security.Core;
using Duende.IdentityServer.EntityFramework.DbContexts;
using Duende.IdentityServer.EntityFramework.Mappers;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Amatsucozy.PMS.Security.Infrastructure;

public static class DbStartupRoutines
{
    public static void DbStart(this IApplicationBuilder applicationBuilder)
    {
        using var scope = applicationBuilder.ApplicationServices.CreateScope();
        using var pgDbContext = scope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>();
        using var configDbContext = scope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();

        if (pgDbContext.Database.GetPendingMigrations().Any())
        {
            pgDbContext.Database.Migrate();
        }

        if (configDbContext.Database.GetPendingMigrations().Any())
        {
            configDbContext.Database.Migrate();
        }
        
        if (!configDbContext.Clients.Any())
        {
            foreach (var client in Config.Clients)
            {
                configDbContext.Clients.Add(client.ToEntity());
            }
            configDbContext.SaveChanges();
        }

        if (!configDbContext.IdentityResources.Any())
        {
            foreach (var resource in Config.IdentityResources)
            {
                configDbContext.IdentityResources.Add(resource.ToEntity());
            }
            configDbContext.SaveChanges();
        }

        if (!configDbContext.ApiScopes.Any())
        {
            foreach (var resource in Config.ApiScopes)
            {
                configDbContext.ApiScopes.Add(resource.ToEntity());
            }
            configDbContext.SaveChanges();
        }
    }
}