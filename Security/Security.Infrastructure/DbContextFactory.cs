using Duende.IdentityServer.EntityFramework.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Security.Infrastructure;

public sealed class DbContextFactory :
    IDesignTimeDbContextFactory<SecurityDbContext>,
    IDesignTimeDbContextFactory<PersistedGrantDbContext>,
    IDesignTimeDbContextFactory<ConfigurationDbContext>
{
    public SecurityDbContext CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<SecurityDbContext>()
            .UseNpgsql(DbConstants.ConnectionString, sqlBuilder =>
            {
                sqlBuilder.MigrationsAssembly(typeof(InfrastructureMarker).Assembly.GetName().Name);
            }).Options;

        return new SecurityDbContext(options);
    }

    // dotnet ef migrations add -c PersistedGrantDbContext -p ../Security.Infrastructure/Security.Infrastructure.csproj -o ../Security.Infrastructure/IdentityServerMigrations/PersistedGrant PersistedGrantInit
    PersistedGrantDbContext IDesignTimeDbContextFactory<PersistedGrantDbContext>.CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<PersistedGrantDbContext>()
            .UseNpgsql(DbConstants.ConnectionString, sqlBuilder =>
            {
                sqlBuilder.MigrationsAssembly(typeof(InfrastructureMarker).Assembly.GetName().Name);
            }).Options;

        return new PersistedGrantDbContext(options);
    }
    
    // dotnet ef migrations add -c ConfigurationDbContext -p ../Security.Infrastructure/Security.Infrastructure.csproj -o ../Security.Infrastructure/IdentityServerMigrations/Configuration ConfigurationInit
    ConfigurationDbContext IDesignTimeDbContextFactory<ConfigurationDbContext>.CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<ConfigurationDbContext>()
            .UseNpgsql(DbConstants.ConnectionString, sqlBuilder =>
            {
                sqlBuilder.MigrationsAssembly(typeof(InfrastructureMarker).Assembly.GetName().Name);
            }).Options;

        return new ConfigurationDbContext(options);
    }
}