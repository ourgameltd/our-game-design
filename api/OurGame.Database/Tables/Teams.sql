CREATE TABLE [dbo].[teams] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [club_id] UNIQUEIDENTIFIER NOT NULL,
    [age_group_id] UNIQUEIDENTIFIER NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [short_name] NVARCHAR(20) NULL,
    [level] [dbo].[level_enum] NULL,
    [season] NVARCHAR(20) NULL,
    [formation_id] UNIQUEIDENTIFIER NULL,
    [primary_color] NVARCHAR(7) NULL,
    [secondary_color] NVARCHAR(7) NULL,
    [is_archived] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_teams_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id]),
    CONSTRAINT [FK_teams_age_groups] FOREIGN KEY ([age_group_id]) REFERENCES [dbo].[age_groups]([id]),
    CONSTRAINT [FK_teams_formations] FOREIGN KEY ([formation_id]) REFERENCES [dbo].[formations]([id])
);
GO

CREATE INDEX [IX_teams_club_id] ON [dbo].[teams]([club_id]);
GO

CREATE INDEX [IX_teams_age_group_id] ON [dbo].[teams]([age_group_id]);
GO

CREATE INDEX [IX_teams_formation_id] ON [dbo].[teams]([formation_id]);
GO
