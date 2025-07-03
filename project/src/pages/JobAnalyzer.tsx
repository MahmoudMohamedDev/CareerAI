import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Lightbulb,
  BarChart3,
  Zap,
  Copy,
  Download,
  RefreshCw
} from 'lucide-react';

const JobAnalyzer = () => {
  const [jobUrl, setJobUrl] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setAnalysisResults({
        matchScore: 78,
        keywords: ['React', 'JavaScript', 'Node.js', 'API', 'Agile', 'Frontend', 'Backend', 'Cloud'],
        missingKeywords: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        recommendations: [
          'Add AWS cloud experience to your resume',
          'Highlight your API development skills',
          'Include specific project metrics and achievements',
          'Emphasize your Agile methodology experience'
        ],
        skillsGap: [
          { skill: 'AWS', importance: 'High', inResume: false },
          { skill: 'Docker', importance: 'Medium', inResume: false },
          { skill: 'React', importance: 'High', inResume: true },
          { skill: 'Node.js', importance: 'High', inResume: true }
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const mockJobDescription = `We are seeking a Senior Full Stack Developer to join our dynamic team. The ideal candidate will have 5+ years of experience in React, Node.js, and cloud technologies.

Key Responsibilities:
- Develop and maintain web applications using React and Node.js
- Work with AWS services including EC2, S3, and Lambda
- Implement CI/CD pipelines using Docker and Kubernetes
- Collaborate with cross-functional teams in an Agile environment
- Design and implement RESTful APIs
- Optimize applications for performance and scalability

Required Skills:
- Strong proficiency in JavaScript, React, and Node.js
- Experience with AWS cloud services
- Knowledge of Docker and Kubernetes
- Familiarity with CI/CD processes
- Understanding of Agile methodologies
- Excellent problem-solving skills`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Posting Analyzer</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze job postings to identify key requirements and optimize your resume accordingly
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Posting URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={jobUrl}
                    onChange={(e) => setJobUrl(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://company.com/job-posting"
                  />
                </div>

                <div className="text-center">
                  <span className="text-sm text-gray-500">OR</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Paste the job description here..."
                  />
                </div>

                <button
                  onClick={() => setJobDescription(mockJobDescription)}
                  className="w-full btn-secondary text-sm"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Use Sample Job Description
                </button>

                <button
                  onClick={handleAnalyze}
                  disabled={!jobDescription.trim() || isAnalyzing}
                  className="w-full btn-primary"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Analyze Job Posting
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="card p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Include the complete job description for better analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Look for both technical and soft skills requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Pay attention to company culture and values</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {!analysisResults ? (
              <div className="card p-12 text-center">
                <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Analyze</h3>
                <p className="text-gray-600 mb-6">
                  Paste a job description and click "Analyze Job Posting" to get detailed insights
                </p>
                <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <BarChart3 className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Match Analysis</h4>
                    <p className="text-sm text-gray-600 mt-1">See how well your resume matches</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <Zap className="w-8 h-8 text-secondary-500 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">AI Optimization</h4>
                    <p className="text-sm text-gray-600 mt-1">Get personalized recommendations</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Match Score */}
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">Overall Match Score</h3>
                    <span className="text-3xl font-bold text-primary-600">{analysisResults.matchScore}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${analysisResults.matchScore}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Room for improvement</span>
                    <span>Excellent match</span>
                  </div>
                </div>

                {/* Keywords Analysis */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="text-lg font-semibold text-gray-900">Found Keywords</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-gray-900">Missing Keywords</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.missingKeywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills Gap Analysis */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Gap Analysis</h3>
                  <div className="space-y-3">
                    {analysisResults.skillsGap.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-gray-900">{skill.skill}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            skill.importance === 'High' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {skill.importance}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {skill.inResume ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                          )}
                          <span className="text-sm text-gray-600">
                            {skill.inResume ? 'In Resume' : 'Missing'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="card p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary-500" />
                    <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisResults.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Optimize My Resume
                  </button>
                  <button className="btn-secondary flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export Analysis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAnalyzer;