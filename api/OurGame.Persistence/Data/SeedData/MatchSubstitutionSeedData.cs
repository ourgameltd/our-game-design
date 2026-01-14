using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class MatchSubstitutionSeedData
{
    public static List<MatchSubstitution> GetSubstitutions()
    {
        return new List<MatchSubstitution>
        {
            // Substitution in Match 3
            new MatchSubstitution
            {
                Id = Guid.NewGuid(),
                MatchId = MatchSeedData.Match3_Id,
                PlayerOutId = Guid.Parse("p12d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f"),
                PlayerInId = Guid.Parse("p29f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b"),
                Minute = 75
            }
        };
    }
}
