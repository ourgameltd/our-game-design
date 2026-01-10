CREATE TABLE [dbo].[player_reports] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [period_start] DATE NULL,
    [period_end] DATE NULL,
    [overall_rating] DECIMAL(3,1) NULL,
    [strengths] NVARCHAR(MAX) NULL, -- JSON array
    [areas_for_improvement] NVARCHAR(MAX) NULL, -- JSON array
    [coach_comments] NVARCHAR(MAX) NULL,
    [created_by] UNIQUEIDENTIFIER NULL,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_player_reports_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_player_reports_coaches] FOREIGN KEY ([created_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_player_reports_player_id] ON [dbo].[player_reports]([player_id]);
GO

CREATE INDEX [IX_player_reports_created_by] ON [dbo].[player_reports]([created_by]);
GO
