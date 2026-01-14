using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class PerformanceRatingSeedData
{
    public static List<PerformanceRating> GetPerformanceRatings()
    {
        // TODO: Cannot seed PerformanceRatings until MatchReport IDs are available
        // PerformanceRatings are linked to MatchReports via MatchReportId, not directly to Matches
        // Model only has: Id, MatchReportId, PlayerId, Rating (no RatedBy, Comments, CreatedAt, UpdatedAt)
        return new List<PerformanceRating>();
    }
}
