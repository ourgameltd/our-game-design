CREATE TABLE [dbo].[kits] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [club_id] UNIQUEIDENTIFIER NOT NULL,
    [team_id] UNIQUEIDENTIFIER NULL,
    [name] NVARCHAR(100) NOT NULL,
    [type] [dbo].[kit_type_enum] NOT NULL,
    [shirt_color] NVARCHAR(7) NULL,
    [shorts_color] NVARCHAR(7) NULL,
    [socks_color] NVARCHAR(7) NULL,
    [season] NVARCHAR(20) NULL,
    [is_active] BIT NOT NULL DEFAULT 1,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_kits_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id]),
    CONSTRAINT [FK_kits_teams] FOREIGN KEY ([team_id]) REFERENCES [dbo].[teams]([id])
);
GO

CREATE INDEX [IX_kits_club_id] ON [dbo].[kits]([club_id]);
GO

CREATE INDEX [IX_kits_team_id] ON [dbo].[kits]([team_id]);
GO
