using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class MatchReportSeedData
{
    public static List<MatchReport> GetMatchReports()
    {
        var now = DateTime.UtcNow;
        
        return new List<MatchReport>
        {
            new MatchReport
            {
                Id = Guid.NewGuid(),
                MatchId = MatchSeedData.Match3_Id,
                Summary = "Dominant performance from the Reds with excellent teamwork. Strong defensive display kept Rangers at bay.",
                CaptainId = Guid.Parse("p10b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d"),
                PlayerOfMatchId = Guid.Parse("p13e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a"),
                
                CreatedAt = now,
            },
            new MatchReport
            {
                Id = Guid.NewGuid(),
                MatchId = MatchSeedData.Match5_Id,
                Summary = "Comprehensive victory with a clean sheet. Outstanding performance from the whole team.",
                CaptainId = Guid.Parse("p10b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d"),
                PlayerOfMatchId = Guid.Parse("p13e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a"),
                
                CreatedAt = now,
            }
        };
    }
}
