using Microsoft.EntityFrameworkCore;

namespace Security.Infrastructure;

public sealed class SecurityDbContext : DbContext
{
    public SecurityDbContext(DbContextOptions<SecurityDbContext> dbContextOptions) : base(dbContextOptions)
    {
    }
}