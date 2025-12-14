import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { samplePlayers } from '@/data/players';
import { getTrainingPlansByPlayerId } from '@/data/trainingPlans';
import { getDrillById } from '@/data/training';
import PageNavigation from '@components/navigation/PageNavigation';
import { getPlayerNavigationTabs } from '@utils/navigationHelpers';
import PlayerDetailsHeader from '@components/player/PlayerDetailsHeader';

export default function PlayerTrainingPlanPage() {
  const { clubId, ageGroupId, teamId, playerId } = useParams();
  
  const player = samplePlayers.find(p => p.id === playerId);
  const plans = playerId ? getTrainingPlansByPlayerId(playerId) : [];
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  
  const plan = plans[selectedPlanIndex];
  
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
  
  if (plans.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation Tabs */}
        <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">No Training Plan Available</h2>
            <p className="text-gray-600 dark:text-gray-400">
              No training plans have been created for {player.firstName} {player.lastName} yet.
            </p>
          </div>
        </main>
      </div>
    );
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200';
    }
  };
  
  const overallProgress = plan ? Math.round(
    plan.objectives.reduce((sum, obj) => sum + obj.progress, 0) / plan.objectives.length
  ) : 0;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Player Header with Plan Selector */}
        <div className="card mb-6">
          <PlayerDetailsHeader player={player} customColorClass="from-purple-500 to-purple-600" />
          
          {/* Plan Selector */}
          {plans.length > 1 && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <label htmlFor="plan-selector" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Training Plan Period
                  </label>
                  <select
                    id="plan-selector"
                    value={selectedPlanIndex}
                    onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                    className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
                  >
                    {plans.map((p, index) => (
                      <option key={p.id} value={index}>
                        {index === 0 ? '🎯 Active Plan' : `📋 Plan ${plans.length - index}`} - {p.period.start.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })} to {p.period.end.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })} ({p.status})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Plans</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{plans.length}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Current Plan Header */}
        <div className="card mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedPlanIndex === 0 ? 'Active Training Plan' : `Training Plan #${plans.length - selectedPlanIndex}`}
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Period: {plan.period.start.toLocaleDateString('en-GB', { 
                    day: 'numeric',
                    month: 'short', 
                    year: 'numeric' 
                  })} - {plan.period.end.toLocaleDateString('en-GB', { 
                    day: 'numeric',
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </p>
                <p>
                  Created: {plan.createdAt.toLocaleDateString('en-GB', { 
                    day: 'numeric',
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Progress</div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                {overallProgress}%
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(plan.status)}`}>
                {plan.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        
        {/* Objectives */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Development Objectives
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Track iterative objectives over the training period. Mark objectives as completed when achieved.
          </p>
          <div className="space-y-4">
            {plan.objectives.map((objective) => (
              <div 
                key={objective.id}
                className={`border rounded-lg p-4 ${
                  objective.completed 
                    ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="checkbox" 
                      checked={objective.completed}
                      readOnly
                      className="w-5 h-5 rounded cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className={`font-semibold text-lg mb-1 ${
                          objective.completed 
                            ? 'text-green-900 dark:text-green-100 line-through' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {objective.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {objective.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs">
                          <span className="text-gray-500 dark:text-gray-500">
                            <span className="font-medium">Started:</span> {objective.startDate.toLocaleDateString('en-GB', { 
                              day: 'numeric',
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </span>
                          <span className="text-gray-500 dark:text-gray-500">
                            <span className="font-medium">Target:</span> {objective.targetDate.toLocaleDateString('en-GB', { 
                              day: 'numeric',
                              month: 'short', 
                              year: 'numeric' 
                            })}
                          </span>
                          {objective.completed && objective.completedDate && (
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              ✓ Completed: {objective.completedDate.toLocaleDateString('en-GB', { 
                                day: 'numeric',
                                month: 'short', 
                                year: 'numeric' 
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                      {!objective.completed && (
                        <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(objective.status)}`}>
                          {objective.status.replace('-', ' ')}
                        </span>
                      )}
                    </div>
                    
                    {/* Progress Bar - only show if not completed */}
                    {!objective.completed && (
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{objective.progress}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${
                              objective.progress >= 75 ? 'bg-green-500' : 
                              objective.progress >= 50 ? 'bg-blue-500' : 
                              objective.progress >= 25 ? 'bg-amber-500' : 
                              'bg-red-500'
                            }`}
                            style={{ width: `${objective.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scheduled Training Sessions */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">📅</span>
            Scheduled Sessions
          </h2>
          <div className="space-y-4">
            {plan.sessions
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((session) => {
                const isUpcoming = session.date > new Date();
                const drills = session.drillIds.map(id => getDrillById(id)).filter(Boolean);
                
                return (
                  <div 
                    key={session.id}
                    className={`border rounded-lg p-4 ${
                      session.completed 
                        ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20' 
                        : isUpcoming 
                          ? 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                          {session.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {session.date.toLocaleDateString('en-GB', { 
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long', 
                            year: 'numeric' 
                          })} at {session.date.toLocaleTimeString('en-GB', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        session.completed 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                          : isUpcoming 
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                      }`}>
                        {session.completed ? 'Completed' : isUpcoming ? 'Upcoming' : 'Scheduled'}
                      </span>
                    </div>
                    
                    {/* Focus Areas */}
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Focus Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {session.focusAreas.map((area, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Drills */}
                    {drills.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Drills:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {drills.map((drill) => (
                            <li key={drill!.id} className="text-sm text-gray-600 dark:text-gray-400">
                              {drill!.name} ({drill!.duration} min)
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Notes */}
                    {session.notes && (
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <span className="font-medium">Notes: </span>
                          {session.notes}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        
        {/* Progress Notes */}
        {plan.progressNotes.length > 0 && (
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-2xl">📝</span>
              Progress Notes
            </h2>
            <div className="space-y-3">
              {plan.progressNotes
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((note, index) => (
                  <div 
                    key={index}
                    className="border-l-4 border-blue-600 dark:border-blue-400 bg-gray-50 dark:bg-gray-800 rounded-r-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {note.date.toLocaleDateString('en-GB', { 
                          day: 'numeric',
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Added by coach
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {note.note}
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
