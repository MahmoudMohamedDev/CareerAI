import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import JobAnalyzer from './pages/JobAnalyzer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/job-analyzer" element={<JobAnalyzer />} />
          {/* Placeholder routes for navbar links */}
          <Route path="/skills" element={<Dashboard />} />
          <Route path="/insights" element={<Dashboard />} />
          <Route path="/interview-prep" element={<Dashboard />} />
          <Route path="/salary" element={<Dashboard />} />
          <Route path="/blog" element={<Dashboard />} />
          <Route path="/templates" element={<Dashboard />} />
          <Route path="/guides" element={<Dashboard />} />
          <Route path="/success-stories" element={<Dashboard />} />
          <Route path="/webinars" element={<Dashboard />} />
          <Route path="/help" element={<Dashboard />} />
          <Route path="/pricing" element={<Dashboard />} />
          <Route path="/enterprise" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;