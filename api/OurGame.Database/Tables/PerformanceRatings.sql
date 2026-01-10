CREATE TABLE [dbo].[performance_ratings] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_report_id] UNIQUEIDENTIFIER NOT NULL,
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [rating] DECIMAL(3,1) NULL,
    CONSTRAINT [FK_performance_ratings_match_reports] FOREIGN KEY ([match_report_id]) REFERENCES [dbo].[match_reports]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_performance_ratings_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_performance_ratings_match_report_id] ON [dbo].[performance_ratings]([match_report_id]);
GO

CREATE INDEX [IX_performance_ratings_player_id] ON [dbo].[performance_ratings]([player_id]);
GO
