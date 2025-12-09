import React from 'react';
import { Link } from 'react-router-dom';
import { Match } from '@/types';

interface UpcomingMatchesCardProps {
  matches: Match[];
  addMatchLink?: string;
  viewAllLink?: string;
  getMatchLink?: (matchId: string) => string;
}

const UpcomingMatchesCard: React.FC<UpcomingMatchesCardProps> = ({ 
  matches, 
  addMatchLink,
  viewAllLink,
  getMatchLink
}) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Matches</h3>
        {(addMatchLink || viewAllLink) && (
          <Link
            to={addMatchLink || viewAllLink || '#'}
            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            {addMatchLink ? '+ Add Match' : 'View All →'}
          </Link>
        )}
      </div>
      <div className="space-y-3">
        {matches.length > 0 ? (
          matches.map((match) => {
            const matchLink = getMatchLink ? getMatchLink(match.id) : '#';
            
            return (
              <Link
                key={match.id}
                to={matchLink}
                className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(match.date).toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="badge bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {new Date(match.date).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {match.isHome ? 'vs' : '@'} {match.opposition}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {match.competition}
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No upcoming matches scheduled</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingMatchesCard;
