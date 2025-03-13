import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <header className="text-4xl font-bold text-center mb-6">Welcome to Our Landing Page</header>
        <p className="text-lg text-center max-w-2xl mb-6">
          Discover our amazing services and features. Join us today and experience
          the best we have to offer.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingPage
