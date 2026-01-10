CREATE TABLE [dbo].[match_lineups] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [match_id] UNIQUEIDENTIFIER NOT NULL,
    [formation_id] UNIQUEIDENTIFIER NULL,
    [tactic_id] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [FK_match_lineups_matches] FOREIGN KEY ([match_id]) REFERENCES [dbo].[matches]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_match_lineups_formation] FOREIGN KEY ([formation_id]) REFERENCES [dbo].[formations]([id]),
    CONSTRAINT [FK_match_lineups_tactic] FOREIGN KEY ([tactic_id]) REFERENCES [dbo].[formations]([id])
);
GO

CREATE INDEX [IX_match_lineups_match_id] ON [dbo].[match_lineups]([match_id]);
GO
