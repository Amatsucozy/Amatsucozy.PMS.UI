using Microsoft.EntityFrameworkCore;

namespace Amatsucozy.PMS.Security.Infrastructure;

public sealed class SecurityDbContext : DbContext
{
    public SecurityDbContext(DbContextOptions<SecurityDbContext> dbContextOptions) : base(dbContextOptions)
    {
    }
}