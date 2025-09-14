// src/app/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your Techs - Project Management & IT Help Platform | Get Expert Development Support',
  description: 'Professional project management with Kanban boards, real-time collaboration, and expert IT support. Track software projects, collaborate with developers, and get help from experienced programmers.',
  keywords: 'project management software, kanban boards, software development help, IT support, programming assistance, developer collaboration, tech project tracking',
  openGraph: {
    title: 'YourTechs - Project Management Made Simple',
    description: 'Track software projects, collaborate with peers, and get IT help from experienced developers.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yourtechs.com',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Your Techs</h1>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Projects
              </a>
              <a href="#help" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Get Help
              </a>
              <a href="#contributors" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Contributors
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-indigo-600 transition-colors px-4 py-2">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center" aria-labelledby="hero-heading">
          <h2 id="hero-heading" className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Project Management
            <span className="text-indigo-600"> Made Simple</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Track your software projects, collaborate with peers, and help others 
            with their IT challenges. Professional project management platform for developers and IT professionals.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/auth/signup" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started Free
            </Link>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Request IT Help
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600">12</div>
              <div className="text-gray-600 mt-2">Active Software Projects</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600">47</div>
              <div className="text-gray-600 mt-2">IT Issues Resolved</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">8</div>
              <div className="text-gray-600 mt-2">Expert Contributors</div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="mt-16" aria-labelledby="features-heading">
          <h3 id="features-heading" className="text-2xl font-bold text-gray-900 text-center mb-8">
            Professional Project Management Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Kanban Project Management
              </h4>
              <p className="text-gray-600">
                Advanced Kanban boards with drag-and-drop functionality, task tracking, and real-time collaboration for software development projects.
              </p>
            </article>
            <article className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Expert IT Help & Support
              </h4>
              <p className="text-gray-600">
                Submit IT issues and programming questions to get expert help from our community of experienced developers and IT professionals.
              </p>
            </article>
            <article className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Developer Portfolio Builder
              </h4>
              <p className="text-gray-600">
                Contributors can showcase their programming skills, build professional portfolios, and demonstrate expertise through completed projects.
              </p>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Streamline Your Development Projects?
          </h3>
          <p className="text-gray-600 mb-6">
            Join developers and IT professionals who trust Your Techs for project management and technical support.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start Managing Projects Today
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Your Techs. Professional project management and custom development platform.</p>
        </div>
      </footer>
    </div>
  );
}