import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  FileText, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Award,
  Sparkles,
  Star,
  Play,
  ChevronRight,
  Globe,
  Shield,
  Clock,
  BarChart3,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Search,
  Download,
  Eye,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Code,
  Database,
  Layers,
  Cpu
} from 'lucide-react';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Enhancement',
      description: 'Advanced AI analyzes your resume and suggests improvements based on industry best practices and current market trends.'
    },
    {
      icon: Target,
      title: 'Job-Specific Optimization',
      description: 'Automatically optimize your resume for specific job postings with intelligent keyword analysis and ATS compatibility.'
    },
    {
      icon: FileText,
      title: 'Professional Templates',
      description: 'Choose from ATS-friendly templates designed by career experts and used by successful professionals.'
    },
    {
      icon: TrendingUp,
      title: 'Skills Gap Analysis',
      description: 'Identify missing skills and get personalized recommendations for career advancement and skill development.'
    },
    {
      icon: Shield,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes through Applicant Tracking Systems with our advanced formatting and keyword optimization.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your resume performance, application success rates, and get insights to improve your job search strategy.'
    }
  ];

  const benefits = [
    '10x faster resume optimization',
    'ATS-compliant formatting',
    'Industry-specific keywords',
    'Real-time AI suggestions',
    'Multiple format exports',
    'Career progression tracking',
    'Interview preparation tools',
    'Salary benchmarking data'
  ];

  const stats = [
    { number: '150K+', label: 'Resumes Enhanced', subtext: 'Professionals trust our platform' },
    { number: '89%', label: 'Success Rate', subtext: 'Get more interviews' },
    { number: '3.2x', label: 'More Callbacks', subtext: 'Compared to standard resumes' },
    { number: '4.9/5', label: 'User Rating', subtext: 'Based on 10K+ reviews' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'CareerAI helped me land my dream job at Google. The AI suggestions were spot-on and the resume optimization increased my interview rate by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Microsoft',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The job analysis feature is incredible. It showed me exactly what skills I was missing and helped me tailor my resume perfectly for each application.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director at Spotify',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'I went from getting no responses to having multiple offers. The AI-powered insights and recommendations completely transformed my job search.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with AI-powered resume enhancement',
      features: [
        '1 AI-optimized resume',
        'Basic job analysis',
        '3 resume templates',
        'PDF export',
        'Email support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '$19',
      period: 'per month',
      description: 'Everything you need for a successful job search',
      features: [
        'Unlimited AI-optimized resumes',
        'Advanced job analysis',
        '20+ premium templates',
        'Multiple export formats',
        'Skills gap analysis',
        'Interview preparation',
        'Priority support'
      ],
      cta: 'Start 7-day trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Advanced features for teams and organizations',
      features: [
        'Everything in Professional',
        'Team collaboration',
        'Custom branding',
        'API access',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const integrations = [
    { name: 'LinkedIn', logo: Linkedin, description: 'Import profile data' },
    { name: 'Indeed', logo: Search, description: 'Job search integration' },
    { name: 'Glassdoor', logo: Eye, description: 'Salary insights' },
    { name: 'AngelList', logo: Briefcase, description: 'Startup opportunities' }
  ];

  const demoContent = {
    resume: {
      title: 'Build professional resumes in minutes',
      features: [
        {
          title: 'AI-powered content suggestions',
          description: 'Get intelligent recommendations for every section'
        },
        {
          title: 'Professional templates',
          description: 'Choose from ATS-friendly designs'
        },
        {
          title: 'Real-time preview',
          description: 'See changes instantly as you build'
        }
      ],
      visual: (
        <div className="bg-white rounded-xl shadow-lg p-6 animate-float">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse"></div>
              <div className="h-2 bg-gray-100 rounded w-4/6 animate-pulse"></div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="h-3 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
              <div className="space-y-1">
                <div className="h-2 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-2 bg-gray-100 rounded w-4/5 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    analysis: {
      title: 'Analyze job postings with AI precision',
      features: [
        {
          title: 'Keyword extraction',
          description: 'Identify critical keywords and requirements'
        },
        {
          title: 'Match scoring',
          description: 'See how well your resume matches the job'
        },
        {
          title: 'Gap analysis',
          description: 'Discover missing skills and experience'
        }
      ],
      visual: (
        <div className="bg-white rounded-xl shadow-lg p-6 animate-float">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Job Match Score</span>
              <span className="text-2xl font-bold text-primary-600 animate-pulse">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-600 h-3 rounded-full w-11/12 animate-pulse"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-medium text-gray-700 mb-2">Found Keywords</div>
                <div className="space-y-1">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs animate-fade-in-up stagger-1">React</div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs animate-fade-in-up stagger-2">JavaScript</div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs animate-fade-in-up stagger-3">Node.js</div>
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-gray-700 mb-2">Missing Skills</div>
                <div className="space-y-1">
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs animate-fade-in-up stagger-4">AWS</div>
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs animate-fade-in-up stagger-5">Docker</div>
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs animate-fade-in-up stagger-6">Kubernetes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    optimization: {
      title: 'AI-powered resume optimization',
      features: [
        {
          title: 'Smart suggestions',
          description: 'Get personalized recommendations for improvement'
        },
        {
          title: 'ATS compatibility',
          description: 'Ensure your resume passes automated screening'
        },
        {
          title: 'Industry insights',
          description: 'Leverage data from successful professionals'
        }
      ],
      visual: (
        <div className="bg-white rounded-xl shadow-lg p-6 animate-float">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
              <span className="font-medium text-gray-900">AI Recommendations</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg animate-fade-in-left stagger-1">
                <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Add quantifiable achievements</div>
                  <div className="text-gray-600">Include specific metrics and results</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg animate-fade-in-left stagger-2">
                <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Optimize for ATS systems</div>
                  <div className="text-gray-600">Improve keyword density and formatting</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg animate-fade-in-left stagger-3">
                <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Enhance work descriptions</div>
                  <div className="text-gray-600">Use action verbs and industry terminology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Career Development</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Land your dream job with{' '}
                <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent animate-gradient">
                  AI-powered
                </span>{' '}
                resumes
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Transform your career prospects with our intelligent platform that analyzes job postings, 
                optimizes your resume, and provides personalized recommendations in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/dashboard" 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Start for free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition-all duration-200 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2 animate-fade-in-up stagger-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in-up stagger-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free forever plan</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:rotate-0 transition-transform duration-500 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">AI Analysis Complete</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Target className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-gray-900">Job Match Score</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-600 h-3 rounded-full w-4/5 transition-all duration-2000 animate-pulse"></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-2 block">92% Match - Excellent!</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 animate-fade-in-up stagger-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Added 15 relevant keywords</span>
                    </div>
                    <div className="flex items-center space-x-2 animate-fade-in-up stagger-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Optimized for ATS systems</span>
                    </div>
                    <div className="flex items-center space-x-2 animate-fade-in-up stagger-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Enhanced work descriptions</span>
                    </div>
                    <div className="flex items-center space-x-2 animate-fade-in-up stagger-4">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Improved formatting</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center animate-bounce-slow">
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-6 h-6 text-secondary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100" id="stats" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible.stats ? 'animate' : ''}`}>
            {stats.map((stat, index) => (
              <div key={index} className={`text-center fade-in-up stagger-${index + 1}`}>
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 animate-pulse-slow">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.features ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 fade-in-up">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up stagger-1">
              Our comprehensive platform provides all the tools and insights you need to create compelling resumes, 
              analyze job opportunities, and accelerate your career growth.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible.features ? 'animate' : ''}`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group fade-in-up stagger-${index + 1}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Demo Section */}
      <section className="py-20 bg-white" id="demo" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.demo ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 fade-in-up">
              See CareerAI in action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-up stagger-1">
              Discover how our AI-powered platform transforms your resume and accelerates your job search
            </p>
          </div>

          <div className={`flex justify-center mb-8 ${isVisible.demo ? 'animate' : ''}`}>
            <div className="bg-gray-100 rounded-lg p-1 flex fade-in-up stagger-2">
              <button
                onClick={() => setActiveTab('resume')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'resume' 
                    ? 'bg-white text-primary-600 shadow-sm transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Resume Builder
              </button>
              <button
                onClick={() => setActiveTab('analysis')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'analysis' 
                    ? 'bg-white text-primary-600 shadow-sm transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Job Analysis
              </button>
              <button
                onClick={() => setActiveTab('optimization')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'optimization' 
                    ? 'bg-white text-primary-600 shadow-sm transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                AI Optimization
              </button>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 lg:p-12 ${isVisible.demo ? 'animate' : ''}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{demoContent[activeTab].title}</h3>
                <div className="space-y-4">
                  {demoContent[activeTab].features.map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-3 animate-fade-in-up stagger-${index + 1}`}>
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">{feature.title}</p>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fade-in-right">
                {demoContent[activeTab].visual}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.testimonials ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 fade-in-up">
              Loved by professionals worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-up stagger-1">
              Join thousands of successful professionals who have transformed their careers with CareerAI
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 ${isVisible.testimonials ? 'animate' : ''}`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group fade-in-up stagger-${index + 1}`}>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.pricing ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 fade-in-up">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-up stagger-1">
              Choose the plan that fits your career goals. Start free and upgrade as you grow.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto ${isVisible.pricing ? 'animate' : ''}`}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl border-2 p-8 relative hover:shadow-lg transition-all duration-300 group fade-in-up stagger-${index + 1} ${
                plan.popular ? 'border-primary-500 shadow-lg transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 group-hover:scale-105 ${
                  plan.popular 
                    ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-primary-300 hover:text-primary-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50" id="integrations" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.integrations ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 fade-in-up">
              Seamless integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in-up stagger-1">
              Connect with your favorite platforms and streamline your job search workflow
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible.integrations ? 'animate' : ''}`}>
            {integrations.map((integration, index) => {
              const Icon = integration.logo;
              return (
                <div key={index} className={`bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group fade-in-up stagger-${index + 1}`}>
                  <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 animate-gradient" id="cta" data-animate>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isVisible.cta ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
              Ready to transform your career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto fade-in-up stagger-1">
              Join over 150,000 professionals who have accelerated their careers with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 fade-in-up stagger-2">
              <Link 
                to="/dashboard" 
                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                Start for free
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105">
                Schedule demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-white/80 fade-in-up stagger-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">CareerAI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering professionals worldwide with AI-powered career development tools. 
                Transform your resume, accelerate your job search, and achieve your career goals.
              </p>
              <div className="flex space-x-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform duration-200" />
              </div>
            </div>

            <div className="animate-fade-in-up stagger-1">
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/resume-builder" className="hover:text-white transition-colors">Resume Builder</Link></li>
                <li><Link to="/job-analyzer" className="hover:text-white transition-colors">Job Analyzer</Link></li>
                <li><Link to="/skills" className="hover:text-white transition-colors">Skills Assessment</Link></li>
                <li><Link to="/interview-prep" className="hover:text-white transition-colors">Interview Prep</Link></li>
              </ul>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition-colors">Career Blog</Link></li>
                <li><Link to="/templates" className="hover:text-white transition-colors">Resume Templates</Link></li>
                <li><Link to="/guides" className="hover:text-white transition-colors">Career Guides</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>

            <div className="animate-fade-in-up stagger-3">
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up">
            <p className="text-gray-400 text-sm">
              © 2024 CareerAI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ for career success</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;