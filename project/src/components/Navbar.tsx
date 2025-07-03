import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, ChevronDown, Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const platformItems = [
    { 
      label: 'Resume Builder', 
      href: '/resume-builder', 
      description: 'Create professional resumes with AI-powered suggestions and ATS optimization',
      icon: '📄'
    },
    { 
      label: 'Job Analyzer', 
      href: '/job-analyzer', 
      description: 'Analyze job postings and optimize your resume for specific positions',
      icon: '🎯'
    },
    { 
      label: 'Skills Assessment', 
      href: '/skills', 
      description: 'Evaluate your skills and get personalized improvement recommendations',
      icon: '🧠'
    },
    { 
      label: 'Career Insights', 
      href: '/insights', 
      description: 'Get data-driven insights about your career progression and market trends',
      icon: '📊'
    },
    { 
      label: 'Interview Prep', 
      href: '/interview-prep', 
      description: 'Practice with AI-powered mock interviews and get detailed feedback',
      icon: '🎤'
    },
    { 
      label: 'Salary Insights', 
      href: '/salary', 
      description: 'Research competitive salary data and negotiate better compensation',
      icon: '💰'
    }
  ];

  const resourceItems = [
    { 
      label: 'Career Blog', 
      href: '/blog', 
      description: 'Latest career development tips, industry insights, and success strategies',
      icon: '📝'
    },
    { 
      label: 'Resume Templates', 
      href: '/templates', 
      description: 'Professional, ATS-friendly resume templates for every industry',
      icon: '📋'
    },
    { 
      label: 'Career Guides', 
      href: '/guides', 
      description: 'Comprehensive guides for job searching, networking, and career growth',
      icon: '📚'
    },
    { 
      label: 'Success Stories', 
      href: '/success-stories', 
      description: 'Real user success stories and career transformation journeys',
      icon: '⭐'
    },
    { 
      label: 'Webinars', 
      href: '/webinars', 
      description: 'Live career development sessions with industry experts',
      icon: '🎥'
    },
    { 
      label: 'Help Center', 
      href: '/help', 
      description: 'Get support, find answers, and learn how to use our platform',
      icon: '❓'
    }
  ];

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CareerAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Platform Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onMouseEnter={() => handleDropdownEnter('platform')}
                onMouseLeave={handleDropdownLeave}
              >
                <span>Platform</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'platform' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 py-6 z-50"
                  onMouseEnter={() => handleDropdownEnter('platform')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="px-6 pb-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Career Tools</h3>
                    <p className="text-sm text-gray-600">Everything you need to advance your career with artificial intelligence</p>
                  </div>
                  <div className="py-2">
                    {platformItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{item.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 mb-1">{item.label}</div>
                            <div className="text-sm text-gray-600 leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onMouseEnter={() => handleDropdownEnter('resources')}
                onMouseLeave={handleDropdownLeave}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 py-6 z-50"
                  onMouseEnter={() => handleDropdownEnter('resources')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="px-6 pb-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">Career Resources</h3>
                    <p className="text-sm text-gray-600">Learn and grow with expert guidance and comprehensive resources</p>
                  </div>
                  <div className="py-2">
                    {resourceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{item.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 mb-1">{item.label}</div>
                            <div className="text-sm text-gray-600 leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Pricing
            </Link>
            
            <Link to="/enterprise" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Enterprise
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={handleLogin}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Login
                </button>
                <Link 
                  to="/dashboard"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium px-6 py-2.5 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start for free
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-600" />
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                      Dashboard
                    </Link>
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                      Settings
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 px-4">Platform</h3>
                {platformItems.slice(0, 3).map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 px-4">Resources</h3>
                {resourceItems.slice(0, 3).map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-200 space-y-2 px-4">
                {!isLoggedIn ? (
                  <>
                    <button 
                      onClick={() => {
                        handleLogin();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left py-2 text-gray-700 hover:text-primary-600 transition-colors duration-150"
                    >
                      Login
                    </button>
                    <Link 
                      to="/dashboard"
                      className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium px-6 py-3 rounded-lg text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Start for free
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-150">
                      Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left py-2 text-gray-700 hover:text-primary-600 transition-colors duration-150"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;