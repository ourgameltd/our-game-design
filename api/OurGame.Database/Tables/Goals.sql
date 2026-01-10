CREATE TABLE [dbo].[goals] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_report_id] UNIQUEIDENTIFIER NOT NULL,
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [minute] INT NOT NULL,
    [assist_player_id] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [FK_goals_match_reports] FOREIGN KEY ([match_report_id]) REFERENCES [dbo].[match_reports]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_goals_player] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]),
    CONSTRAINT [FK_goals_assist_player] FOREIGN KEY ([assist_player_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_goals_match_report_id] ON [dbo].[goals]([match_report_id]);
GO

CREATE INDEX [IX_goals_player_id] ON [dbo].[goals]([player_id]);
GO
