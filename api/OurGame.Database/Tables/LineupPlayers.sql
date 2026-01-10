CREATE TABLE [dbo].[lineup_players] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [lineup_id] UNIQUEIDENTIFIER NOT NULL,
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [position] [dbo].[player_position_enum] NOT NULL,
    [squad_number] INT NULL,
    [is_starting] BIT NOT NULL DEFAULT 1,
    CONSTRAINT [FK_lineup_players_lineups] FOREIGN KEY ([lineup_id]) REFERENCES [dbo].[match_lineups]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_lineup_players_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_lineup_players_lineup_id] ON [dbo].[lineup_players]([lineup_id]);
GO

CREATE INDEX [IX_lineup_players_player_id] ON [dbo].[lineup_players]([player_id]);
GO
