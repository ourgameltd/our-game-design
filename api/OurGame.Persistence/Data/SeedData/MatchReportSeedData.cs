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
                CaptainId = PlayerSeedData.JamesWilson_Id,
                PlayerOfMatchId = PlayerSeedData.NoahAnderson_Id,
                
                CreatedAt = now,
            },
            new MatchReport
            {
                Id = Guid.NewGuid(),
                MatchId = MatchSeedData.Match5_Id,
                Summary = "Comprehensive victory with a clean sheet. Outstanding performance from the whole team.",
                CaptainId = PlayerSeedData.JamesWilson_Id,
                PlayerOfMatchId = PlayerSeedData.NoahAnderson_Id,
                
                CreatedAt = now,
            }
        };
    }
}
