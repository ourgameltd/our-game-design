CREATE TABLE [dbo].[kit_orders] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [player_id] UNIQUEIDENTIFIER NOT NULL,
    [team_id] UNIQUEIDENTIFIER NOT NULL,
    [total_amount] DECIMAL(10,2) NULL,
    [status] [dbo].[order_status_enum] NOT NULL,
    [ordered_by] UNIQUEIDENTIFIER NULL,
    [ordered_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_kit_orders_players] FOREIGN KEY ([player_id]) REFERENCES [dbo].[players]([id]),
    CONSTRAINT [FK_kit_orders_teams] FOREIGN KEY ([team_id]) REFERENCES [dbo].[teams]([id]),
    CONSTRAINT [FK_kit_orders_users] FOREIGN KEY ([ordered_by]) REFERENCES [dbo].[users]([id])
);
GO

CREATE INDEX [IX_kit_orders_player_id] ON [dbo].[kit_orders]([player_id]);
GO

CREATE INDEX [IX_kit_orders_team_id] ON [dbo].[kit_orders]([team_id]);
GO

CREATE INDEX [IX_kit_orders_ordered_by] ON [dbo].[kit_orders]([ordered_by]);
GO
