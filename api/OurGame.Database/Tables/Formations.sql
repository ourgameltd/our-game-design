CREATE TABLE [dbo].[formations] (
    [id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [name] NVARCHAR(100) NOT NULL,
    [system] NVARCHAR(20) NULL,
    [squad_size] [dbo].[squad_size_enum] NULL,
    [is_system_formation] BIT NOT NULL DEFAULT 0,
    [parent_formation_id] UNIQUEIDENTIFIER NULL,
    [parent_tactic_id] UNIQUEIDENTIFIER NULL,
    [summary] NVARCHAR(MAX) NULL,
    [description] NVARCHAR(MAX) NULL,
    [style] NVARCHAR(50) NULL,
    [scope_type] [dbo].[scope_type_enum] NULL,
    [scope_club_id] UNIQUEIDENTIFIER NULL,
    [scope_age_group_id] UNIQUEIDENTIFIER NULL,
    [scope_team_id] UNIQUEIDENTIFIER NULL,
    [created_by] UNIQUEIDENTIFIER NULL,
    [tags] NVARCHAR(MAX) NULL, -- JSON array
    [created_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    [updated_at] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT [FK_formations_parent_formation] FOREIGN KEY ([parent_formation_id]) REFERENCES [dbo].[formations]([id]),
    CONSTRAINT [FK_formations_parent_tactic] FOREIGN KEY ([parent_tactic_id]) REFERENCES [dbo].[formations]([id]),
    CONSTRAINT [FK_formations_scope_club] FOREIGN KEY ([scope_club_id]) REFERENCES [dbo].[clubs]([id]),
    CONSTRAINT [FK_formations_created_by] FOREIGN KEY ([created_by]) REFERENCES [dbo].[coaches]([id])
);
GO

CREATE INDEX [IX_formations_parent_formation_id] ON [dbo].[formations]([parent_formation_id]);
GO

CREATE INDEX [IX_formations_parent_tactic_id] ON [dbo].[formations]([parent_tactic_id]);
GO

CREATE INDEX [IX_formations_scope_club_id] ON [dbo].[formations]([scope_club_id]);
GO

CREATE INDEX [IX_formations_created_by] ON [dbo].[formations]([created_by]);
GO
