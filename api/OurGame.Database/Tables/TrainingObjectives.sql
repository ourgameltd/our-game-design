CREATE TABLE [dbo].[training_objectives] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [plan_id] UNIQUEIDENTIFIER NOT NULL,
    [title] NVARCHAR(255) NOT NULL,
    [description] NVARCHAR(MAX) NULL,
    [start_date] DATE NULL,
    [target_date] DATE NULL,
    [status] [dbo].[objective_status_enum] NOT NULL,
    [progress] INT NULL,
    [completed] BIT NOT NULL DEFAULT 0,
    [completed_date] DATE NULL,
    CONSTRAINT [FK_training_objectives_plans] FOREIGN KEY ([plan_id]) REFERENCES [dbo].[training_plans]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_training_objectives_plan_id] ON [dbo].[training_objectives]([plan_id]);
GO
