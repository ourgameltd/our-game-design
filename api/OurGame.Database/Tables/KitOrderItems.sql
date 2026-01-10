CREATE TABLE [dbo].[kit_order_items] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [order_id] UNIQUEIDENTIFIER NOT NULL,
    [type] [dbo].[kit_item_type_enum] NOT NULL,
    [size] NVARCHAR(20) NULL,
    [quantity] INT NOT NULL,
    [price] DECIMAL(10,2) NULL,
    CONSTRAINT [FK_kit_order_items_orders] FOREIGN KEY ([order_id]) REFERENCES [dbo].[kit_orders]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_kit_order_items_order_id] ON [dbo].[kit_order_items]([order_id]);
GO
