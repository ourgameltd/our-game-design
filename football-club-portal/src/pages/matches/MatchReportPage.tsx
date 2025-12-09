import { useParams, Link } from 'react-router-dom';
import { sampleMatches } from '@/data/matches';
import { samplePlayers } from '@/data/players';
import { sampleTeams } from '@/data/teams';
import { sampleClubs } from '@/data/clubs';
import { Routes } from '@utils/routes';
import { getTeamNavigationTabs } from '@/utils/navigationHelpers';
import PageNavigation from '@/components/navigation/PageNavigation';

export default function MatchReportPage() {
  const { matchId, clubId, ageGroupId, teamId } = useParams();
  
  const match = sampleMatches.find(m => m.id === matchId);
  const team = sampleTeams.find(t => t.id === teamId);
  const club = sampleClubs.find(c => c.id === clubId);
  
  if (!match || !team || !club) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Match not found</h2>
          </div>
        </main>
      </div>
    );
  }
  
  const getPlayerName = (playerId: string) => {
    const player = samplePlayers.find(p => p.id === playerId);
    return player ? `${player.firstName} ${player.lastName}` : 'Unknown';
  };
  
  const isUpcoming = match.date > new Date();
  const homeTeam = match.isHome ? team.name : match.opposition;
  const awayTeam = match.isHome ? match.opposition : team.name;
  const homeScore = match.isHome ? match.score?.home : match.score?.away;
  const awayScore = match.isHome ? match.score?.away : match.score?.home;
  
  const playerOfTheMatchId = match.report?.playerOfTheMatch;
  const playerOfTheMatch = playerOfTheMatchId 
    ? samplePlayers.find(p => p.id === playerOfTheMatchId) 
    : null;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getTeamNavigationTabs(clubId!, ageGroupId!, teamId!)} />

      <main className="container mx-auto px-4 py-8">     
        {/* Breadcrumb */}
        <div className="mb-4">
          <Link
            to={Routes.matches(clubId!, ageGroupId!, teamId!)}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Matches
          </Link>
        </div>

        {/* Match Header */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {isUpcoming ? 'Upcoming Match' : 'Match Report'}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {match.competition}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {match.isHome ? 'Home' : 'Away'}
              </span>
            </div>
          </div>
          
          {/* Score Display */}
          <div className="grid grid-cols-3 gap-4 items-center text-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{homeTeam}</h3>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg py-4">
              {!isUpcoming && match.score ? (
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {homeScore} - {awayScore}
                </div>
              ) : (
                <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                  VS
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{awayTeam}</h3>
            </div>
          </div>
          
          {/* Match Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Date & Time</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {match.date.toLocaleDateString('en-GB', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-gray-900 dark:text-white">
                {match.date.toLocaleTimeString('en-GB', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
              <p className="font-medium text-gray-900 dark:text-white">{match.location}</p>
            </div>
            {match.weather && (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Weather</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {match.weather.condition}, {match.weather.temperature}°C
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Match Report Content (only for past matches) */}
        {!isUpcoming && match.report && (
          <>
            {/* Summary */}
            <div className="card mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Match Summary</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {match.report.summary}
              </p>
            </div>
            
            {/* Player of the Match */}
            {playerOfTheMatch && (
              <div className="card mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⭐</span>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Player of the Match</h2>
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {playerOfTheMatch.firstName} {playerOfTheMatch.lastName}
                </p>
                {match.report?.performanceRatings?.find(r => r.playerId === playerOfTheMatchId) && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rating: {match.report?.performanceRatings?.find(r => r.playerId === playerOfTheMatchId)?.rating.toFixed(1)}/10
                  </p>
                )}
              </div>
            )}
            
            {/* Goals */}
            {match.report.goalScorers && match.report.goalScorers.length > 0 && (
              <div className="card mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Goal Scorers</h2>
                <div className="space-y-3">
                  {match.report.goalScorers.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-2xl">⚽</span>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {getPlayerName(goal.playerId)}
                        </p>
                        {goal.assist && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Assist: {getPlayerName(goal.assist)}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {goal.minute}'
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Cards */}
            {match.report.cards && match.report.cards.length > 0 && (
              <div className="card mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Disciplinary</h2>
                <div className="space-y-3">
                  {match.report.cards.map((card, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className={`text-2xl ${card.type === 'yellow' ? 'text-yellow-500' : 'text-red-500'}`}>
                        {card.type === 'yellow' ? '🟨' : '🟥'}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {getPlayerName(card.playerId)}
                        </p>
                        {card.reason && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {card.reason}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {card.minute}'
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Injuries */}
            {match.report.injuries && match.report.injuries.length > 0 && (
              <div className="card mb-6 border-2 border-red-200 dark:border-red-800">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Injuries</h2>
                <div className="space-y-3">
                  {match.report.injuries.map((injury, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-2xl">🏥</span>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {getPlayerName(injury.playerId)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {injury.description}
                        </p>
                        <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded ${
                          injury.severity === 'serious' ? 'bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-200' :
                          injury.severity === 'moderate' ? 'bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-200' :
                          'bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-200'
                        }`}>
                          {injury.severity}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {injury.minute}'
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lineup & Substitutions */}
            {match.lineup && (
              <div className="card mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Team Sheet</h2>
                
                {/* Starting XI */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Starting XI</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {match.lineup.starting.map((player, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                        <span className="px-2 py-1 bg-green-600 text-white rounded text-xs font-semibold min-w-[3rem] text-center">
                          {player.position}
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {getPlayerName(player.playerId)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Substitutes */}
                {match.lineup.substitutes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Substitutes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {match.lineup.substitutes.map((playerId, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                          <span className="text-gray-900 dark:text-white">
                            {getPlayerName(playerId)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Player Ratings */}
            {match.report.performanceRatings && match.report.performanceRatings.length > 0 && (
              <div className="card mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Player Ratings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {match.report.performanceRatings
                    .sort((a, b) => b.rating - a.rating)
                    .map((rating, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {getPlayerName(rating.playerId)}
                          </p>
                          {rating.playerId === playerOfTheMatchId && (
                            <span className="text-yellow-500" title="Player of the Match">⭐</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                rating.rating >= 8 ? 'bg-green-500' : 
                                rating.rating >= 6 ? 'bg-blue-500' : 
                                'bg-amber-500'
                              }`}
                              style={{ width: `${rating.rating * 10}%` }}
                            />
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white min-w-[3rem] text-right">
                            {rating.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Upcoming Match Info */}
        {isUpcoming && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Match Preview</h2>
            <p className="text-gray-600 dark:text-gray-400">
              This match is scheduled for {match.date.toLocaleDateString('en-GB', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} at {match.date.toLocaleTimeString('en-GB', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Match report will be available after the game.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
