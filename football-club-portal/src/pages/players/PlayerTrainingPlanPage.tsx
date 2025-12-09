import { useParams } from 'react-router-dom';
import { samplePlayers } from '@/data/players';
import { getActiveTrainingPlanForPlayer } from '@/data/trainingPlans';
import { getDrillById } from '@/data/training';
import PageNavigation from '@components/navigation/PageNavigation';
import { getPlayerNavigationTabs } from '@utils/navigationHelpers';

export default function PlayerTrainingPlanPage() {
  const { clubId, ageGroupId, teamId, playerId } = useParams();
  
  const player = samplePlayers.find(p => p.id === playerId);
  const plan = playerId ? getActiveTrainingPlanForPlayer(playerId) : undefined;
  
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
  
  if (!plan) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation Tabs */}
        <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">No Training Plan Available</h2>
            <p className="text-gray-600 dark:text-gray-400">
              No active training plan has been created for {player.firstName} {player.lastName} yet.
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
  
  const overallProgress = Math.round(
    plan.objectives.reduce((sum, obj) => sum + obj.progress, 0) / plan.objectives.length
  );
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Tabs */}
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Player & Plan Header */}
        <div className="card mb-6">
          <div className="flex items-start gap-6 mb-6">
            {player.photo ? (
              <img 
                src={player.photo} 
                alt={`${player.firstName} ${player.lastName}`}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {player.firstName[0]}{player.lastName[0]}
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                Individual Training Plan
              </h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                {player.firstName} {player.lastName}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Age: {calculateAge(player.dateOfBirth)}</span>
                <span>•</span>
                <span>Positions: {player.preferredPositions.join(', ')}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Progress</div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                {overallProgress}%
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(plan.status)}`}>
                {plan.status.toUpperCase()}
              </span>
            </div>
          </div>
          
          {/* Plan Period */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Plan Period: {plan.period.start.toLocaleDateString('en-GB', { 
                day: 'numeric',
                month: 'long', 
                year: 'numeric' 
              })} - {plan.period.end.toLocaleDateString('en-GB', { 
                day: 'numeric',
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Created: {plan.createdAt.toLocaleDateString('en-GB', { 
                day: 'numeric',
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
        
        {/* Objectives */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Development Objectives
          </h2>
          <div className="space-y-4">
            {plan.objectives.map((objective) => (
              <div 
                key={objective.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      {objective.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {objective.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Target: {objective.targetDate.toLocaleDateString('en-GB', { 
                        day: 'numeric',
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                  <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(objective.status)}`}>
                    {objective.status.replace('-', ' ')}
                  </span>
                </div>
                
                {/* Progress Bar */}
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
          <div className="card">
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
