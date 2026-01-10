CREATE TABLE [dbo].[position_overrides] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [formation_id] UNIQUEIDENTIFIER NOT NULL,
    [position_index] INT NOT NULL,
    [x_coord] DECIMAL(5,2) NULL,
    [y_coord] DECIMAL(5,2) NULL,
    [direction] [dbo].[direction_enum] NULL,
    CONSTRAINT [FK_position_overrides_formations] FOREIGN KEY ([formation_id]) REFERENCES [dbo].[formations]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_position_overrides_formation_id] ON [dbo].[position_overrides]([formation_id]);
GO
