import React from 'react';
import { 
  User, 
  PieChart, 
  Calendar, 
  MessageCircle, 
  BookOpen, 
  Heart,
  Activity,
  Moon,
  Battery,
  Edit,
  LogOut,
  ArrowRight
} from 'lucide-react';

// Mock user data
const userData = {
  name: "Sarah Johnson",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
  doshaType: "Pitta-Kapha",
  doshaBreakdown: {
    vata: 20,
    pitta: 45,
    kapha: 35
  }
};

const healthLogs = [
  { date: '2025-03-15', mood: 'Happy', digestion: 'Good', sleep: 'Restful', energy: 'High' },
  { date: '2025-03-14', mood: 'Calm', digestion: 'Moderate', sleep: 'Disturbed', energy: 'Moderate' },
  { date: '2025-03-13', mood: 'Stressed', digestion: 'Poor', sleep: 'Restful', energy: 'Low' },
];

const recommendedArticles = [
  {
    title: "Balance Your Pitta with These Cooling Foods",
    category: "Diet & Nutrition",
    readTime: "5 min"
  },
  {
    title: "Evening Routine for Better Sleep",
    category: "Lifestyle",
    readTime: "4 min"
  },
  {
    title: "Managing Stress with Ayurvedic Herbs",
    category: "Remedies",
    readTime: "6 min"
  }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4E7D1] to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Profile Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <img
                  src={userData.image}
                  alt={userData.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-serif font-bold text-[#4F7942]">{userData.name}</h2>
                <p className="text-[#5A7184]">{userData.doshaType} Type</p>
              </div>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-2 bg-[#4F7942] text-white px-4 py-2 rounded-lg hover:bg-[#3E5F34] transition-colors">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-[#4F7942] text-[#4F7942] px-4 py-2 rounded-lg hover:bg-[#F4E7D1] transition-colors">
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-8">
            {/* Dosha Analysis Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#4F7942] mb-6">Your Dosha Analysis</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64">
                  {/* Placeholder for PieChart - In a real app, use Recharts or similar */}
                  <div className="bg-[#F4E7D1]/30 h-full rounded-xl flex items-center justify-center">
                    <PieChart className="h-12 w-12 text-[#4F7942]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#5A7184] mb-4">Your Dosha Breakdown</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Vata</span>
                        <span>{userData.doshaBreakdown.vata}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-[#4F7942] rounded-full"
                          style={{ width: `${userData.doshaBreakdown.vata}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Pitta</span>
                        <span>{userData.doshaBreakdown.pitta}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-[#D4A373] rounded-full"
                          style={{ width: `${userData.doshaBreakdown.pitta}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Kapha</span>
                        <span>{userData.doshaBreakdown.kapha}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-[#5A7184] rounded-full"
                          style={{ width: `${userData.doshaBreakdown.kapha}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Health Tracker */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold text-[#4F7942]">Daily Health Tracker</h3>
                <button className="text-[#4F7942] hover:text-[#3E5F34]">
                  <Calendar className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#F4E7D1]/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-5 w-5 text-[#4F7942]" />
                    <span className="font-medium">Mood</span>
                  </div>
                  <select className="w-full bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#4F7942]">
                    <option>Happy</option>
                    <option>Calm</option>
                    <option>Stressed</option>
                  </select>
                </div>
                <div className="p-4 bg-[#F4E7D1]/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-5 w-5 text-[#4F7942]" />
                    <span className="font-medium">Digestion</span>
                  </div>
                  <select className="w-full bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#4F7942]">
                    <option>Good</option>
                    <option>Moderate</option>
                    <option>Poor</option>
                  </select>
                </div>
                <div className="p-4 bg-[#F4E7D1]/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Moon className="h-5 w-5 text-[#4F7942]" />
                    <span className="font-medium">Sleep</span>
                  </div>
                  <select className="w-full bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#4F7942]">
                    <option>Restful</option>
                    <option>Disturbed</option>
                    <option>Poor</option>
                  </select>
                </div>
                <div className="p-4 bg-[#F4E7D1]/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Battery className="h-5 w-5 text-[#4F7942]" />
                    <span className="font-medium">Energy</span>
                  </div>
                  <select className="w-full bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#4F7942]">
                    <option>High</option>
                    <option>Moderate</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* AyurBot Chat */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-[#4F7942]" />
                  <h3 className="text-xl font-serif font-bold text-[#4F7942]">AyurBot Chat</h3>
                </div>
                <p className="text-[#5A7184] mb-4">Get instant Ayurvedic guidance for your health concerns.</p>
                <button className="flex items-center text-[#4F7942] hover:text-[#3E5F34]">
                  Start Chat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Recommended Articles */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-[#4F7942]" />
                  <h3 className="text-xl font-serif font-bold text-[#4F7942]">Recommended Articles</h3>
                </div>
                <div className="space-y-4">
                  {recommendedArticles.map((article, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-[#5A7184]">{article.title}</h4>
                        <p className="text-sm text-[#5A7184]/70">{article.category} • {article.readTime}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#4F7942]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}