using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class LineupPlayerSeedData
{
    public static List<LineupPlayer> GetLineupPlayers()
    {
        var now = DateTime.UtcNow;
        var lineupId = Guid.Parse("00000000-0000-0000-0000-000000000001"); // Will need to match actual lineup ID
        
        return new List<LineupPlayer>
        {
            new LineupPlayer
            {
                Id = Guid.NewGuid(),
                LineupId = lineupId,
                PlayerId = Guid.Parse("p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5"),
                Position = "GK",
                SquadNumber = 1,
                IsStarting = true,
            },
            new LineupPlayer
            {
                Id = Guid.NewGuid(),
                LineupId = lineupId,
                PlayerId = Guid.Parse("p10b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d"),
                Position = "CB",
                SquadNumber = 4,
                IsStarting = true,
            },
            new LineupPlayer
            {
                Id = Guid.NewGuid(),
                LineupId = lineupId,
                PlayerId = Guid.Parse("p11c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e"),
                Position = "CB",
                SquadNumber = 5,
                IsStarting = true,
            },
            new LineupPlayer
            {
                Id = Guid.NewGuid(),
                LineupId = lineupId,
                PlayerId = Guid.Parse("p12d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f"),
                Position = "CM",
                SquadNumber = 8,
                IsStarting = true,
            },
            new LineupPlayer
            {
                Id = Guid.NewGuid(),
                LineupId = lineupId,
                PlayerId = Guid.Parse("p13e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a"),
                Position = "ST",
                SquadNumber = 9,
                IsStarting = true,
            },
            new LineupPlayer
            {
                Id = Guid.NewGuid(),
                LineupId = lineupId,
                PlayerId = Guid.Parse("p29f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b"),
                Position = null,
                SquadNumber = 11,
                IsStarting = true,
            }
        };
    }
}
