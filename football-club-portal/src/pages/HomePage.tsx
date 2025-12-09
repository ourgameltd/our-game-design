import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo size={128}/>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            It's <span className="text-primary-300">Our Game</span>!
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-100">
            Community Football for Everyone
          </p>
          <p className="text-lg mb-12 text-primary-100">
            An inclusive, welcoming environment where everyone can enjoy football.
            Join our community of players, coaches, and fans today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/register" className="btn-lg bg-white text-primary-700 hover:bg-primary-50">
              Join Our Club
            </Link>
            <Link to="/login" className="btn-lg bg-primary-500 text-white hover:bg-primary-400 border-2 border-white">
              Sign In
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-semibold mb-2">All Ages & Abilities</h3>
              <p className="text-primary-100">
                From kids to adults, beginners to experienced players - everyone is welcome.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Player Development</h3>
              <p className="text-primary-100">
                Track progress, receive coaching feedback, and reach your potential.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-primary-100">
                More than just a club - we're a family building connections that last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
