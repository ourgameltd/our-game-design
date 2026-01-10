CREATE TABLE [dbo].[cards] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_report_id] UNIQUEIDENTIFIER NOT NULL,
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [type] [dbo].[card_type_enum] NOT NULL,
    [minute] INT NOT NULL,
    [reason] NVARCHAR(MAX) NULL,
    CONSTRAINT [FK_cards_match_reports] FOREIGN KEY ([match_report_id]) REFERENCES [dbo].[match_reports]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_cards_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_cards_match_report_id] ON [dbo].[cards]([match_report_id]);
GO

CREATE INDEX [IX_cards_player_id] ON [dbo].[cards]([player_id]);
GO
