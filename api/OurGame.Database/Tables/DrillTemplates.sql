CREATE TABLE [dbo].[drill_templates] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [name] NVARCHAR(255) NOT NULL,
    [description] NVARCHAR(MAX) NULL,
    [aggregated_attributes] NVARCHAR(MAX) NULL, -- JSON array
    [total_duration] INT NULL,
    [category] [dbo].[drill_category_enum] NULL,
    [club_id] UNIQUEIDENTIFIER NULL,
    [created_by] UNIQUEIDENTIFIER NULL,
    [is_public] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_drill_templates_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id]),
    CONSTRAINT [FK_drill_templates_coaches] FOREIGN KEY ([created_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_drill_templates_club_id] ON [dbo].[drill_templates]([club_id]);
GO

CREATE INDEX [IX_drill_templates_created_by] ON [dbo].[drill_templates]([created_by]);
GO
