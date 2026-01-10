CREATE TABLE [dbo].[player_age_groups] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [age_group_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_player_age_groups_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_player_age_groups_age_groups] FOREIGN KEY ([age_group_id]) REFERENCES [dbo].[age_groups]([id])
);
GO

CREATE INDEX [IX_player_age_groups_player_id] ON [dbo].[player_age_groups]([player_id]);
GO

CREATE INDEX [IX_player_age_groups_age_group_id] ON [dbo].[player_age_groups]([age_group_id]);
GO
