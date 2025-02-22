import React from 'react';
import { Search, Mic, ArrowRight } from 'lucide-react';

const popularSearches = [
  "Best herbs for immunity",
  "Natural stress relief",
  "Ayurvedic morning routine",
  "Digestive health remedies"
];

const categories = [
  { name: "Herbs", icon: "🌿" },
  { name: "Remedies", icon: "💆" },
  { name: "Ancient Texts", icon: "📜" },
  { name: "Research", icon: "🔍" }
];

export function AyurvedicSearch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4E7D1] to-white">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-[#4F7942] mb-6">
              Unlock Ancient Wisdom<br />with Modern AI
            </h1>
            <p className="text-xl text-[#5A7184] mb-12 max-w-2xl mx-auto">
              Find authentic Ayurvedic insights on herbs, remedies, and wellness practices in seconds.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5A7184]" />
                <input
                  type="text"
                  placeholder="Search for herbs, ailments, treatments, or Ayurvedic principles..."
                  className="w-full pl-12 pr-16 py-4 rounded-full border border-[#4F7942]/20 focus:ring-2 focus:ring-[#4F7942] focus:border-transparent text-lg"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Mic className="h-6 w-6 text-[#4F7942] hover:text-[#3E5F34]" />
                </button>
              </div>

              {/* Popular Searches */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    className="px-4 py-2 bg-white rounded-full text-[#5A7184] hover:text-[#4F7942] hover:bg-[#F4E7D1] transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-[#F4E7D1]/30 p-8 rounded-2xl text-center hover:bg-[#F4E7D1]/50 transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-serif font-bold text-[#4F7942] mb-2">
                  {category.name}
                </h3>
                <button className="flex items-center justify-center text-[#5A7184] hover:text-[#4F7942] mt-2">
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-[#4F7942] mb-12 text-center">
            AI-Powered Ayurvedic Knowledge
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#4F7942] mb-4">
                Smart Suggestions
              </h3>
              <p className="text-[#5A7184]">
                Get intelligent recommendations based on your search patterns and interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#4F7942] mb-4">
                Ancient Text Analysis
              </h3>
              <p className="text-[#5A7184]">
                Access insights from ancient Ayurvedic texts with modern interpretations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#4F7942] mb-4">
                Personalized Results
              </h3>
              <p className="text-[#5A7184]">
                Receive tailored search results based on your Dosha type and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}