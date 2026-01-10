CREATE TABLE [dbo].[development_plans] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [created_by] UNIQUEIDENTIFIER NULL,
    [title] NVARCHAR(255) NOT NULL,
    [description] NVARCHAR(MAX) NULL,
    [period_start] DATE NULL,
    [period_end] DATE NULL,
    [status] [dbo].[plan_status_enum] NOT NULL,
    [coach_notes] NVARCHAR(MAX) NULL,
    [linked_report_id] UNIQUEIDENTIFIER NULL,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_development_plans_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_development_plans_coaches] FOREIGN KEY ([created_by]) REFERENCES [dbo].[coaches]([id]),
    CONSTRAINT [FK_development_plans_reports] FOREIGN KEY ([linked_report_id]) REFERENCES [dbo].[player_reports]([id])
);
GO

CREATE INDEX [IX_development_plans_player_id] ON [dbo].[development_plans]([player_id]);
GO

CREATE INDEX [IX_development_plans_created_by] ON [dbo].[development_plans]([created_by]);
GO
