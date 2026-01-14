using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class SessionAttendanceSeedData
{
    public static List<SessionAttendance> GetSessionAttendance()
    {
        var now = DateTime.UtcNow;
        
        return new List<SessionAttendance>
        {
            // Session 1 attendance
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session1_Technical_Id,
                PlayerId = Guid.Parse("p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session1_Technical_Id,
                PlayerId = Guid.Parse("p10b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session1_Technical_Id,
                PlayerId = Guid.Parse("p11c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session1_Technical_Id,
                PlayerId = Guid.Parse("p12d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f"),
                Present = false,
                Notes = "Ill",
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session1_Technical_Id,
                PlayerId = Guid.Parse("p13e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a"),
                Present = true,
                Notes = null,
            },
            // Session 2 attendance
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session2_Tactical_Id,
                PlayerId = Guid.Parse("p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session2_Tactical_Id,
                PlayerId = Guid.Parse("p10b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session2_Tactical_Id,
                PlayerId = Guid.Parse("p11c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session2_Tactical_Id,
                PlayerId = Guid.Parse("p12d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f"),
                Present = true,
                Notes = null,
            },
            new SessionAttendance
            {
                Id = Guid.NewGuid(),
                SessionId = TrainingSessionSeedData.Session2_Tactical_Id,
                PlayerId = Guid.Parse("p13e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a"),
                Present = true,
                Notes = "Arrived 10 mins late"
            }
        };
    }
}
