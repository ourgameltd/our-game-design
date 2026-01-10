CREATE TABLE [dbo].[training_plans] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [created_by] UNIQUEIDENTIFIER NULL,
    [period_start] DATE NULL,
    [period_end] DATE NULL,
    [status] [dbo].[plan_status_enum] NOT NULL,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_training_plans_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_training_plans_coaches] FOREIGN KEY ([created_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_training_plans_player_id] ON [dbo].[training_plans]([player_id]);
GO

CREATE INDEX [IX_training_plans_created_by] ON [dbo].[training_plans]([created_by]);
GO
