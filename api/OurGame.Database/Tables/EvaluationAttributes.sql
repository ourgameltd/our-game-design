CREATE TABLE [dbo].[evaluation_attributes] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [evaluation_id] UNIQUEIDENTIFIER NOT NULL,
    [attribute_name] NVARCHAR(50) NOT NULL,
    [rating] INT NULL,
    [notes] NVARCHAR(MAX) NULL,
    CONSTRAINT [FK_evaluation_attributes_attribute_evaluations] FOREIGN KEY ([evaluation_id]) REFERENCES [dbo].[attribute_evaluations]([id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_evaluation_attributes_evaluation_id] ON [dbo].[evaluation_attributes]([evaluation_id]);
GO
