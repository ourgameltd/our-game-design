using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.SeedData;

public static class GoalSeedData
{
    // Note: Goals are linked to MatchReports, not directly to Matches
    // These IDs need to be set after MatchReports are created
    public static readonly Guid Goal1_Id = Guid.NewGuid();
    public static readonly Guid Goal2_Id = Guid.NewGuid();
    public static readonly Guid Goal3_Id = Guid.NewGuid();
    public static readonly Guid Goal4_Id = Guid.NewGuid();
    public static readonly Guid Goal5_Id = Guid.NewGuid();
    public static readonly Guid Goal6_Id = Guid.NewGuid();
    public static readonly Guid Goal7_Id = Guid.NewGuid();

    public static List<Goal> GetGoals()
    {
        // TODO: Cannot seed Goals until MatchReport IDs are available
        // Goals are linked to MatchReports via MatchReportId, not directly to Matches
        return new List<Goal>();
    }
}
