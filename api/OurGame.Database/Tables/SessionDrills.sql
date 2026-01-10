CREATE TABLE [dbo].[session_drills] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [session_id] UNIQUEIDENTIFIER NOT NULL,
    [drill_id] UNIQUEIDENTIFIER NOT NULL,
    [source] [dbo].[drill_source_enum] NULL,
    [template_id] UNIQUEIDENTIFIER NULL,
    [drill_order] INT NOT NULL,
    CONSTRAINT [FK_session_drills_sessions] FOREIGN KEY ([session_id]) REFERENCES [dbo].[training_sessions]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_session_drills_drills] FOREIGN KEY ([drill_id]) REFERENCES [dbo].[drills]([id]),
    CONSTRAINT [FK_session_drills_templates] FOREIGN KEY ([template_id]) REFERENCES [dbo].[drill_templates]([id])
);
GO

CREATE INDEX [IX_session_drills_session_id] ON [dbo].[session_drills]([session_id]);
GO

CREATE INDEX [IX_session_drills_drill_id] ON [dbo].[session_drills]([drill_id]);
GO
