CREATE TABLE [dbo].[match_reports] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_id] UNIQUEIDENTIFIER NOT NULL,
    [summary] NVARCHAR(MAX) NULL,
    [captain_id] UNIQUEIDENTIFIER NULL,
    [player_of_match_id] UNIQUEIDENTIFIER NULL,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_match_reports_matches] FOREIGN KEY ([match_id]) REFERENCES [dbo].[matches]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_match_reports_captain] FOREIGN KEY ([captain_id]) REFERENCES [dbo].[players]([id]),
    CONSTRAINT [FK_match_reports_player_of_match] FOREIGN KEY ([player_of_match_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_match_reports_match_id] ON [dbo].[match_reports]([match_id]);
GO
