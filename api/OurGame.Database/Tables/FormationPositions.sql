CREATE TABLE [dbo].[formation_positions] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [formation_id] UNIQUEIDENTIFIER NOT NULL,
    [position] [dbo].[player_position_enum] NOT NULL,
    [x_coord] DECIMAL(5,2) NULL,
    [y_coord] DECIMAL(5,2) NULL,
    [direction] [dbo].[direction_enum] NULL,
    [position_index] INT NOT NULL,
    CONSTRAINT [FK_formation_positions_formations] FOREIGN KEY ([formation_id]) REFERENCES [dbo].[formations]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_formation_positions_formation_id] ON [dbo].[formation_positions]([formation_id]);
GO
