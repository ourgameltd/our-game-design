CREATE TABLE [dbo].[age_groups] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [club_id] UNIQUEIDENTIFIER NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [code] NVARCHAR(50) NOT NULL,
    [level] [dbo].[level_enum] NULL,
    [current_season] NVARCHAR(20) NULL,
    [seasons] NVARCHAR(MAX) NULL, -- JSON array
    [default_season] NVARCHAR(20) NULL,
    [default_squad_size] [dbo].[squad_size_enum] NULL,
    [description] NVARCHAR(MAX) NULL,
    [is_archived] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_age_groups_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id]),
    CONSTRAINT [UQ_age_groups_code] UNIQUE ([code])
);
GO

CREATE INDEX [IX_age_groups_club_id] ON [dbo].[age_groups]([club_id]);
GO
