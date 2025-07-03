import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Plus, 
  Target, 
  TrendingUp, 
  Download, 
  Edit3, 
  Eye,
  Calendar,
  Users,
  Award,
  BarChart3,
  Search,
  Filter,
  MoreVertical,
  Briefcase,
  GraduationCap,
  Code,
  MessageSquare,
  Bell,
  Settings,
  User,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  ArrowRight,
  BookOpen,
  DollarSign,
  Globe,
  Headphones
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const sidebarItems = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: BarChart3, 
      description: 'Dashboard overview and analytics',
      action: () => setActiveTab('overview')
    },
    { 
      id: 'resumes', 
      label: 'My Resumes', 
      icon: FileText, 
      description: 'Manage and optimize your resumes',
      action: () => setActiveTab('resumes')
    },
    { 
      id: 'job-analysis', 
      label: 'Job Analysis', 
      icon: Target, 
      description: 'Analyze job postings and requirements',
      action: () => navigate('/job-analyzer')
    },
    { 
      id: 'skills', 
      label: 'Skills Assessment', 
      icon: Code, 
      description: 'Evaluate and improve your skills',
      action: () => setActiveTab('skills')
    },
    { 
      id: 'interview-prep', 
      label: 'Interview Prep', 
      icon: MessageSquare, 
      description: 'Practice interviews with AI',
      action: () => setActiveTab('interview-prep')
    },
    { 
      id: 'career-insights', 
      label: 'Career Insights', 
      icon: TrendingUp, 
      description: 'Get personalized career recommendations',
      action: () => setActiveTab('career-insights')
    },
    { 
      id: 'applications', 
      label: 'Applications', 
      icon: Briefcase, 
      description: 'Track your job applications',
      action: () => setActiveTab('applications')
    },
    { 
      id: 'salary-insights', 
      label: 'Salary Insights', 
      icon: DollarSign, 
      description: 'Research market salary data',
      action: () => setActiveTab('salary-insights')
    },
    { 
      id: 'networking', 
      label: 'Networking', 
      icon: Users, 
      description: 'Build professional connections',
      action: () => setActiveTab('networking')
    },
    { 
      id: 'learning', 
      label: 'Learning Hub', 
      icon: BookOpen, 
      description: 'Courses and skill development',
      action: () => setActiveTab('learning')
    }
  ];

  const bottomSidebarItems = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: User, 
      description: 'Manage your profile',
      action: () => setActiveTab('profile')
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings, 
      description: 'Account and preferences',
      action: () => setActiveTab('settings')
    },
    { 
      id: 'support', 
      label: 'Support', 
      icon: Headphones, 
      description: 'Get help and support',
      action: () => setActiveTab('support')
    }
  ];

  const resumes = [
    {
      id: 1,
      title: 'Software Engineer Resume',
      lastModified: '2 hours ago',
      matchScore: 92,
      applications: 15,
      views: 67,
      status: 'active',
      template: 'Modern Professional'
    },
    {
      id: 2,
      title: 'Product Manager Resume',
      lastModified: '1 day ago',
      matchScore: 88,
      applications: 12,
      views: 45,
      status: 'active',
      template: 'Executive Classic'
    },
    {
      id: 3,
      title: 'Data Scientist Resume',
      lastModified: '3 days ago',
      matchScore: 85,
      applications: 8,
      views: 32,
      status: 'draft',
      template: 'Tech Specialist'
    }
  ];

  const stats = [
    { label: 'Total Resumes', value: '12', icon: FileText, color: 'bg-blue-500', change: '+2 this week' },
    { label: 'Job Applications', value: '35', icon: Target, color: 'bg-green-500', change: '+8 this week' },
    { label: 'Profile Views', value: '144', icon: Eye, color: 'bg-purple-500', change: '+23 this week' },
    { label: 'Success Rate', value: '68%', icon: TrendingUp, color: 'bg-orange-500', change: '+5% this month' }
  ];

  const recentActivity = [
    { 
      action: 'Resume optimized for "Senior Developer" position at Google', 
      time: '2 hours ago',
      type: 'optimization',
      icon: Zap
    },
    { 
      action: 'New job match found: Product Manager at Microsoft', 
      time: '5 hours ago',
      type: 'match',
      icon: Target
    },
    { 
      action: 'Resume viewed by Amazon recruiter', 
      time: '1 day ago',
      type: 'view',
      icon: Eye
    },
    { 
      action: 'Skills assessment completed: JavaScript Advanced', 
      time: '2 days ago',
      type: 'skill',
      icon: Award
    },
    { 
      action: 'Interview scheduled with Spotify', 
      time: '3 days ago',
      type: 'interview',
      icon: Calendar
    }
  ];

  const jobMatches = [
    {
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      matchScore: 95,
      salary: '$180K - $250K',
      posted: '2 days ago',
      applicants: '50+ applicants'
    },
    {
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      matchScore: 92,
      salary: '$160K - $220K',
      posted: '1 day ago',
      applicants: '30+ applicants'
    },
    {
      title: 'Full Stack Developer',
      company: 'Netflix',
      location: 'Los Gatos, CA',
      matchScore: 88,
      salary: '$150K - $200K',
      posted: '3 days ago',
      applicants: '75+ applicants'
    }
  ];

  const skillsProgress = [
    { skill: 'JavaScript', level: 85, target: 90 },
    { skill: 'React', level: 80, target: 85 },
    { skill: 'Node.js', level: 75, target: 80 },
    { skill: 'Python', level: 70, target: 80 }
  ];

  const getCurrentSectionInfo = () => {
    const currentItem = [...sidebarItems, ...bottomSidebarItems].find(item => item.id === activeTab);
    return currentItem || sidebarItems[0];
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      View all
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activity.type === 'optimization' ? 'bg-primary-100 text-primary-600' :
                            activity.type === 'match' ? 'bg-green-100 text-green-600' :
                            activity.type === 'view' ? 'bg-purple-100 text-purple-600' :
                            activity.type === 'skill' ? 'bg-orange-100 text-orange-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{activity.action}</p>
                            <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Actions & Skills Progress */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/resume-builder" className="flex items-center space-x-3 p-3 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
                      <Plus className="w-5 h-5" />
                      <span className="font-medium">Create New Resume</span>
                    </Link>
                    <Link to="/job-analyzer" className="flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                      <Target className="w-5 h-5" />
                      <span className="font-medium">Analyze Job Posting</span>
                    </Link>
                    <button 
                      onClick={() => setActiveTab('skills')}
                      className="flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors w-full"
                    >
                      <Code className="w-5 h-5" />
                      <span className="font-medium">Take Skills Test</span>
                    </button>
                  </div>
                </div>

                {/* Skills Progress */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Progress</h3>
                  <div className="space-y-4">
                    {skillsProgress.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-gray-900">{skill.skill}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-secondary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Target: {skill.target}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Matches */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recommended Jobs</h2>
                <Link to="/job-analyzer" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  View all matches
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {jobMatches.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                          <p className="text-sm text-gray-500">{job.location}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600">Match Score</span>
                          <span className="font-medium text-primary-600">{job.matchScore}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${job.matchScore}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">{job.salary}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {job.posted} • {job.applicants}
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-primary-50 text-primary-600 font-medium py-2 rounded-lg hover:bg-primary-100 transition-colors">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'resumes':
        return (
          <div className="space-y-6">
            {/* Resumes Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Resumes</h2>
                <p className="text-gray-600 mt-1">Manage and optimize your professional resumes</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search resumes..." 
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Resumes Grid */}
            <div className="grid gap-6">
              {resumes.map((resume) => (
                <div key={resume.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{resume.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          resume.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {resume.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {resume.template}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{resume.lastModified}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4" />
                          <span>{resume.matchScore}% avg match</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{resume.applications} applications</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{resume.views} views</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600">Overall Performance</span>
                          <span className="font-medium text-gray-900">{resume.matchScore}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-500 to-secondary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${resume.matchScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-6">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        const currentSection = getCurrentSectionInfo();
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {React.createElement(currentSection.icon, {
                className: "w-8 h-8 text-gray-400"
              })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {currentSection.label}
            </h3>
            <p className="text-gray-600 mb-6">
              {currentSection.description}. This feature is coming soon with advanced AI capabilities.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/resume-builder" className="bg-primary-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
                Create Resume Instead
              </Link>
              <button 
                onClick={() => setActiveTab('overview')}
                className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Overview
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 fixed h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CareerAI</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    activeTab === item.id
                      ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="flex-1 text-left">
                    <span className="font-medium block">{item.label}</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-600">{item.description}</span>
                  </div>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <nav className="space-y-2">
              {bottomSidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                      activeTab === item.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="flex-1 text-left">
                      <span className="font-medium block">{item.label}</span>
                      <span className="text-xs text-gray-500 group-hover:text-gray-600">{item.description}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {getCurrentSectionInfo().label}
              </h1>
              <p className="text-gray-600 mt-1">
                {getCurrentSectionInfo().description}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <Link to="/resume-builder" className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium px-6 py-2.5 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Plus className="w-4 h-4 mr-2 inline" />
                New Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;