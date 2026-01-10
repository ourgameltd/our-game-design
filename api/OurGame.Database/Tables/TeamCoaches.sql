CREATE TABLE [dbo].[team_coaches] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [team_id] UNIQUEIDENTIFIER NOT NULL,
    [coach_id] UNIQUEIDENTIFIER NOT NULL,
    [assigned_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_team_coaches_teams] FOREIGN KEY ([team_id]) REFERENCES [dbo].[teams]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_team_coaches_coaches] FOREIGN KEY ([coach_id]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_team_coaches_team_id] ON [dbo].[team_coaches]([team_id]);
GO

CREATE INDEX [IX_team_coaches_coach_id] ON [dbo].[team_coaches]([coach_id]);
GO
