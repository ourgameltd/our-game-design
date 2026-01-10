CREATE TABLE [dbo].[session_coaches] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [session_id] UNIQUEIDENTIFIER NOT NULL,
    [coach_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_session_coaches_sessions] FOREIGN KEY ([session_id]) REFERENCES [dbo].[training_sessions]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_session_coaches_coaches] FOREIGN KEY ([coach_id]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_session_coaches_session_id] ON [dbo].[session_coaches]([session_id]);
GO

CREATE INDEX [IX_session_coaches_coach_id] ON [dbo].[session_coaches]([coach_id]);
GO
