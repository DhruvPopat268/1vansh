
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Industries() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    {
      title: "Commercial Construction",
      description: "Manage large-scale commercial projects with advanced scheduling, resource allocation, and progress tracking tools designed for complex builds.",
      icon: "ri-building-line",
      image: "https://readdy.ai/api/search-image?query=modern%20commercial%20construction%20site%20with%20office%20buildings%20and%20skyscrapers%20under%20construction%2C%20construction%20workers%20with%20hard%20hats%20and%20safety%20equipment%2C%20crane%20operations%2C%20professional%20construction%20environment%20with%20clean%20organized%20workspace&width=600&height=400&seq=commercial1&orientation=landscape",
      features: ["Multi-phase project management", "Cost tracking & budgeting", "Subcontractor coordination", "Safety compliance tracking"]
    },
    {
      title: "Residential Construction",
      description: "Streamline home building projects from foundation to finish with specialized tools for residential development and custom home construction.",
      icon: "ri-home-line",
      image: "https://readdy.ai/api/search-image?query=residential%20construction%20site%20with%20houses%20being%20built%2C%20construction%20workers%20installing%20roofing%20and%20siding%2C%20suburban%20neighborhood%20development%2C%20modern%20home%20construction%20with%20clean%20organized%20workspace%20and%20safety%20equipment&width=600&height=400&seq=residential1&orientation=landscape",
      features: ["Custom home workflows", "Material scheduling", "Quality inspections", "Homeowner communication"]
    },
    {
      title: "Civil Engineering",
      description: "Handle infrastructure projects including roads, bridges, and utilities with specialized project management tools for civil engineering workflows.",
      icon: "ri-road-line",
      image: "https://readdy.ai/api/search-image?query=civil%20engineering%20infrastructure%20project%20with%20road%20construction%2C%20bridge%20building%2C%20heavy%20machinery%20and%20equipment%2C%20engineers%20with%20hard%20hats%20reviewing%20blueprints%2C%20large%20scale%20infrastructure%20development&width=600&height=400&seq=civil1&orientation=landscape",
      features: ["Infrastructure planning", "Environmental compliance", "Public works management", "Permitting workflows"]
    },
    {
      title: "Architecture & Design",
      description: "Collaborate seamlessly from concept to completion with integrated design review, approval workflows, and construction documentation management.",
      icon: "ri-pencil-ruler-line",
      image: "https://readdy.ai/api/search-image?query=architects%20and%20designers%20working%20with%20blueprints%20and%203D%20models%2C%20modern%20architecture%20office%20with%20drafting%20tables%20and%20computer%20screens%2C%20professional%20team%20reviewing%20building%20plans%2C%20clean%20modern%20workspace&width=600&height=400&seq=architecture1&orientation=landscape",
      features: ["Design collaboration", "Drawing management", "Client approvals", "Construction documentation"]
    },
    {
      title: "Real Estate Development",
      description: "Oversee property development from land acquisition through construction completion with comprehensive project and portfolio management tools.",
      icon: "ri-building-2-line",
      image: "https://readdy.ai/api/search-image?query=real%20estate%20development%20project%20with%20multiple%20buildings%20under%20construction%2C%20property%20developers%20reviewing%20plans%2C%20mixed-use%20development%20with%20residential%20and%20commercial%20buildings%2C%20modern%20urban%20development&width=600&height=400&seq=realestate1&orientation=landscape",
      features: ["Portfolio management", "Financial tracking", "Timeline coordination", "Stakeholder reporting"]
    },
    {
      title: "Industrial Construction",
      description: "Manage complex industrial facilities including manufacturing plants, warehouses, and specialized industrial infrastructure projects.",
      icon: "ri-factory-line",
      image: "https://readdy.ai/api/search-image?query=industrial%20construction%20site%20with%20manufacturing%20facility%20being%20built%2C%20heavy%20industrial%20equipment%20and%20machinery%2C%20workers%20in%20safety%20gear%2C%20large%20scale%20industrial%20building%20construction%20with%20steel%20structures&width=600&height=400&seq=industrial1&orientation=landscape",
      features: ["Equipment coordination", "Safety protocols", "Specialized workflows", "Compliance management"]
    },
    {
      title: "Infrastructure Projects",
      description: "Coordinate large-scale infrastructure developments including transportation, utilities, and public works with advanced project controls.",
      icon: "ri-building-4-line",
      image: "https://readdy.ai/api/search-image?query=large%20scale%20infrastructure%20construction%20project%20with%20transportation%20systems%2C%20utility%20installations%2C%20public%20works%20construction%2C%20heavy%20machinery%20and%20equipment%2C%20workers%20in%20safety%20gear%20at%20major%20infrastructure%20site&width=600&height=400&seq=infrastructure1&orientation=landscape",
      features: ["Multi-agency coordination", "Regulatory compliance", "Public communication", "Environmental monitoring"]
    },
    {
      title: "Renovation & Remodeling",
      description: "Efficiently manage renovation projects with specialized tools for working in occupied spaces and coordinating with existing building systems.",
      icon: "ri-hammer-line",
      image: "https://readdy.ai/api/search-image?query=building%20renovation%20and%20remodeling%20project%20with%20workers%20updating%20interior%20spaces%2C%20construction%20team%20working%20on%20building%20improvements%2C%20renovation%20tools%20and%20equipment%2C%20professional%20remodeling%20workspace&width=600&height=400&seq=renovation1&orientation=landscape",
      features: ["Occupied space management", "Phased construction", "System integration", "Minimal disruption workflows"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=diverse%20construction%20and%20engineering%20industries%20montage%20showing%20commercial%20buildings%2C%20residential%20homes%2C%20industrial%20facilities%2C%20infrastructure%20projects%2C%20with%20construction%20workers%20and%20engineers%20collaborating%2C%20modern%20construction%20technology%20and%20equipment&width=1920&height=600&seq=industrieshero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mx-auto max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              Industries We Serve
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              1vans adapts to your industry's unique needs with specialized workflows, compliance tools, and industry-specific features.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
              Tailored Solutions for Every Construction Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Our comprehensive platform is designed to meet the specific requirements of different construction and engineering industries.
            </p>
          </div>

          <div className="grid gap-12">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                    <i className={`${industry.icon} text-3xl text-black hover:scale-110 transition-transform duration-300`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">{industry.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{industry.description}</p>
                  <div className="space-y-2 mb-8">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center animate-fade-in" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                        <i className="ri-check-line text-black mr-3 animate-bounce"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="group hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="backdrop-blur-md bg-white/80 border border-white/30 p-4 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
                    <img 
                      src={industry.image}
                      alt={industry.title}
                      className="w-full rounded-lg object-top hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Industry Impact
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in-delay">
              See how 1vans transforms construction projects across industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Commercial Projects", delay: "delay-100" },
              { number: "1,200+", label: "Residential Units", delay: "delay-200" },
              { number: "150+", label: "Infrastructure Projects", delay: "delay-300" },
              { number: "95%", label: "Client Satisfaction", delay: "delay-400" }
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
              Ready to Transform Your Industry Projects?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how 1vans can be customized for your specific industry needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="group hover:scale-110 transition-all duration-300"
              >
                Schedule Industry Demo
                <i className="ri-presentation-line ml-2 group-hover:rotate-12 transition-transform duration-300"></i>
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group hover:scale-110 transition-all duration-300"
                >
                  Contact Sales Team
                  <i className="ri-team-line ml-2 group-hover:bounce transition-transform duration-300"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
