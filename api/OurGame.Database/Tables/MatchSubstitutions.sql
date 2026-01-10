CREATE TABLE [dbo].[match_substitutions] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_id] UNIQUEIDENTIFIER NOT NULL,
    [minute] INT NOT NULL,
    [player_out_id] UNIQUEIDENTIFIER NOT NULL,
    [player_in_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_match_substitutions_matches] FOREIGN KEY ([match_id]) REFERENCES [dbo].[matches]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_match_substitutions_player_out] FOREIGN KEY ([player_out_id]) REFERENCES [dbo].[players]([id]),
    CONSTRAINT [FK_match_substitutions_player_in] FOREIGN KEY ([player_in_id]) REFERENCES [dbo].[players]([id])
);
GO

CREATE INDEX [IX_match_substitutions_match_id] ON [dbo].[match_substitutions]([match_id]);
GO
