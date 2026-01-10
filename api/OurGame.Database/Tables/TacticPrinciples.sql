CREATE TABLE [dbo].[tactic_principles] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [formation_id] UNIQUEIDENTIFIER NOT NULL,
    [title] NVARCHAR(100) NOT NULL,
    [description] NVARCHAR(MAX) NULL,
    [position_indices] NVARCHAR(MAX) NULL, -- JSON array of ints
    CONSTRAINT [FK_tactic_principles_formations] FOREIGN KEY ([formation_id]) REFERENCES [dbo].[formations]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_tactic_principles_formation_id] ON [dbo].[tactic_principles]([formation_id]);
GO
