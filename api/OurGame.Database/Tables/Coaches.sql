CREATE TABLE [dbo].[coaches] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [club_id] UNIQUEIDENTIFIER NOT NULL,
    [first_name] NVARCHAR(100) NOT NULL,
    [last_name] NVARCHAR(100) NOT NULL,
    [date_of_birth] DATE NULL,
    [photo] NVARCHAR(MAX) NULL,
    [email] NVARCHAR(255) UNIQUE NULL,
    [phone] NVARCHAR(50) NULL,
    [association_id] NVARCHAR(50) NULL,
    [has_account] BIT NOT NULL DEFAULT 0,
    [role] [dbo].[coach_role_enum] NULL,
    [biography] NVARCHAR(MAX) NULL,
    [specializations] NVARCHAR(MAX) NULL, -- JSON array
    [is_archived] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_coaches_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id])
);
GO

CREATE INDEX [IX_coaches_club_id] ON [dbo].[coaches]([club_id]);
GO

CREATE INDEX [IX_coaches_email] ON [dbo].[coaches]([email]);
GO
