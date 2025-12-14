import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getCoachById } from '@data/coaches';
import { getClubById } from '@data/clubs';
import { getTeamsByClubId } from '@data/teams';
import { getAgeGroupById } from '@data/ageGroups';
import { Routes } from '@utils/routes';
import PageTitle from '@components/common/PageTitle';

export default function CoachSettingsPage() {
  const { clubId, coachId } = useParams();
  const navigate = useNavigate();
  const isNewCoach = coachId === 'new';
  const coach = isNewCoach ? null : getCoachById(coachId!);
  const club = getClubById(clubId!);
  const allTeams = getTeamsByClubId(clubId!);

  const [firstName, setFirstName] = useState(coach?.firstName || '');
  const [lastName, setLastName] = useState(coach?.lastName || '');
  const [email, setEmail] = useState(coach?.email || '');
  const [phone, setPhone] = useState(coach?.phone || '');
  const [dateOfBirth, setDateOfBirth] = useState(
    coach?.dateOfBirth ? new Date(coach.dateOfBirth).toISOString().split('T')[0] : ''
  );
  const [associationId, setAssociationId] = useState(coach?.associationId || '');
  const [role, setRole] = useState(coach?.role || 'assistant-coach');
  const [biography, setBiography] = useState(coach?.biography || '');
  const [specializations, setSpecializations] = useState(
    coach?.specializations?.join(', ') || ''
  );
  const [selectedTeams, setSelectedTeams] = useState<string[]>(coach?.teamIds || []);
  const [photo, setPhoto] = useState(coach?.photo || '');

  if (!club) {
    return <div>Club not found</div>;
  }

  if (!isNewCoach && !coach) {
    return <div>Coach not found</div>;
  }

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log('Saving coach:', {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      associationId,
      role,
      biography,
      specializations: specializations.split(',').map(s => s.trim()).filter(Boolean),
      teamIds: selectedTeams,
      photo,
    });
    
    // Navigate back to coach profile
    navigate(Routes.coach(clubId!, coachId!));
  };

  const handleCancel = () => {
    navigate(Routes.coach(clubId!, coachId!));
  };

  const handleTeamToggle = (teamId: string) => {
    setSelectedTeams(prev => 
      prev.includes(teamId) 
        ? prev.filter(id => id !== teamId)
        : [...prev, teamId]
    );
  };

  const roleOptions = [
    { value: 'head-coach', label: 'Head Coach' },
    { value: 'assistant-coach', label: 'Assistant Coach' },
    { value: 'goalkeeper-coach', label: 'Goalkeeper Coach' },
    { value: 'fitness-coach', label: 'Fitness Coach' },
    { value: 'technical-coach', label: 'Technical Coach' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <PageTitle
          title={isNewCoach ? 'Add New Coach' : 'Coach Settings'}
          subtitle={isNewCoach ? `Add a new coach to ${club?.name}` : `Manage details for ${coach!.firstName} ${coach!.lastName}`}
        />

        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Enter first name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Enter last name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="coach@example.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+44 123 456 7890"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Coaching Details */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Coaching Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role *
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {roleOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  FA Registration ID
                </label>
                <input
                  type="text"
                  value={associationId}
                  onChange={(e) => setAssociationId(e.target.value)}
                  placeholder="e.g., SFA-12345"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Specializations
              </label>
              <input
                type="text"
                value={specializations}
                onChange={(e) => setSpecializations(e.target.value)}
                placeholder="Youth Development, Tactical Training, etc."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Separate multiple specializations with commas
              </p>
            </div>
          </div>

          {/* Biography */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Biography
            </h3>
            <textarea
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              rows={4}
              placeholder="Brief biography about the coach..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Team Assignments */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Team Assignments
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Select which teams this coach is assigned to
            </p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {allTeams.map(team => {
                const ageGroup = getAgeGroupById(team.ageGroupId);
                return (
                  <label
                    key={team.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTeams.includes(team.id)}
                      onChange={() => handleTeamToggle(team.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {team.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {ageGroup?.name || 'Unknown'} - {team.season}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
            {allTeams.length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                No teams available. Create teams first to assign coaches.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="card">
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {isNewCoach ? 'Create Coach' : 'Save Changes'}
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
        </form>

        {/* Danger Zone - Only show for existing coaches */}
        {!isNewCoach && (
          <div className="card border-2 border-red-200 dark:border-red-900 mt-6">
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Danger Zone</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              These actions are permanent and cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-medium">
                Archive Coach
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium">
                Delete Coach
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
