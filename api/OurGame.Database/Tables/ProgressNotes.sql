CREATE TABLE [dbo].[progress_notes] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [plan_id] UNIQUEIDENTIFIER NOT NULL,
    [note_date] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [note] NVARCHAR(MAX) NOT NULL,
    [added_by] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [FK_progress_notes_plans] FOREIGN KEY ([plan_id]) REFERENCES [dbo].[training_plans]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_progress_notes_coaches] FOREIGN KEY ([added_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_progress_notes_plan_id] ON [dbo].[progress_notes]([plan_id]);
GO

CREATE INDEX [IX_progress_notes_added_by] ON [dbo].[progress_notes]([added_by]);
GO
