CREATE TABLE [dbo].[matches] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [team_id] UNIQUEIDENTIFIER NOT NULL,
    [season_id] NVARCHAR(20) NULL,
    [squad_size] [dbo].[squad_size_enum] NULL,
    [opposition] NVARCHAR(255) NOT NULL,
    [match_date] DATETIME2 NOT NULL,
    [meet_time] DATETIME2 NULL,
    [kick_off_time] DATETIME2 NULL,
    [location] NVARCHAR(255) NULL,
    [is_home] BIT NOT NULL DEFAULT 1,
    [competition] NVARCHAR(100) NULL,
    [primary_kit_id] UNIQUEIDENTIFIER NULL,
    [secondary_kit_id] UNIQUEIDENTIFIER NULL,
    [goalkeeper_kit_id] UNIQUEIDENTIFIER NULL,
    [home_score] INT NULL,
    [away_score] INT NULL,
    [status] [dbo].[match_status_enum] NOT NULL,
    [is_locked] BIT NOT NULL DEFAULT 0,
    [notes] NVARCHAR(MAX) NULL,
    [weather_condition] NVARCHAR(50) NULL,
    [weather_temperature] INT NULL,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_matches_teams] FOREIGN KEY ([team_id]) REFERENCES [dbo].[teams]([id]),
    CONSTRAINT [FK_matches_primary_kit] FOREIGN KEY ([primary_kit_id]) REFERENCES [dbo].[kits]([id]),
    CONSTRAINT [FK_matches_secondary_kit] FOREIGN KEY ([secondary_kit_id]) REFERENCES [dbo].[kits]([id]),
    CONSTRAINT [FK_matches_goalkeeper_kit] FOREIGN KEY ([goalkeeper_kit_id]) REFERENCES [dbo].[kits]([id])
);
GO

CREATE INDEX [IX_matches_team_id] ON [dbo].[matches]([team_id]);
GO

CREATE INDEX [IX_matches_match_date] ON [dbo].[matches]([match_date]);
GO
