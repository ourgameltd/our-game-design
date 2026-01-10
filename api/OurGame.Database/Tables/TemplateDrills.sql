CREATE TABLE [dbo].[template_drills] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [template_id] UNIQUEIDENTIFIER NOT NULL,
    [drill_id] UNIQUEIDENTIFIER NOT NULL,
    [drill_order] INT NOT NULL,
    CONSTRAINT [FK_template_drills_templates] FOREIGN KEY ([template_id]) REFERENCES [dbo].[drill_templates]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_template_drills_drills] FOREIGN KEY ([drill_id]) REFERENCES [dbo].[drills]([id])
);
GO

CREATE INDEX [IX_template_drills_template_id] ON [dbo].[template_drills]([template_id]);
GO

CREATE INDEX [IX_template_drills_drill_id] ON [dbo].[template_drills]([drill_id]);
GO
