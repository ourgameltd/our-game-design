import { useParams } from 'react-router-dom';
import { getPlayerById } from '@data/players';
import PageNavigation from '@components/navigation/PageNavigation';
import { getPlayerNavigationTabs } from '@utils/navigationHelpers';

export default function PlayerProfilePage() {
  const { clubId, ageGroupId, teamId, playerId } = useParams();
  const player = getPlayerById(playerId!);

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

  const age = new Date().getFullYear() - player.dateOfBirth.getFullYear();
  // Use the overall rating from the player object (already calculated)
  const overallRating = player.overallRating;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

      <main className="container mx-auto px-4 py-8">
        {/* Player Header */}
        <div className="card mb-6">
          <div className="flex items-start gap-6">
            {player.photo ? (
              <img 
                src={player.photo} 
                alt={`${player.firstName} ${player.lastName}`}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {player.firstName[0]}{player.lastName[0]}
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {player.firstName} {player.lastName}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Age: {age} years old</span>
                <span>•</span>
                <span>Positions: {player.preferredPositions.join(', ')}</span>
                <span>•</span>
                <span>Overall Rating: {overallRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Player Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Rating</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">{overallRating}</div>
            <div className="text-sm text-gray-500 mt-1">out of 99</div>
          </div>
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

        <div className="grid md:grid-cols-2 gap-6">
          {/* Player Details */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Player Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Date of Birth</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {player.dateOfBirth.toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Age</span>
                <span className="font-medium text-gray-900 dark:text-white">{age} years old</span>
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
                <span className="text-gray-600 dark:text-gray-400">Teams</span>
                <span className="font-medium text-gray-900 dark:text-white">{player.teamIds.length}</span>
              </div>
            </div>
          </div>

          {/* Recent Performance */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Recent Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">vs Riverside United</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dec 1, 2024</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">9.0</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">@ Hillside Athletic</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Nov 24, 2024</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">7.5</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
