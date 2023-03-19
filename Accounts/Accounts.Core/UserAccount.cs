namespace Accounts.Core;

public sealed class UserAccount
{
    public Guid Id { get; set; }

    public required string OAuthId { get; set; }

    public DateTimeOffset DateJoined { get; set; }

    public bool IsActive { get; set; }

    public required string FirstName { get; set; }

    public required string LastName { get; set; }

    public required string Nickname { get; set; }

    public byte ShirtNumber { get; set; }

    public byte? FavoriteShirtNumber { get; set; }
}