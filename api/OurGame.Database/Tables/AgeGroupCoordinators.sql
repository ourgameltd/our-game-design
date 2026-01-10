CREATE TABLE [dbo].[age_group_coordinators] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [age_group_id] UNIQUEIDENTIFIER NOT NULL,
    [coach_id] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [FK_age_group_coordinators_age_groups] FOREIGN KEY ([age_group_id]) REFERENCES [dbo].[age_groups]([id]) ON DELETE CASCADE,
    CONSTRAINT [FK_age_group_coordinators_coaches] FOREIGN KEY ([coach_id]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_age_group_coordinators_age_group_id] ON [dbo].[age_group_coordinators]([age_group_id]);
GO

CREATE INDEX [IX_age_group_coordinators_coach_id] ON [dbo].[age_group_coordinators]([coach_id]);
GO
