CREATE TABLE [dbo].[similar_professionals] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [report_id] UNIQUEIDENTIFIER NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [team] NVARCHAR(100) NULL,
    [position] NVARCHAR(50) NULL,
    [reason] NVARCHAR(MAX) NULL,
    CONSTRAINT [FK_similar_professionals_reports] FOREIGN KEY ([report_id]) REFERENCES [dbo].[player_reports]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_similar_professionals_report_id] ON [dbo].[similar_professionals]([report_id]);
GO
