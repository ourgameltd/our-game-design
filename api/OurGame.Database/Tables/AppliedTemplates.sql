CREATE TABLE [dbo].[applied_templates] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [session_id] UNIQUEIDENTIFIER NOT NULL,
    [template_id] UNIQUEIDENTIFIER NOT NULL,
    [applied_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_applied_templates_sessions] FOREIGN KEY ([session_id]) REFERENCES [dbo].[training_sessions]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_applied_templates_templates] FOREIGN KEY ([template_id]) REFERENCES [dbo].[drill_templates]([id])
);
GO

CREATE INDEX [IX_applied_templates_session_id] ON [dbo].[applied_templates]([session_id]);
GO

CREATE INDEX [IX_applied_templates_template_id] ON [dbo].[applied_templates]([template_id]);
GO
