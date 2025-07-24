
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Features() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'admin'>('mobile');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mobileFeatures = [
    {
      title: "Secure Engineer Login",
      description: "Access your personalized dashboard with secure credentials provided by your admin. Multi-factor authentication ensures maximum security.",
      icon: "ri-shield-user-line",
      image: "https://readdy.ai/api/search-image?query=mobile%20app%20login%20screen%20for%20construction%20engineers%2C%20secure%20authentication%20interface%20with%20hard%20hat%20icon%2C%20modern%20mobile%20UI%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20construction%20app%20interface&width=400&height=300&seq=login1&orientation=landscape"
    },
    {
      title: "Project Management",
      description: "View and manage all your assigned construction projects from one centralized location. Track progress, deadlines, and project details.",
      icon: "ri-building-line",
      image: "https://readdy.ai/api/search-image?query=mobile%20construction%20project%20management%20dashboard%20showing%20multiple%20projects%2C%20progress%20bars%2C%20deadlines%2C%20modern%20app%20interface%2C%20professional%20construction%20management%20tools&width=400&height=300&seq=projects1&orientation=landscape"
    },
    {
      title: "Daily Work Reports",
      description: "Create comprehensive daily reports with photos, videos, and instant WhatsApp sharing. Document progress and issues in real-time.",
      icon: "ri-file-text-line",
      image: "https://readdy.ai/api/search-image?query=mobile%20app%20daily%20work%20report%20interface%20with%20photo%20upload%2C%20video%20recording%2C%20WhatsApp%20integration%2C%20construction%20site%20documentation%2C%20professional%20reporting%20tools&width=400&height=300&seq=reports1&orientation=landscape"
    },
    {
      title: "Equipment Reports",
      description: "Log equipment usage time, track operational details, and monitor equipment performance across all your projects.",
      icon: "ri-tools-line",
      image: "https://readdy.ai/api/search-image?query=construction%20equipment%20tracking%20mobile%20app%20interface%20showing%20excavator%20usage%20time%2C%20maintenance%20logs%2C%20equipment%20status%2C%20professional%20construction%20management%20tools&width=400&height=300&seq=equipment1&orientation=landscape"
    },
    {
      title: "Material Consumption",
      description: "Record detailed material usage, workforce allocation, timing, and upload supporting media. Track issues and consumption patterns.",
      icon: "ri-stack-line",
      image: "https://readdy.ai/api/search-image?query=construction%20materials%20consumption%20tracking%20mobile%20app%2C%20inventory%20management%20interface%2C%20material%20usage%20logs%2C%20workforce%20allocation%2C%20professional%20construction%20tools&width=400&height=300&seq=materials1&orientation=landscape"
    },
    {
      title: "Purchase Orders",
      description: "Submit purchase requests for materials running low or unavailable. Streamline procurement process with digital approvals.",
      icon: "ri-shopping-cart-line",
      image: "https://readdy.ai/api/search-image?query=mobile%20purchase%20order%20interface%20for%20construction%20materials%2C%20digital%20procurement%20system%2C%20material%20request%20forms%2C%20professional%20construction%20management%20app&width=400&height=300&seq=purchase1&orientation=landscape"
    },
    {
      title: "Incoming Orders",
      description: "Inspect and report on arriving materials. Document quality, quantity, and any damage with photo evidence.",
      icon: "ri-truck-line",
      image: "https://readdy.ai/api/search-image?query=construction%20material%20inspection%20mobile%20app%2C%20incoming%20delivery%20inspection%20interface%2C%20quality%20check%20documentation%2C%20damage%20reporting%20tools&width=400&height=300&seq=incoming1&orientation=landscape"
    },
    {
      title: "Project Documents",
      description: "Upload, view, and share working drawings, material testing reports, and other critical project documentation.",
      icon: "ri-folder-line",
      image: "https://readdy.ai/api/search-image?query=construction%20project%20documents%20mobile%20app%20interface%2C%20blueprint%20viewing%2C%20material%20testing%20reports%2C%20document%20sharing%2C%20professional%20construction%20management%20tools&width=400&height=300&seq=documents1&orientation=landscape"
    },
    {
      title: "Site Gallery",
      description: "Browse and share comprehensive site photos and videos. Organize visual documentation by project and date.",
      icon: "ri-camera-line",
      image: "https://readdy.ai/api/search-image?query=construction%20site%20photo%20gallery%20mobile%20app%20interface%2C%20image%20and%20video%20organization%2C%20site%20documentation%2C%20media%20sharing%20tools%2C%20professional%20construction%20app&width=400&height=300&seq=gallery1&orientation=landscape"
    }
  ];

  const adminFeatures = [
    {
      title: "Intuitive Dashboard",
      description: "Comprehensive overview with weather updates, construction tools, and real-time analytics graphs for informed decision-making.",
      icon: "ri-dashboard-line",
      image: "https://readdy.ai/api/search-image?query=construction%20admin%20dashboard%20interface%20with%20weather%20widget%2C%20analytics%20graphs%2C%20project%20overview%2C%20modern%20web%20interface%2C%20professional%20construction%20management%20system&width=400&height=300&seq=dashboard1&orientation=landscape"
    },
    {
      title: "Project Management",
      description: "Create, edit, and manage multiple construction projects. Handle project documents, timelines, and resource allocation.",
      icon: "ri-building-2-line",
      image: "https://readdy.ai/api/search-image?query=construction%20project%20management%20admin%20interface%2C%20project%20creation%20forms%2C%20timeline%20management%2C%20resource%20allocation%2C%20professional%20construction%20software&width=400&height=300&seq=admin-projects1&orientation=landscape"
    },
    {
      title: "Equipment Management",
      description: "Add equipment with hourly rates, track usage across projects, and monitor operational costs and maintenance schedules.",
      icon: "ri-settings-line",
      image: "https://readdy.ai/api/search-image?query=construction%20equipment%20management%20admin%20interface%2C%20equipment%20database%2C%20hourly%20rates%2C%20usage%20tracking%2C%20cost%20monitoring%2C%20professional%20construction%20management%20system&width=400&height=300&seq=admin-equipment1&orientation=landscape"
    },
    {
      title: "Materials Management",
      description: "Define material units and categories. Analyze usage patterns, waste management, and stock levels across all projects.",
      icon: "ri-database-line",
      image: "https://readdy.ai/api/search-image?query=construction%20materials%20management%20admin%20interface%2C%20inventory%20tracking%2C%20waste%20analysis%2C%20stock%20levels%2C%20material%20categories%2C%20professional%20construction%20software&width=400&height=300&seq=admin-materials1&orientation=landscape"
    },
    {
      title: "Purchase Orders",
      description: "Review and approve engineer purchase requests. Streamline procurement workflow with digital approval system.",
      icon: "ri-file-check-line",
      image: "https://readdy.ai/api/search-image?query=purchase%20order%20approval%20admin%20interface%2C%20procurement%20workflow%2C%20digital%20approval%20system%2C%20material%20requests%2C%20professional%20construction%20management&width=400&height=300&seq=admin-purchase1&orientation=landscape"
    },
    {
      title: "Work Issues Resolution",
      description: "Efficiently resolve on-site issues raised by engineers. Track issue status and maintain resolution history.",
      icon: "ri-customer-service-line",
      image: "https://readdy.ai/api/search-image?query=construction%20work%20issues%20management%20admin%20interface%2C%20issue%20tracking%20system%2C%20resolution%20workflow%2C%20problem%20solving%20dashboard%2C%20professional%20construction%20software&width=400&height=300&seq=admin-issues1&orientation=landscape"
    },
    {
      title: "Daily Work Reports",
      description: "Access detailed reports of workers, materials, equipment, and costs. Advanced filtering, printing, and media viewing capabilities.",
      icon: "ri-bar-chart-line",
      image: "https://readdy.ai/api/search-image?query=construction%20daily%20work%20reports%20admin%20interface%2C%20detailed%20analytics%2C%20cost%20tracking%2C%20worker%20productivity%2C%20filtering%20options%2C%20professional%20reporting%20system&width=400&height=300&seq=admin-reports1&orientation=landscape"
    },
    {
      title: "Site Gallery Management",
      description: "View, organize, and manage site photos and videos from all projects. Advanced search and categorization features.",
      icon: "ri-image-line",
      image: "https://readdy.ai/api/search-image?query=construction%20site%20gallery%20admin%20interface%2C%20photo%20and%20video%20management%2C%20media%20organization%2C%20search%20functionality%2C%20professional%20construction%20documentation&width=400&height=300&seq=admin-gallery1&orientation=landscape"
    },
    {
      title: "Engineer Management",
      description: "Create engineer accounts, assign roles and permissions, enable/disable access, and view detailed activity logs.",
      icon: "ri-user-settings-line",
      image: "https://readdy.ai/api/search-image?query=engineer%20management%20admin%20interface%2C%20user%20account%20creation%2C%20role%20assignment%2C%20permission%20management%2C%20activity%20logs%2C%20professional%20construction%20management%20system&width=400&height=300&seq=admin-engineers1&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20construction%20site%20with%20engineers%20using%20mobile%20tablets%20and%20admin%20monitoring%20from%20office%2C%20dual%20perspective%20showing%20field%20workers%20and%20management%20dashboard%2C%20construction%20technology%20integration%2C%20professional%20construction%20management&width=1920&height=600&seq=featureshero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mx-auto max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              Powerful Features for Every User
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Comprehensive tools for engineers in the field and administrators in the office. Everything you need to manage construction projects efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="backdrop-blur-md bg-black/5 border border-black/10 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'mobile' 
                    ? 'bg-black text-white shadow-lg scale-105' 
                    : 'text-black hover:text-black/70 hover:scale-105'
                }`}
              >
                <i className="ri-smartphone-line mr-2"></i>
                Mobile App Features
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'admin' 
                    ? 'bg-black text-white shadow-lg scale-105' 
                    : 'text-black hover:text-black/70 hover:scale-105'
                }`}
              >
                <i className="ri-computer-line mr-2"></i>
                Admin Panel Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      {activeTab === 'mobile' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
                Mobile App for Engineers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
                Empower your field engineers with a comprehensive mobile application designed for on-site construction management and reporting.
              </p>
            </div>

            <div className="grid gap-16">
              {mobileFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} animate-fade-in`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105`}>
                    <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                      <i className={`${feature.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <div className="flex items-center text-black font-medium">
                      <i className="ri-smartphone-line mr-2"></i>
                      Mobile Optimized
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="backdrop-blur-md bg-white/80 border border-white/30 p-4 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full rounded-lg object-top hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Admin Features */}
      {activeTab === 'admin' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
                Admin Panel Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
                Comprehensive administrative tools for managing projects, resources, and teams with powerful analytics and reporting capabilities.
              </p>
            </div>

            <div className="grid gap-16">
              {adminFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} animate-fade-in`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105`}>
                    <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                      <i className={`${feature.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <div className="flex items-center text-black font-medium">
                      <i className="ri-computer-line mr-2"></i>
                      Web-Based Dashboard
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="backdrop-blur-md bg-white/80 border border-white/30 p-4 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full rounded-lg object-top hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
              Why Choose 1vans Features?
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Designed specifically for construction professionals with real-world needs in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "ri-smartphone-line", title: "Mobile-First Design", description: "Built for on-site use with offline capabilities, touch-friendly interface, and optimized for construction environments." },
              { icon: "ri-sync-line", title: "Real-Time Sync", description: "Instant synchronization between mobile app and admin panel ensures everyone has the latest project information." },
              { icon: "ri-shield-check-line", title: "Secure & Compliant", description: "Enterprise-grade security with role-based access control and compliance with construction industry standards." }
            ].map((benefit, index) => (
              <div 
                key={index}
                className={`text-center backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                  <i className={`${benefit.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "ri-whatsapp-line", title: "WhatsApp Integration", description: "Share reports and updates instantly via WhatsApp", color: "green" },
              { icon: "ri-camera-line", title: "Media Management", description: "Built-in photo and video capture with cloud storage", color: "blue" },
              { icon: "ri-weather-line", title: "Weather Updates", description: "Real-time weather data for better planning", color: "purple" },
              { icon: "ri-printer-line", title: "Print & Export", description: "Generate professional reports and documents", color: "orange" }
            ].map((integration, index) => (
              <div 
                key={index}
                className={`backdrop-blur-md bg-white/80 border border-white/30 p-6 rounded-xl shadow-lg text-center hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                  <i className={`${integration.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{integration.title}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Features That Deliver Results
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-delay">
              See the impact of comprehensive construction management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "60%", label: "Faster Reporting", description: "Mobile reporting reduces documentation time", delay: "delay-100" },
              { number: "45%", label: "Better Resource Tracking", description: "Real-time equipment and material monitoring", delay: "delay-200" },
              { number: "30%", label: "Reduced Delays", description: "Proactive issue identification and resolution", delay: "delay-300" },
              { number: "50%", label: "Improved Communication", description: "Seamless field-to-office information flow", delay: "delay-400" }
            ].map((metric, index) => (
              <div 
                key={index}
                className={`backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl transform transition-all duration-700 hover:scale-110 hover:bg-white/20 ${metric.delay}`}
              >
                <div className="text-4xl font-bold text-white mb-2 animate-bounce">{metric.number}</div>
                <div className="text-lg font-semibold mb-2 text-white">{metric.label}</div>
                <p className="text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-black/5 border border-black/10 rounded-2xl p-12 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-bold text-black mb-4 animate-pulse">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how 1vans' comprehensive features can transform your construction project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group hover:scale-110 transition-all duration-300"
              >
                Start Free Trial
                <i className="ri-rocket-line ml-2 group-hover:rotate-12 transition-transform duration-300"></i>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group hover:scale-110 transition-all duration-300"
              >
                Schedule Demo
                <i className="ri-calendar-line ml-2 group-hover:bounce transition-transform duration-300"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
