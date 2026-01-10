CREATE TABLE [dbo].[development_goals] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [plan_id] UNIQUEIDENTIFIER NOT NULL,
    [goal] NVARCHAR(MAX) NOT NULL,
    [actions] NVARCHAR(MAX) NULL, -- JSON array
    [start_date] DATE NULL,
    [target_date] DATE NULL,
    [completed] BIT NOT NULL DEFAULT 0,
    [completed_date] DATE NULL,
    [progress] INT NULL,
    CONSTRAINT [FK_development_goals_plans] FOREIGN KEY ([plan_id]) REFERENCES [dbo].[development_plans]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_development_goals_plan_id] ON [dbo].[development_goals]([plan_id]);
GO
