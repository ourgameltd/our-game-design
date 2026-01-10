CREATE TABLE [dbo].[session_attendance] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [session_id] UNIQUEIDENTIFIER NOT NULL,
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [present] BIT NOT NULL DEFAULT 0,
    [notes] NVARCHAR(MAX) NULL,
    CONSTRAINT [FK_session_attendance_sessions] FOREIGN KEY ([session_id]) REFERENCES [dbo].[training_sessions]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_session_attendance_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_session_attendance_session_id] ON [dbo].[session_attendance]([session_id]);
GO

CREATE INDEX [IX_session_attendance_player_id] ON [dbo].[session_attendance]([player_id]);
GO
