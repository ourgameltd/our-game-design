CREATE TABLE [dbo].[emergency_contacts] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [name] NVARCHAR(100) NOT NULL,
    [phone] NVARCHAR(50) NOT NULL,
    [relationship] NVARCHAR(100) NULL,
    [is_primary] BIT NOT NULL DEFAULT 0,
    CONSTRAINT [FK_emergency_contacts_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_emergency_contacts_player_id] ON [dbo].[emergency_contacts]([player_id]);
GO
