CREATE TABLE [dbo].[training_sessions] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [team_id] UNIQUEIDENTIFIER NOT NULL,
    [session_date] DATETIME2 NOT NULL,
    [meet_time] DATETIME2 NULL,
    [duration_minutes] INT NULL,
    [location] NVARCHAR(255) NULL,
    [focus_areas] NVARCHAR(MAX) NULL, -- JSON array
    [template_id] UNIQUEIDENTIFIER NULL,
    [notes] NVARCHAR(MAX) NULL,
    [status] [dbo].[session_status_enum] NOT NULL,
    [is_locked] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_training_sessions_teams] FOREIGN KEY ([team_id]) REFERENCES [dbo].[teams]([id]),
    CONSTRAINT [FK_training_sessions_templates] FOREIGN KEY ([template_id]) REFERENCES [dbo].[drill_templates]([id])
);
GO

CREATE INDEX [IX_training_sessions_team_id] ON [dbo].[training_sessions]([team_id]);
GO

CREATE INDEX [IX_training_sessions_session_date] ON [dbo].[training_sessions]([session_date]);
GO
