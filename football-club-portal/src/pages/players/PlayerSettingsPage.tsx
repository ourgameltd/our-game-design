import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlayerById } from '@/data/players';
import PageNavigation from '@/components/navigation/PageNavigation';
import { getPlayerNavigationTabs } from '@/utils/navigationHelpers';
import { Routes } from '@/utils/routes';
import { PlayerPosition } from '@/types';

export default function PlayerSettingsPage() {
  const { clubId, ageGroupId, teamId, playerId } = useParams();
  const navigate = useNavigate();
  const player = getPlayerById(playerId!);

  const [formData, setFormData] = useState({
    firstName: player?.firstName || '',
    lastName: player?.lastName || '',
    dateOfBirth: player?.dateOfBirth.toISOString().split('T')[0] || '',
    photo: player?.photo || '',
    preferredPositions: player?.preferredPositions || [],
    // Medical Information
    allergies: player?.medicalInfo?.allergies?.join(', ') || '',
    conditions: player?.medicalInfo?.conditions?.join(', ') || '',
    emergencyContactName: player?.medicalInfo?.emergencyContact?.name || '',
    emergencyContactPhone: player?.medicalInfo?.emergencyContact?.phone || '',
    emergencyContactRelationship: player?.medicalInfo?.emergencyContact?.relationship || '',
  });

  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);

  if (!player) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />
        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Player not found</h2>
          </div>
        </main>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePositionToggle = (position: PlayerPosition) => {
    setFormData(prev => ({
      ...prev,
      preferredPositions: prev.preferredPositions.includes(position)
        ? prev.preferredPositions.filter(p => p !== position)
        : [...prev.preferredPositions, position]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to the backend
    console.log('Saving player settings:', formData);
    alert('Player settings updated successfully! (Demo - not saved to backend)');
    navigate(Routes.player(clubId!, ageGroupId!, teamId!, playerId!));
  };

  const handleCancel = () => {
    navigate(Routes.player(clubId!, ageGroupId!, teamId!, playerId!));
  };

  const handleArchive = () => {
    const isCurrentlyArchived = player.isArchived;
    const action = isCurrentlyArchived ? 'unarchived' : 'archived';
    // In a real app, this would call the backend API
    alert(`Player ${action} successfully! (Demo - not saved to backend)`);
    navigate(Routes.player(clubId!, ageGroupId!, teamId!, playerId!));
  };

  // Calculate age
  const calculateAge = (dateOfBirth: Date) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageNavigation tabs={getPlayerNavigationTabs(clubId!, ageGroupId!, teamId!, playerId!)} />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Player Settings
            </h2>
            {player.isArchived && (
              <span className="badge bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300">
                🗄️ Archived
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Manage {player.firstName} {player.lastName}'s profile and information
          </p>
          {player.isArchived && (
            <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <p className="text-sm text-orange-800 dark:text-orange-300">
                ⚠️ This player is archived. You cannot modify their settings while they are archived. Unarchive them to make changes.
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Personal Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={player.isArchived}
                  placeholder="Enter first name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={player.isArchived}
                  placeholder="Enter last name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  disabled={player.isArchived}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {formData.dateOfBirth && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Age: {calculateAge(new Date(formData.dateOfBirth))} years
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  value={formData.photo}
                  onChange={handleInputChange}
                  disabled={player.isArchived}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Enter a URL to the player's photo
                </p>
              </div>
            </div>
          </div>

          {/* Position Preferences */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Position Preferences
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Select the positions this player can play (select at least one)
            </p>
            
            <div className="space-y-4">
              {/* Goalkeepers */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Goalkeeper</h4>
                <div className="flex flex-wrap gap-2">
                  {['GK'].map(position => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => handlePositionToggle(position as PlayerPosition)}
                      disabled={player.isArchived}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        formData.preferredPositions.includes(position as PlayerPosition)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>

              {/* Defenders */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Defenders</h4>
                <div className="flex flex-wrap gap-2">
                  {['LB', 'CB', 'RB', 'LWB', 'RWB'].map(position => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => handlePositionToggle(position as PlayerPosition)}
                      disabled={player.isArchived}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        formData.preferredPositions.includes(position as PlayerPosition)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>

              {/* Midfielders */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Midfielders</h4>
                <div className="flex flex-wrap gap-2">
                  {['CDM', 'CM', 'CAM', 'LM', 'RM'].map(position => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => handlePositionToggle(position as PlayerPosition)}
                      disabled={player.isArchived}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        formData.preferredPositions.includes(position as PlayerPosition)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>

              {/* Forwards */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Forwards</h4>
                <div className="flex flex-wrap gap-2">
                  {['LW', 'RW', 'CF', 'ST'].map(position => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => handlePositionToggle(position as PlayerPosition)}
                      disabled={player.isArchived}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        formData.preferredPositions.includes(position as PlayerPosition)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Medical Information
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This information is kept confidential and only accessible to authorized staff
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Allergies
                </label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  disabled={player.isArchived}
                  placeholder="e.g., Peanuts, Penicillin (comma-separated)"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Medical Conditions
                </label>
                <input
                  type="text"
                  name="conditions"
                  value={formData.conditions}
                  onChange={handleInputChange}
                  disabled={player.isArchived}
                  placeholder="e.g., Asthma, Diabetes (comma-separated)"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Emergency Contact
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleInputChange}
                      disabled={player.isArchived}
                      placeholder="Enter name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleInputChange}
                      disabled={player.isArchived}
                      placeholder="+44 7XXX XXXXXX"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Relationship
                    </label>
                    <input
                      type="text"
                      name="emergencyContactRelationship"
                      value={formData.emergencyContactRelationship}
                      onChange={handleInputChange}
                      disabled={player.isArchived}
                      placeholder="e.g., Parent, Guardian"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="card">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={player.isArchived}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Archive Zone */}
        <div className="card border-2 border-orange-200 dark:border-orange-900 mt-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div>
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-4">
                    {player.isArchived ? 'Unarchive Player' : 'Archive Player'}
                </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {player.isArchived 
                  ? 'Make this player active and allow modifications to their profile'
                  : 'Lock this player profile and prevent modifications while keeping all data'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowArchiveConfirm(true)}
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                player.isArchived
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              {player.isArchived ? 'Unarchive Player' : 'Archive Player'}
            </button>
          </div>
        </div>

        {/* Archive Confirmation Modal */}
        {showArchiveConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {player.isArchived ? 'Unarchive Player?' : 'Archive Player?'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {player.isArchived ? (
                  <>
                    Are you sure you want to unarchive <strong>{player.firstName} {player.lastName}</strong>? 
                    This will make their profile active again and allow modifications.
                  </>
                ) : (
                  <>
                    Are you sure you want to archive <strong>{player.firstName} {player.lastName}</strong>? 
                    This will lock their profile and prevent modifications. All their data will be preserved and you can unarchive them later.
                  </>
                )}
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowArchiveConfirm(false)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowArchiveConfirm(false);
                    handleArchive();
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    player.isArchived
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  Yes, {player.isArchived ? 'Unarchive' : 'Archive'} Player
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
