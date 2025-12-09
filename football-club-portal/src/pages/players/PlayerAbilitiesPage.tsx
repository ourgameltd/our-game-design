import { useParams } from 'react-router-dom';
import { getPlayerById } from '@data/players';
import PageNavigation from '@components/navigation/PageNavigation';
import { getPlayerNavigationTabs } from '@utils/navigationHelpers';
import { groupAttributes } from '@utils/attributeHelpers';

export default function PlayerAbilitiesPage() {
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

  // Group attributes by category
  const groupedAttributes = groupAttributes(player.attributes);
  
  // Get all attributes as a flat array for display
  const allAbilities = [
    ...groupedAttributes.skills,
    ...groupedAttributes.physical,
    ...groupedAttributes.mental
  ];

  // Get top 5 abilities to show
  const topAbilities = [...allAbilities]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  // Get best and worst skills for the summary cards
  const bestSkill = topAbilities[0];
  const lowestAbilities = [...allAbilities]
    .sort((a, b) => a.rating - b.rating)
    .slice(0, 1);
  const focusArea = lowestAbilities[0];

  // Mock abilities tracking data
  const abilitiesData = [
    { month: 'Aug', overall: 6.2 },
    { month: 'Sep', overall: 6.5 },
    { month: 'Oct', overall: 6.8 },
    { month: 'Nov', overall: 7.2 },
    { month: 'Dec', overall: 7.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

      <main className="container mx-auto px-4 py-8">
        {/* Progress Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Improvement</div>
            <div className="text-4xl font-bold text-green-600">+1.3</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last 5 months</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Best Skill</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{bestSkill.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Rating: {bestSkill.rating}/99</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Focus Area</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{focusArea.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Rating: {focusArea.rating}/99</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Abilities Chart Placeholder */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Overall Rating Over Time</h3>
            <div className="h-64 flex items-end justify-around gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {abilitiesData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-primary-600 rounded-t-lg transition-all hover:bg-primary-700" 
                      style={{ height: `${(data.overall / 10) * 100}%` }}
                  />
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-2">{data.month}</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{data.overall}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              📈 Steady improvement shown over the season
            </div>
          </div>

          
          {/* Top Abilities */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Top 5 Abilities</h3>
            <div className="space-y-3">
              {topAbilities.map((ability) => (
                <div key={ability.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{ability.name}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{ability.rating}/99</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${(ability.rating / 99) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="btn-secondary btn-sm w-full">
                View All Abilities
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
