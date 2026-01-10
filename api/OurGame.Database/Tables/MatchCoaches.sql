CREATE TABLE [dbo].[match_coaches] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_id] UNIQUEIDENTIFIER NOT NULL,
    [coach_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_match_coaches_matches] FOREIGN KEY ([match_id]) REFERENCES [dbo].[matches]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_match_coaches_coaches] FOREIGN KEY ([coach_id]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_match_coaches_match_id] ON [dbo].[match_coaches]([match_id]);
GO

CREATE INDEX [IX_match_coaches_coach_id] ON [dbo].[match_coaches]([coach_id]);
GO
