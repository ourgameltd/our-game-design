CREATE TABLE [dbo].[clubs] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [name] NVARCHAR(255) NOT NULL,
    [short_name] NVARCHAR(50) NULL,
    [logo] NVARCHAR(MAX) NULL,
    [primary_color] NVARCHAR(7) NULL,
    [secondary_color] NVARCHAR(7) NULL,
    [accent_color] NVARCHAR(7) NULL,
    [city] NVARCHAR(100) NULL,
    [country] NVARCHAR(100) NULL,
    [venue] NVARCHAR(255) NULL,
    [address] NVARCHAR(MAX) NULL,
    [founded_year] INT NULL,
    [history] NVARCHAR(MAX) NULL,
    [ethos] NVARCHAR(MAX) NULL,
    [principles] NVARCHAR(MAX) NULL, -- JSON array
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);
GO

CREATE INDEX [IX_clubs_name] ON [dbo].[clubs]([name]);
GO
