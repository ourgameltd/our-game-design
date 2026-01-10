-- User-defined types for enums
CREATE TYPE [dbo].[user_role_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[coach_role_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[player_position_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[kit_type_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[level_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[squad_size_enum] FROM NVARCHAR(20);
GO

CREATE TYPE [dbo].[scope_type_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[direction_enum] FROM NVARCHAR(20);
GO

CREATE TYPE [dbo].[match_status_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[card_type_enum] FROM NVARCHAR(20);
GO

CREATE TYPE [dbo].[severity_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[session_status_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[drill_source_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[drill_category_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[link_type_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[plan_status_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[objective_status_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[order_status_enum] FROM NVARCHAR(50);
GO

CREATE TYPE [dbo].[kit_item_type_enum] FROM NVARCHAR(50);
GO
