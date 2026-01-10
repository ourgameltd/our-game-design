CREATE TABLE [dbo].[players] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [club_id] UNIQUEIDENTIFIER NOT NULL,
    [first_name] NVARCHAR(100) NOT NULL,
    [last_name] NVARCHAR(100) NOT NULL,
    [nickname] NVARCHAR(50) NULL,
    [date_of_birth] DATE NULL,
    [photo] NVARCHAR(MAX) NULL,
    [association_id] NVARCHAR(50) NULL,
    [preferred_positions] NVARCHAR(MAX) NULL, -- JSON array of player_position_enum
    [overall_rating] INT NULL,
    [allergies] NVARCHAR(MAX) NULL, -- JSON array
    [medical_conditions] NVARCHAR(MAX) NULL, -- JSON array
    [is_archived] BIT NOT NULL DEFAULT 0,
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_players_clubs] FOREIGN KEY ([club_id]) REFERENCES [dbo].[clubs]([id])
);
GO

CREATE INDEX [IX_players_club_id] ON [dbo].[players]([club_id]);
GO

CREATE INDEX [IX_players_date_of_birth] ON [dbo].[players]([date_of_birth]);
GO
