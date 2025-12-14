import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAgeGroupById } from '@/data/ageGroups';
import PageNavigation from '@/components/navigation/PageNavigation';
import { getAgeGroupNavigationTabs } from '@/utils/navigationHelpers';
import { Routes } from '@/utils/routes';

export default function AgeGroupSettingsPage() {
  const { clubId, ageGroupId } = useParams();
  const navigate = useNavigate();
  const ageGroup = getAgeGroupById(ageGroupId!);

  const [formData, setFormData] = useState({
    name: ageGroup?.name || '',
    code: ageGroup?.code || '',
    level: ageGroup?.level || 'youth',
    season: ageGroup?.season || '2024/25',
    description: ageGroup?.description || ''
  });

  if (!ageGroup) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="container mx-auto px-4 py-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Age group not found</h2>
          </div>
        </main>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to the backend
    alert('Age group settings updated successfully! (Demo - not saved to backend)');
    navigate(Routes.ageGroup(clubId!, ageGroupId!));
  };

  const handleCancel = () => {
    navigate(Routes.ageGroup(clubId!, ageGroupId!));
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this age group? This action cannot be undone.')) {
      alert('Age group deleted successfully! (Demo - not saved to backend)');
      navigate(Routes.ageGroups(clubId!));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageNavigation tabs={getAgeGroupNavigationTabs(clubId!, ageGroupId!)} />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Age Group Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage age group details and configuration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age Group Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 2014s, Reserves, Senior"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Code *
                </label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 2014, reserve, senior"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Level *
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="youth">Youth</option>
                  <option value="amateur">Amateur</option>
                  <option value="reserve">Reserve</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Season *
                </label>
                <input
                  type="text"
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 2024/25"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                placeholder="Brief description of this age group..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <span className="text-2xl">ℹ️</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  About Age Groups
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Age groups organize teams by player age or skill level. Each age group can contain 
                  multiple teams (e.g., Reds, Blues, Whites). The code should be unique and URL-friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete Age Group
            </button>
            
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
