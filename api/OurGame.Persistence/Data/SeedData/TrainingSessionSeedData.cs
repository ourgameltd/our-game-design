using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class TrainingSessionSeedData
{
    // Training Session IDs
    public static readonly Guid Session1_Technical_Id = Guid.Parse("s0a1b2c3-d4e5-f6a7-b8c9-c0d1e2f3a4b5");
    public static readonly Guid Session2_Tactical_Id = Guid.Parse("s1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6");
    public static readonly Guid Session3_Fitness_Id = Guid.Parse("s2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7");

    public static List<TrainingSession> GetTrainingSessions()
    {
        var now = DateTime.UtcNow;
        
        return new List<TrainingSession>
        {
            new TrainingSession
            {
                Id = Session1_Technical_Id,
                TeamId = TeamSeedData.Reds2014_Id,
                SessionDate = new DateTime(2026, 1, 2, 10, 0, 0, DateTimeKind.Utc),
                MeetTime = new DateTime(2026, 1, 2, 9, 30, 0, DateTimeKind.Utc),
                DurationMinutes = 75,
                Location = "Community Sports Ground - Pitch 2",
                FocusAreas = "[\"Passing & Movement\",\"Build-up Play\",\"Team Shape\"]",
                Notes = "Post-Christmas training session! Let's shake off those mince pies. Focus on passing drills and possession game.",
                Status = "scheduled",
                CreatedAt = now,
                UpdatedAt = now
            },
            new TrainingSession
            {
                Id = Session2_Tactical_Id,
                TeamId = TeamSeedData.Reds2014_Id,
                SessionDate = new DateTime(2025, 12, 30, 18, 0, 0, DateTimeKind.Utc),
                MeetTime = new DateTime(2025, 12, 30, 17, 30, 0, DateTimeKind.Utc),
                DurationMinutes = 90,
                Location = "Community Sports Ground - Pitch 1",
                FocusAreas = "[\"Tactical Awareness\",\"Set Pieces\",\"Defensive Shape\"]",
                Notes = "Focus on defensive organization ahead of the cup match on Saturday.",
                Status = "scheduled",
                CreatedAt = now,
                UpdatedAt = now
            },
            new TrainingSession
            {
                Id = Session3_Fitness_Id,
                TeamId = TeamSeedData.Reds2014_Id,
                SessionDate = new DateTime(2025, 1, 15, 18, 0, 0, DateTimeKind.Utc),
                MeetTime = new DateTime(2025, 1, 15, 17, 45, 0, DateTimeKind.Utc),
                DurationMinutes = 75,
                Location = "Community Sports Ground - Pitch 2",
                FocusAreas = "[\"Technical Skills\",\"Finishing\",\"First Touch\"]",
                Notes = "Focus on shooting technique this week. Bring shin pads.",
                Status = "scheduled",
                CreatedAt = now,
                UpdatedAt = now
            }
        };
    }
}
