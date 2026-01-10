CREATE TABLE [dbo].[player_teams] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [team_id] UNIQUEIDENTIFIER NOT NULL,
    [squad_number] INT NULL,
    [assigned_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_player_teams_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_player_teams_teams] FOREIGN KEY ([team_id]) REFERENCES [dbo].[teams]([id])
);
GO

CREATE INDEX [IX_player_teams_player_id] ON [dbo].[player_teams]([player_id]);
GO

CREATE INDEX [IX_player_teams_team_id] ON [dbo].[player_teams]([team_id]);
GO
