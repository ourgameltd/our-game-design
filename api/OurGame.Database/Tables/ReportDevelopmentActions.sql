CREATE TABLE [dbo].[report_development_actions] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [report_id] UNIQUEIDENTIFIER NOT NULL,
    [goal] NVARCHAR(MAX) NOT NULL,
    [actions] NVARCHAR(MAX) NULL, -- JSON array
    [start_date] DATE NULL,
    [target_date] DATE NULL,
    [completed] BIT NOT NULL DEFAULT 0,
    [completed_date] DATE NULL,
    CONSTRAINT [FK_report_development_actions_reports] FOREIGN KEY ([report_id]) REFERENCES [dbo].[player_reports]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_report_development_actions_report_id] ON [dbo].[report_development_actions]([report_id]);
GO
