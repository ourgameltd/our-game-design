CREATE TABLE [dbo].[player_images] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [url] NVARCHAR(MAX) NOT NULL,
    [caption] NVARCHAR(255) NULL,
    [photo_date] DATETIME2 NULL,
    [uploaded_by] UNIQUEIDENTIFIER NULL,
    [tags] NVARCHAR(MAX) NULL, -- JSON array
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_player_images_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_player_images_users] FOREIGN KEY ([uploaded_by]) REFERENCES [dbo].[users]([id])
);
GO

CREATE INDEX [IX_player_images_player_id] ON [dbo].[player_images]([player_id]);
GO

CREATE INDEX [IX_player_images_uploaded_by] ON [dbo].[player_images]([uploaded_by]);
GO
