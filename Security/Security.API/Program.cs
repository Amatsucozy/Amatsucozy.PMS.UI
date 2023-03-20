using DuendeIdentityServerQuickstartUI1;
using Microsoft.EntityFrameworkCore;
using Security.Infrastructure;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("Default");

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddRazorPages();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddIdentityServer()
    .AddConfigurationStore(options =>
    {
        options.ConfigureDbContext = dbOptions => dbOptions.UseNpgsql(connectionString, sqlBuilder =>
        {
            sqlBuilder.MigrationsAssembly(typeof(InfrastructureMarker).Assembly.GetName().Name);
        });
    })
    .AddOperationalStore(options =>
    {
        options.ConfigureDbContext = dbOptions => dbOptions.UseNpgsql(connectionString, sqlBuilder =>
        {
            sqlBuilder.MigrationsAssembly(typeof(InfrastructureMarker).Assembly.GetName().Name);
        });
    })
    .AddTestUsers(TestUsers.Users);
builder.Services.AddAuthorization();
builder.Services.AddCors(options =>
{
    options.AddPolicy("default", policyBuilder =>
    {
        policyBuilder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.DbStart();
app.UseHttpsRedirection();
app.UseCors("default");
app.UseStaticFiles();
app.UseRouting();
app.UseIdentityServer();
app.UseAuthorization();
app.MapControllers();
app.MapRazorPages()
    .RequireAuthorization();

app.Run();