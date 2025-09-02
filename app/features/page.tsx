
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
      image: "/vans_login.png"
    },
   
    {
      title: "Project Management",
      description: "View and manage all your assigned construction projects from one centralized location. Track progress, deadlines, and project details.",
      icon: "ri-building-line",
      image: "/Intuitive_Dashboard.png"
    },
    {
      title: "Daily Work Reports",
      description: "Create comprehensive daily reports with photos, videos, and instant WhatsApp sharing. Document progress and issues in real-time.",
      icon: "ri-file-text-line",
      image: "/vans_work_report.png"
    },
    {
      title: "Equipment Reports",
      description: "Log equipment usage time, track operational details, and monitor equipment performance across all your projects.",
      icon: "ri-tools-line",
      image: "eqp_report.png"
    },
  
    {
      title: "Incoming Orders",
      description: "Inspect and report on arriving materials. Document quality, quantity, and any damage with photo evidence.",
      icon: "ri-truck-line",
      image: "incoming_orders.png"
    },
    {
      title: "Project Documents",
      description: "Upload, view, and share working drawings, material testing reports, and other critical project documentation.",
      icon: "ri-folder-line",
      image: "vans_diff_projects.jpg"
    },

  ];

  const adminFeatures = [
    {
      title: "Intuitive Dashboard",
      description: "Comprehensive overview with weather updates, construction tools, and real-time analytics graphs for informed decision-making.",
      icon: "ri-dashboard-line",
      image: "/Intuitive_Dashboard.png"
    },
    {
      title: "Project Management",
      description: "Create, edit, and manage multiple construction projects. Handle project documents, timelines, and resource allocation.",
      icon: "ri-building-2-line",
      image: "/Project_Management.png"
    },
    {
      title: "Equipment Management",
      description: "Add equipment with hourly rates, track usage across projects, and monitor operational costs and maintenance schedules.",
      icon: "ri-settings-line",
      image: "/Equipment_Management.png"
    },
    {
      title: "Materials Management",
      description: "Define material units and categories. Analyze usage patterns, waste management, and stock levels across all projects.",
      icon: "ri-database-line",
      image: "/Materials_Management.png"
    },
   
    {
      title: "Work Issues Resolution",
      description: "Efficiently resolve on-site issues raised by engineers. Track issue status and maintain resolution history.",
      icon: "ri-customer-service-line",
      image: "/Work_Reports.png"
    },
    {
      title: "Daily Work Reports",
      description: "Access detailed reports of workers, materials, equipment, and costs. Advanced filtering, printing, and media viewing capabilities.",
      icon: "ri-bar-chart-line",
      image: "/Work_Reports.png"
    },
    {
      title: "Site Gallery Management",
      description: "View, organize, and manage site photos and videos from all projects. Advanced search and categorization features.",
      icon: "ri-image-line",
      image: "/Site_Gallery.png"
    },
   
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

      {/* Tab Navigation - Responsive */}
      <section className="py-6 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap mb-2 sm:mb-0 sm:mr-2 flex items-center justify-center text-base sm:text-lg ${activeTab === 'mobile'
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-black/5 text-black hover:text-black/70 hover:scale-105'
                }`}
                style={{ minWidth: '180px' }}
              >
                <i className="ri-smartphone-line mr-2"></i>
                Mobile App Features
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex items-center justify-center text-base sm:text-lg ${activeTab === 'admin'
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-black/5 text-black hover:text-black/70 hover:scale-105'
                }`}
                style={{ minWidth: '180px' }}
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
              Why Choose OneVans Features?
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
                {/* <div className="w-20 h-20 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                  <i className={`${benefit.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                </div> */}
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
                {/* <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                    <i className={`${integration.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                  </div> */}
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
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-black/5 border border-black/10 rounded-2xl p-12 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-bold text-black mb-4 animate-pulse">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how OneVans' comprehensive features can transform your construction project management.
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
      </section> */}

      <Footer />
    </div>
  );
}
