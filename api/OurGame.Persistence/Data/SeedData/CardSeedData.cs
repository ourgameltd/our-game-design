using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class CardSeedData
{
    public static List<Card> GetCards()
    {
        // TODO: Cannot seed Cards until MatchReport IDs are available
        // Cards are linked to MatchReports via MatchReportId, not directly to Matches
        return new List<Card>();
    }
}
