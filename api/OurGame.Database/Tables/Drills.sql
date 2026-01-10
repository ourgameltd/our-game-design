CREATE TABLE [dbo].[drills] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [name] NVARCHAR(255) NOT NULL,
    [description] NVARCHAR(MAX) NULL,
    [duration_minutes] INT NULL,
    [category] [dbo].[drill_category_enum] NULL,
    [attributes] NVARCHAR(MAX) NULL, -- JSON array
    [equipment] NVARCHAR(MAX) NULL, -- JSON array
    [diagram] NVARCHAR(MAX) NULL,
    [instructions] NVARCHAR(MAX) NULL, -- JSON array
    [variations] NVARCHAR(MAX) NULL, -- JSON array
    [club_id] UNIQUEIDENTIFIER NULL,
    [created_by] UNIQUEIDENTIFIER NULL,
    [is_public] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_drills_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id]),
    CONSTRAINT [FK_drills_coaches] FOREIGN KEY ([created_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_drills_club_id] ON [dbo].[drills]([club_id]);
GO

CREATE INDEX [IX_drills_created_by] ON [dbo].[drills]([created_by]);
GO
