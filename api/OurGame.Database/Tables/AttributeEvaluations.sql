CREATE TABLE [dbo].[attribute_evaluations] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [evaluated_by] UNIQUEIDENTIFIER NOT NULL,
    [evaluated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [overall_rating] INT NULL,
    [coach_notes] NVARCHAR(MAX) NULL,
    [period_start] DATE NULL,
    [period_end] DATE NULL,
    CONSTRAINT [FK_attribute_evaluations_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_attribute_evaluations_coaches] FOREIGN KEY ([evaluated_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_attribute_evaluations_player_id] ON [dbo].[attribute_evaluations]([player_id]);
GO

CREATE INDEX [IX_attribute_evaluations_evaluated_by] ON [dbo].[attribute_evaluations]([evaluated_by]);
GO
