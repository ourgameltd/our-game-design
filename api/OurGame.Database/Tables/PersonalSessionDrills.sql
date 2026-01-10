CREATE TABLE [dbo].[personal_session_drills] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [personal_session_id] UNIQUEIDENTIFIER NOT NULL,
    [drill_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_personal_session_drills_sessions] FOREIGN KEY ([personal_session_id]) REFERENCES [dbo].[personal_sessions]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_personal_session_drills_drills] FOREIGN KEY ([drill_id]) REFERENCES [dbo].[drills]([id])
);
GO

CREATE INDEX [IX_personal_session_drills_personal_session_id] ON [dbo].[personal_session_drills]([personal_session_id]);
GO

CREATE INDEX [IX_personal_session_drills_drill_id] ON [dbo].[personal_session_drills]([drill_id]);
GO
