import { useParams } from 'react-router-dom';
import { samplePlayers } from '@/data/players';
import { getLatestReportForPlayer } from '@/data/reports';
import PageNavigation from '@components/navigation/PageNavigation';
import { getPlayerNavigationTabs } from '@utils/navigationHelpers';

export default function PlayerReportCardPage() {
  const { clubId, ageGroupId, teamId, playerId } = useParams();
  
  const player = samplePlayers.find(p => p.id === playerId);
  const report = playerId ? getLatestReportForPlayer(playerId) : undefined;
  
  if (!player) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation Tabs */}
        <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Player not found</h2>
          </div>
        </main>
      </div>
    );
  }
  
  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">No Report Available</h2>
            <p className="text-gray-600 dark:text-gray-400">
              No report card has been created for {player.firstName} {player.lastName} yet.
            </p>
          </div>
        </main>
      </div>
    );
  }
  
  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Player Header */}
        <div className="card mb-6">
          <div className="flex items-start gap-6 mb-6">
            {player.photo ? (
              <img 
                src={player.photo} 
                alt={`${player.firstName} ${player.lastName}`}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {player.firstName[0]}{player.lastName[0]}
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {player.firstName} {player.lastName}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Age: {calculateAge(player.dateOfBirth)}</span>
                <span>•</span>
                <span>Positions: {player.preferredPositions.join(', ')}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Rating</div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {report.overallRating}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">/ 10</div>
            </div>
          </div>
          
          {/* Report Period */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Assessment Period: {report.period.start.toLocaleDateString('en-GB', { 
                month: 'long', 
                year: 'numeric' 
              })} - {report.period.end.toLocaleDateString('en-GB', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Created: {report.createdAt.toLocaleDateString('en-GB', { 
                day: 'numeric',
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
        
        {/* Strengths */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">💪</span>
            Strengths
          </h2>
          <ul className="space-y-3">
            {report.strengths.map((strength, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Areas for Improvement */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Areas for Improvement
          </h2>
          <ul className="space-y-3">
            {report.areasForImprovement.map((area, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg"
              >
                <span className="text-amber-600 dark:text-amber-400 mt-1">→</span>
                <span className="text-gray-700 dark:text-gray-300">{area}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Development Plan */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Development Plan
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Target Date: {report.developmentPlan.targetDate.toLocaleDateString('en-GB', { 
              day: 'numeric',
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Goals</h3>
            <ul className="space-y-2">
              {report.developmentPlan.goals.map((goal, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{index + 1}.</span>
                  <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Action Plan</h3>
            <ul className="space-y-2">
              {report.developmentPlan.actions.map((action, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                >
                  <span className="text-purple-600 dark:text-purple-400 font-bold">{index + 1}.</span>
                  <span className="text-gray-700 dark:text-gray-300">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Coach Comments */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">💬</span>
            Coach's Comments
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-600 dark:border-blue-400">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {report.coachComments}
            </p>
          </div>
        </div>
        
        {/* Similar Professional Players */}
        {report.similarProfessionalPlayers && report.similarProfessionalPlayers.length > 0 && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Professional Player Comparisons
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Study these professional players to understand how to develop your game:
            </p>
            <div className="space-y-4">
              {report.similarProfessionalPlayers.map((proPlayer, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {proPlayer.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {proPlayer.team} • {proPlayer.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    <span className="font-medium text-gray-900 dark:text-white">Why study this player: </span>
                    {proPlayer.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
