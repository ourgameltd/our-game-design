CREATE TABLE [dbo].[personal_sessions] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [plan_id] UNIQUEIDENTIFIER NOT NULL,
    [title] NVARCHAR(255) NOT NULL,
    [session_date] DATETIME2 NOT NULL,
    [focus_areas] NVARCHAR(MAX) NULL, -- JSON array
    [completed] BIT NOT NULL DEFAULT 0,
    [notes] NVARCHAR(MAX) NULL,
    CONSTRAINT [FK_personal_sessions_plans] FOREIGN KEY ([plan_id]) REFERENCES [dbo].[training_plans]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_personal_sessions_plan_id] ON [dbo].[personal_sessions]([plan_id]);
GO
