CREATE TABLE [dbo].[users] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [email] NVARCHAR(255) NOT NULL UNIQUE,
    [first_name] NVARCHAR(100) NULL,
    [last_name] NVARCHAR(100) NULL,
    [role] [dbo].[user_role_enum] NULL,
    [club_id] UNIQUEIDENTIFIER NULL,
    [player_id] UNIQUEIDENTIFIER NULL,
    [staff_id] UNIQUEIDENTIFIER NULL,
    [photo] NVARCHAR(MAX) NULL,
    [preferences] NVARCHAR(MAX) NULL, -- JSON data
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_users_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id])
);
GO

CREATE INDEX [IX_users_club_id] ON [dbo].[users]([club_id]);
GO

CREATE INDEX [IX_users_player_id] ON [dbo].[users]([player_id]);
GO

CREATE INDEX [IX_users_staff_id] ON [dbo].[users]([staff_id]);
GO
