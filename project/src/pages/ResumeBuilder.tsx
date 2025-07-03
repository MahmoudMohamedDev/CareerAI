import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Save, 
  Sparkles, 
  Target, 
  Plus, 
  Trash2,
  Edit3,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code
} from 'lucide-react';

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [resumeData, setResumeData] = useState({
    personal: {
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      summary: 'Experienced software engineer with 5+ years in full-stack development...'
    },
    experience: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        period: 'Jan 2022 - Present',
        description: 'Led development of cloud-native applications using React and Node.js...'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'Stanford University',
        period: '2016 - 2020',
        gpa: '3.8/4.0'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker']
  });

  const [aiSuggestions, setAiSuggestions] = useState([
    'Add quantifiable achievements to your work experience',
    'Include relevant keywords for ATS optimization',
    'Highlight leadership and team collaboration skills',
    'Consider adding a portfolio or GitHub link'
  ]);

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'awards', label: 'Awards', icon: Award }
  ];

  const templates = [
    { id: 'modern', name: 'Modern Professional', preview: 'bg-gradient-to-br from-blue-50 to-indigo-50' },
    { id: 'classic', name: 'Classic Executive', preview: 'bg-gradient-to-br from-gray-50 to-slate-50' },
    { id: 'creative', name: 'Creative Designer', preview: 'bg-gradient-to-br from-purple-50 to-pink-50' },
    { id: 'tech', name: 'Tech Specialist', preview: 'bg-gradient-to-br from-green-50 to-teal-50' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
            <p className="text-gray-600 mt-2">Create and customize your professional resume</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="btn-secondary">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </button>
            <button className="btn-secondary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="btn-primary">
              <Save className="w-4 h-4 mr-2" />
              Save Resume
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Template Selection */}
            <div className="card p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Templates</h3>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      template.id === 'modern'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-12 rounded mb-2 ${template.preview}`}></div>
                    <span className="text-xs font-medium text-gray-700">{template.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Section Navigation */}
            <div className="card p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sections</h3>
              <div className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="card p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-500" />
                <h3 className="text-lg font-semibold text-gray-900">AI Suggestions</h3>
              </div>
              <div className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              {/* Personal Information Section */}
              {activeSection === 'personal' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <User className="w-6 h-6 text-primary-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={resumeData.personal.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={resumeData.personal.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={resumeData.personal.phone}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={resumeData.personal.location}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="San Francisco, CA"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
                    <textarea
                      value={resumeData.personal.summary}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Write a compelling professional summary..."
                    />
                  </div>

                  <button className="btn-primary">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Optimize Summary
                  </button>
                </div>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-6 h-6 text-primary-500" />
                      <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                    </div>
                    <button className="btn-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </button>
                  </div>

                  {resumeData.experience.map((exp, index) => (
                    <div key={exp.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Experience {index + 1}</h3>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                          <input
                            type="text"
                            value={exp.title}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Senior Software Engineer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="TechCorp Inc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="San Francisco, CA"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                          <input
                            type="text"
                            value={exp.period}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Jan 2022 - Present"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                          value={exp.description}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your responsibilities and achievements..."
                        />
                      </div>

                      <div className="mt-4 flex space-x-3">
                        <button className="btn-secondary text-sm">
                          <Sparkles className="w-4 h-4 mr-1" />
                          AI Enhance
                        </button>
                        <button className="btn-secondary text-sm">
                          <Target className="w-4 h-4 mr-1" />
                          Add Keywords
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Code className="w-6 h-6 text-primary-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Add Skills</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Type a skill and press Enter"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {skill}
                          <button className="ml-2 text-primary-600 hover:text-primary-800">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Skill Recommendations
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
              
              {/* Mini Resume Preview */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-xs">
                <div className="text-center mb-3">
                  <h4 className="font-bold text-gray-900">{resumeData.personal.name}</h4>
                  <p className="text-gray-600">{resumeData.personal.email}</p>
                  <p className="text-gray-600">{resumeData.personal.phone}</p>
                </div>
                
                <div className="border-t pt-3 mb-3">
                  <h5 className="font-semibold text-gray-900 mb-2">Summary</h5>
                  <p className="text-gray-600 line-clamp-3">{resumeData.personal.summary}</p>
                </div>
                
                <div className="border-t pt-3 mb-3">
                  <h5 className="font-semibold text-gray-900 mb-2">Experience</h5>
                  {resumeData.experience.map((exp, index) => (
                    <div key={exp.id} className="mb-2">
                      <p className="font-medium text-gray-900">{exp.title}</p>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-gray-500">{exp.period}</p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3">
                  <h5 className="font-semibold text-gray-900 mb-2">Skills</h5>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.slice(0, 4).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {resumeData.skills.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{resumeData.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <button className="w-full btn-secondary text-sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Full Preview
                </button>
                <button className="w-full btn-primary text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;