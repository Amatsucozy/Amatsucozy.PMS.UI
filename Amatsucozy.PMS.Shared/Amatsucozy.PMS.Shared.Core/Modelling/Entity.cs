using System.ComponentModel.DataAnnotations;

namespace Amatsucozy.PMS.Shared.Core.Modelling;

public abstract class Entity : IEquatable<Entity>
{
    public Guid Id { get; private set; } = Guid.NewGuid();
    
    public DateTimeOffset CreatedAt { get; private set; } = DateTimeOffset.UtcNow;
    
    public DateTimeOffset UpdatedAt { get; private set; } = DateTimeOffset.UtcNow;
    
    [Timestamp]
    public byte[] RowVersion { get; private set; } = new byte[8];

    public bool Equals(Entity? other)
    {
        if (ReferenceEquals(null, other)) return false;
        if (ReferenceEquals(this, other)) return true;
        return Id.Equals(other.Id) && CreatedAt.Equals(other.CreatedAt);
    }

    public override bool Equals(object? obj)
    {
        if (ReferenceEquals(null, obj)) return false;
        if (ReferenceEquals(this, obj)) return true;
        return obj.GetType() == GetType() && Equals((Entity)obj);
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Id, CreatedAt);
    }
}