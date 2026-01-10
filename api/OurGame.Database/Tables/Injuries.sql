CREATE TABLE [dbo].[injuries] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_report_id] UNIQUEIDENTIFIER NOT NULL,
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [minute] INT NOT NULL,
    [description] NVARCHAR(MAX) NULL,
    [severity] [dbo].[severity_enum] NULL,
    CONSTRAINT [FK_injuries_match_reports] FOREIGN KEY ([match_report_id]) REFERENCES [dbo].[match_reports]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_injuries_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_injuries_match_report_id] ON [dbo].[injuries]([match_report_id]);
GO

CREATE INDEX [IX_injuries_player_id] ON [dbo].[injuries]([player_id]);
GO
