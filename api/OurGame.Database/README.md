# OurGame Database Setup

## Docker SQL Server Container

To start a SQL Server container for local development:

```powershell
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourStrong@Passw0rd" -p 1433:1433 --name ourgame-sql -d mcr.microsoft.com/mssql/server:2022-latest
```

### Connection String
After starting the container, use this connection string:
```
Server=localhost,1433;Database=OurGame;User Id=sa;Password=YourStrong@Passw0rd;TrustServerCertificate=True;
```

### Container Management

**Stop the container:**
```powershell
docker stop ourgame-sql
```

**Start the container:**
```powershell
docker start ourgame-sql
```

**Remove the container:**
```powershell
docker rm -f ourgame-sql
```

**View logs:**
```powershell
docker logs ourgame-sql
```

## Deploying the Database Schema

### Option 1: Using Visual Studio or Azure Data Studio
1. Open the `OurGame.Database.sqlproj` file in Visual Studio or Azure Data Studio
2. Right-click the project and select "Publish"
3. Enter the connection details:
   - Server: `localhost,1433`
   - Database: `OurGame`
   - Authentication: SQL Server Authentication
   - Username: `sa`
   - Password: `YourStrong@Passw0rd`
4. Click "Publish" to deploy the schema

### Option 2: Using SqlPackage CLI
```powershell
SqlPackage /Action:Publish /SourceFile:"OurGame.Database.dacpac" /TargetConnectionString:"Server=localhost,1433;Database=OurGame;User Id=sa;Password=YourStrong@Passw0rd;TrustServerCertificate=True;"
```

### Option 3: Using SQL Scripts
Build the project first to generate the deployment script:
```powershell
cd api\OurGame.Database
msbuild OurGame.Database.sqlproj /t:Build /p:Configuration=Debug
```

Then apply the generated script using sqlcmd:
```powershell
sqlcmd -S localhost,1433 -U sa -P "YourStrong@Passw0rd" -i "bin\Debug\OurGame.Database.sql"
```

## Database Schema Overview

The database contains 50+ tables organized into the following domains:

### Core Tables
- `users`, `clubs`, `coaches` - Core user and organization management
- `age_groups`, `teams` - Team organizational structure
- `kits` - Kit management

### Player Management
- `players`, `player_attributes` - Player profiles and EA FC-style attributes (35 metrics)
- `player_teams`, `player_age_groups` - Player assignments
- `player_parents`, `emergency_contacts` - Family and safety information
- `player_images` - Player photo gallery

### Formations & Tactics
- `formations` - Formation library with inheritance support
- `formation_positions` - Position definitions
- `position_overrides` - Custom position adjustments
- `tactic_principles` - Tactical instructions

### Match Management
- `matches`, `match_lineups` - Match scheduling and lineup management
- `match_reports`, `goals`, `cards`, `injuries` - Match reporting
- `performance_ratings` - Player performance tracking
- `match_substitutions` - Substitution tracking

### Training
- `training_sessions` - Training session scheduling
- `drills`, `drill_templates` - Drill library and templates
- `session_drills`, `session_attendance` - Session content and attendance

### Player Development
- `player_reports` - Performance reports
- `development_plans`, `development_goals` - Development planning
- `training_plans`, `training_objectives` - Personal training plans
- `similar_professionals` - Professional player comparisons

### Kit Orders
- `kit_orders`, `kit_order_items` - Kit ordering system

## Notes

- All tables use `UNIQUEIDENTIFIER` (GUID) as primary keys
- User-defined types are used for enums to ensure consistency
- JSON columns store array data (PostgreSQL JSONB equivalent using NVARCHAR(MAX))
- Audit timestamps (`created_at`, `updated_at`) are included where applicable
- Foreign key relationships enforce referential integrity
- Indexes are created on all foreign keys and frequently queried columns
