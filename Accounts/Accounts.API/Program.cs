using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        var configSection = builder.Configuration.GetSection("IdentityServer");
        options.Authority = configSection.GetValue<string>("Authority");
        options.TokenValidationParameters.ValidateAudience = false;
        options.TokenValidationParameters.ValidTypes = new[] { "at+jwt" };
    });
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("ApiScope", policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireClaim("scope", "accounts");
    });
    options.DefaultPolicy = options.GetPolicy("ApiScope")!;
});
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

app.UseHttpsRedirection();
app.UseCors("default");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();