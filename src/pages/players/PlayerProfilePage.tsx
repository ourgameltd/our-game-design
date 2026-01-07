import { useParams, Link } from 'react-router-dom';
import { getPlayerById } from '@data/players';
import { getPlayerRecentPerformances, getUpcomingMatchesByTeamIds } from '@data/matches';
import { getTeamById } from '@data/teams';
import { getAgeGroupById } from '@data/ageGroups';
import { Routes } from '@utils/routes';
import PageTitle from '@components/common/PageTitle';
import RecentPerformanceCard from '@components/player/RecentPerformanceCard';
import MatchesCard from '@components/matches/MatchesCard';
import { FileText, Target, Camera, TrendingUp } from 'lucide-react';

export default function PlayerProfilePage() {
  const { clubId, playerId, ageGroupId, teamId } = useParams();
  const player = getPlayerById(playerId!);
  const ageGroup = ageGroupId ? getAgeGroupById(ageGroupId) : null;
  const team = teamId ? getTeamById(teamId) : null;
  const recentPerformances = getPlayerRecentPerformances(playerId!, 5);
  const upcomingMatches = getUpcomingMatchesByTeamIds(player?.ageGroupIds || [], 3);

  if (!player) {
      return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="mx-auto px-4 py-4">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Player not found</h2>
          </div>
        </main>
      </div>
    );
  }

  // Determine back link based on context (team, age group, or club)
  let backLink: string;
  let subtitle: string;
  if (teamId && ageGroupId) {
    backLink = Routes.teamSquad(clubId!, ageGroupId, teamId);
    subtitle = `${ageGroup?.name || 'Age Group'} • ${team?.name || 'Team'}`;
  } else if (ageGroupId) {
    backLink = Routes.ageGroupPlayers(clubId!, ageGroupId);
    subtitle = ageGroup?.name || 'Age Group';
  } else {
    backLink = Routes.clubPlayers(clubId!);
    subtitle = 'Club Players';
  }

  // Determine settings link based on context
  let settingsLink: string;
  let abilitiesLink: string;
  let reportCardsLink: string;
  let developmentPlansLink: string;
  let albumLink: string;
  
  if (teamId && ageGroupId) {
    settingsLink = Routes.teamPlayerSettings(clubId!, ageGroupId, teamId, playerId!);
    abilitiesLink = Routes.teamPlayerAbilities(clubId!, ageGroupId, teamId, playerId!);
    reportCardsLink = Routes.teamPlayerReportCards(clubId!, ageGroupId, teamId, playerId!);
    developmentPlansLink = Routes.teamPlayerDevelopmentPlans(clubId!, ageGroupId, teamId, playerId!);
    albumLink = Routes.teamPlayerAlbum(clubId!, ageGroupId, teamId, playerId!);
  } else if (ageGroupId) {
    settingsLink = Routes.playerSettings(clubId!, ageGroupId, playerId!);
    abilitiesLink = Routes.playerAbilities(clubId!, ageGroupId, playerId!);
    reportCardsLink = Routes.playerReportCards(clubId!, ageGroupId, playerId!);
    developmentPlansLink = Routes.playerDevelopmentPlans(clubId!, ageGroupId, playerId!);
    albumLink = Routes.playerAlbum(clubId!, ageGroupId, playerId!);
  } else {
    settingsLink = Routes.clubPlayerSettings(clubId!, playerId!);
    abilitiesLink = `#`;
    reportCardsLink = `#`;
    developmentPlansLink = `#`;
    albumLink = Routes.playerAlbum(clubId!, ageGroupId!, playerId!);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="mx-auto px-4 py-4">
        {/* Page Title with Back Button */}
        <PageTitle
          title={`${player.firstName} ${player.lastName}`}
          subtitle={subtitle}
          backLink={backLink}
          image={{
            src: player.photo,
            alt: `${player.firstName} ${player.lastName}`,
            initials: `${player.firstName[0]}${player.lastName[0]}`,
            colorClass: 'from-primary-500 to-primary-600'
          }}
          action={{
            label: 'Settings',
            href: settingsLink,
            icon: 'settings',
            title: 'Player Settings'
          }}
        />

        {/* Player Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="card">
            <div className="text-sm text-gray-600 mb-1">Appearances</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">12</div>
            <div className="text-sm text-gray-500 mt-1">This season</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-600 mb-1">Goals</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">5</div>
            <div className="text-sm text-gray-500 mt-1">This season</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-600 mb-1">Assists</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">3</div>
            <div className="text-sm text-gray-500 mt-1">This season</div>
          </div>
        </div>

        {/* Quick Actions / Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <Link 
            to={abilitiesLink}
            className="card hover:shadow-lg transition-all hover:border-blue-500 dark:hover:border-blue-400 text-center"
          >
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Abilities</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Skills & ratings</p>
          </Link>

          <Link 
            to={reportCardsLink}
            className="card hover:shadow-lg transition-all hover:border-green-500 dark:hover:border-green-400 text-center"
          >
            <FileText className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Report Cards</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Performance reviews</p>
          </Link>

          <Link 
            to={developmentPlansLink}
            className="card hover:shadow-lg transition-all hover:border-purple-500 dark:hover:border-purple-400 text-center"
          >
            <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Development</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Growth plans</p>
          </Link>

          <Link 
            to={albumLink}
            className="card hover:shadow-lg transition-all hover:border-amber-500 dark:hover:border-amber-400 text-center"
          >
            <Camera className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Album</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Photos & media</p>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Player Details */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Player Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date of Birth</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {player.dateOfBirth.toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Age</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {new Date().getFullYear() - player.dateOfBirth.getFullYear()} years old
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Preferred Positions</span>
                <div className="flex gap-2">
                  {player.preferredPositions.map(pos => (
                    <span key={pos} className="badge-primary">{pos}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Age Groups</span>
                <span className="font-medium text-gray-900 dark:text-white">{player.ageGroupIds.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Teams</span>
                <span className="font-medium text-gray-900 dark:text-white">{player.teamIds.length}</span>
              </div>
            </div>
          </div>

          {/* Recent Performance */}
          <RecentPerformanceCard 
            performances={recentPerformances}
            clubId={clubId!}
          />
        </div>

        {/* Upcoming Matches */}
        {/* Upcoming Matches */}
        <div className="mt-4">
          <MatchesCard 
            type="upcoming"
            matches={upcomingMatches}
            limit={3}
            showTeamInfo={player.ageGroupIds.length > 1}
            getTeamInfo={(match) => {
              const team = getTeamById(match.teamId);
              if (team) {
                const ageGroup = getAgeGroupById(team.ageGroupId);
                return {
                  teamName: team.name,
                  ageGroupName: ageGroup?.name || 'Unknown'
                };
              }
              return null;
            }}
            getMatchLink={(matchId, match) => {
              const team = getTeamById(match.teamId);
              if (team) {
                return Routes.matchReport(clubId!, team.ageGroupId, match.teamId, matchId);
              }
              return '#';
            }}
          />
        </div>
      </main>
    </div>
  );
}
