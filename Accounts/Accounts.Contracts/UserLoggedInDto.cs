namespace Accounts.Contracts;

public sealed class UserLoggedInDto
{
    public required string Code { get; set; }
    
    public required string State { get; set; }
}