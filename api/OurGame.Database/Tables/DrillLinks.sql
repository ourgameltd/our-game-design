CREATE TABLE [dbo].[drill_links] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [drill_id] UNIQUEIDENTIFIER NOT NULL,
    [url] NVARCHAR(MAX) NOT NULL,
    [title] NVARCHAR(255) NULL,
    [type] [dbo].[link_type_enum] NULL,
    CONSTRAINT [FK_drill_links_drills] FOREIGN KEY ([drill_id]) REFERENCES [dbo].[drills]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_drill_links_drill_id] ON [dbo].[drill_links]([drill_id]);
GO
