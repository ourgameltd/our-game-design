import { Link } from 'react-router-dom';
import { sampleClubs } from '@data/clubs';
import PageTitle from '@components/common/PageTitle';
import { Routes } from '@utils/routes';

export default function ClubsListPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <PageTitle
          title="Clubs You Have Access To"
          subtitle="Select a club to view details and manage teams"
        />

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleClubs.map((club) => (
            <Link
              key={club.id}
              to={Routes.club(club.id)}
              className="card-hover group"
            >
              <div className="flex items-center gap-4 mb-4">
                {club.logo ? (
                  <img 
                    src={club.logo} 
                    alt={`${club.name} logo`}
                    className="w-20 h-20 rounded-lg object-cover border-2 border-gray-200 dark:border-gray-700"
                  />
                ) : (
                  <div 
                    className="w-20 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white"
                    style={{ backgroundColor: club.colors.primary }}
                  >
                    {club.shortName}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {club.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{club.location.city}, {club.location.country}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Founded</span>
                  <span className="font-medium text-gray-900 dark:text-white">{club.founded}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
