import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { DoshaAnalysis } from './pages/DoshaAnalysis';
import { Blogs } from './pages/Blogs';
import { AyurvedicSearch } from './pages/AyurvedicSearch';
import { Dashboard } from './pages/Dashboard';
import { ChatBot } from './pages/ChatBot'

// Import the Home page components
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-[#F4E7D1] to-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dosha-analysis"
              element={
                <PrivateRoute>
                  <DoshaAnalysis />
                </PrivateRoute>
              }
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/ayurvedic-search" element={<AyurvedicSearch />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;