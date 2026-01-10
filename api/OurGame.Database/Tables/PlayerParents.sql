CREATE TABLE [dbo].[player_parents] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [parent_user_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_player_parents_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_player_parents_users] FOREIGN KEY ([parent_user_id]) REFERENCES [dbo].[users]([id])
);
GO

CREATE INDEX [IX_player_parents_player_id] ON [dbo].[player_parents]([player_id]);
GO

CREATE INDEX [IX_player_parents_parent_user_id] ON [dbo].[player_parents]([parent_user_id]);
GO
