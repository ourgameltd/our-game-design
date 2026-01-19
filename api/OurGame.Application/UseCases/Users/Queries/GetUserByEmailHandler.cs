using MediatR;
using Microsoft.EntityFrameworkCore;
using OurGame.Application.Abstractions.Exceptions;
using OurGame.Application.UseCases.Users.DTOs;
using OurGame.Persistence.Models;

namespace OurGame.Application.UseCases.Users.Queries;

/// <summary>
/// Handler for GetUserByEmailQuery
/// </summary>
public class GetUserByEmailHandler : IRequestHandler<GetUserByEmailQuery, UserProfileDto>
{
    private readonly OurGameContext _db;

    public GetUserByEmailHandler(OurGameContext db)
    {
        _db = db;
    }

    public async Task<UserProfileDto> Handle(GetUserByEmailQuery query, CancellationToken cancellationToken)
    {
        var user = await _db.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Email == query.Email, cancellationToken);

        if (user == null)
        {
            throw new NotFoundException("User", query.Email);
        }

        // Check if user is associated with a player or coach
        var player = await _db.Players
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.UserId == user.Id, cancellationToken);

        var coach = await _db.Coaches
            .AsNoTracking()
            .FirstOrDefaultAsync(c => c.UserId == user.Id, cancellationToken);

        return new UserProfileDto
        {
            Id = user.Id,
            AzureUserId = user.AzureUserId,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Role = user.Role.ToString(),
            Photo = user.Photo ?? string.Empty,
            Preferences = user.Preferences ?? string.Empty,
            CreatedAt = user.CreatedAt,
            UpdatedAt = user.UpdatedAt,
            PlayerId = player?.Id,
            CoachId = coach?.Id
        };
    }
}
