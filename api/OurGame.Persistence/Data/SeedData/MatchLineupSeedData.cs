using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class MatchLineupSeedData
{
    public static List<MatchLineup> GetMatchLineups()
    {
        var now = DateTime.UtcNow;
        
        return new List<MatchLineup>
        {
            new MatchLineup
            {
                Id = Guid.NewGuid(),
                MatchId = MatchSeedData.Match3_Id,
                FormationId = FormationSeedData.Formation_442_Classic_Id,
                TacticId = null,
            }
        };
    }
}
