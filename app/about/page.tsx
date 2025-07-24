
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const leadership = [
    {
      name: "John Mitchell",
      role: "CEO & Founder",
      image: "https://readdy.ai/api/search-image?query=professional%20male%20CEO%20in%20business%20suit%2C%20confident%20executive%20portrait%2C%20modern%20office%20background%2C%20middle-aged%20with%20gray%20hair%2C%20professional%20headshot%20style%20with%20clean%20lighting&width=300&height=400&seq=leader1&orientation=portrait",
      bio: "20+ years in construction technology and project management. Previously led digital transformation at major construction firms."
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      image: "https://readdy.ai/api/search-image?query=professional%20female%20CTO%20in%20business%20attire%2C%20confident%20technology%20executive%2C%20modern%20office%20setting%2C%20professional%20headshot%20with%20clean%20lighting%2C%20engineering%20background&width=300&height=400&seq=leader2&orientation=portrait",
      bio: "Former senior architect at leading tech companies. Expert in scalable software solutions and construction industry automation."
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      image: "https://readdy.ai/api/search-image?query=professional%20male%20VP%20of%20Engineering%2C%20confident%20technology%20leader%20in%20business%20casual%20attire%2C%20modern%20office%20background%2C%20professional%20headshot%20style%20with%20clean%20lighting&width=300&height=400&seq=leader3&orientation=portrait",
      bio: "15+ years building enterprise software solutions. Specializes in cloud infrastructure and construction workflow optimization."
    },
    {
      name: "Emma Thompson",
      role: "Head of Customer Success",
      image: "https://readdy.ai/api/search-image?query=professional%20female%20customer%20success%20executive%2C%20confident%20business%20leader%20in%20professional%20attire%2C%20modern%20office%20setting%2C%20professional%20headshot%20with%20clean%20lighting&width=300&height=400&seq=leader4&orientation=portrait",
      bio: "Construction industry veteran with deep expertise in project management and client relationship building."
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "1vans was founded by construction industry veterans to solve real project management challenges."
    },
    {
      year: "2020",
      title: "First Product Launch",
      description: "Released our core project management platform with initial focus on commercial construction."
    },
    {
      year: "2021",
      title: "Mobile App Launch",
      description: "Launched mobile application enabling on-site project management and real-time updates."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $15M Series A to expand platform capabilities and team across engineering and sales."
    },
    {
      year: "2023",
      title: "Industry Expansion",
      description: "Extended platform to serve residential, infrastructure, and specialty construction sectors."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Serving 10,000+ construction professionals across 25 countries with continued growth."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in construction technology, creating solutions that anticipate and solve tomorrow's challenges.",
      icon: "ri-lightbulb-line"
    },
    {
      title: "Reliability",
      description: "Our platform is built to be dependable and robust, providing the stability and security that construction professionals need to manage critical projects.",
      icon: "ri-shield-check-line"
    },
    {
      title: "Collaboration",
      description: "We believe great projects are built by great teams. Our tools are designed to enhance communication and coordination among all project stakeholders.",
      icon: "ri-team-line"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20construction%20company%20team%20meeting%20in%20glass%20conference%20room%2C%20diverse%20group%20of%20professionals%20including%20engineers%2C%20architects%2C%20and%20project%20managers%2C%20collaborative%20workspace%20with%20blueprints%20and%20laptops%2C%20professional%20business%20environment&width=1920&height=600&seq=abouthero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mx-auto max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-pulse">
                1vans
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              We're revolutionizing construction project management with innovative technology that empowers teams to build better, faster, and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in-delay">
                To transform the construction industry through innovative technology that simplifies project management, 
                enhances collaboration, and drives successful project outcomes for construction professionals worldwide.
              </p>
              <p className="text-lg text-gray-600 animate-fade-in-delay">
                We believe that by providing intuitive, powerful tools, we can help construction teams focus on what 
                they do best: building the infrastructure and structures that shape our world.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in-delay">
                To be the global leader in construction project management software, empowering every construction 
                professional with the tools they need to deliver exceptional projects on time and within budget.
              </p>
              <p className="text-lg text-gray-600 animate-fade-in-delay">
                We envision a future where construction projects are seamlessly coordinated, fully transparent, 
                and consistently successful through the power of intelligent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">Our Core Values</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl text-center hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                  <i className={`${value.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">Leadership Team</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Meet the experienced professionals leading 1vans' mission to transform construction project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-md bg-white/80 border border-white/30 p-6 rounded-xl text-center hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-40 rounded-lg mx-auto mb-4 object-top hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold mb-2 text-black">{leader.name}</h3>
                <p className="text-black/70 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">Our Journey</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Key milestones in 1vans' growth and evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black/20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="backdrop-blur-md bg-white/80 border border-white/30 p-6 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
                      <div className="text-2xl font-bold text-black mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              1vans by the Numbers
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-delay">
              Our impact on the construction industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Active Users", delay: "delay-100" },
              { number: "2,500+", label: "Projects Managed", delay: "delay-200" },
              { number: "25", label: "Countries Served", delay: "delay-300" },
              { number: "$2.5B", label: "Project Value Managed", delay: "delay-400" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl transform transition-all duration-700 hover:scale-110 hover:bg-white/20 ${stat.delay}`}
              >
                <div className="text-4xl font-bold text-white mb-2 animate-bounce">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
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
              Join Our Growing Community
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of the 1vans family and transform how you manage construction projects.
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
                className="hover:scale-110 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
