
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const features = [
    {
      icon: "ri-smartphone-line",
      title: "Mobile App Features",
      description: "Secure engineer login, project management, daily reports, and real-time updates on the go."
    },
    {
      icon: "ri-dashboard-line",
      title: "Admin Panel",
      description: "Comprehensive dashboard with weather updates, analytics, project management, and team oversight."
    },
    {
      icon: "ri-shield-check-line",
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access control and complete audit trails."
    }
  ];

  const testimonials = [
    {
      quote: "1vans has completely transformed how we manage our construction projects. The mobile app is incredibly intuitive and the real-time reporting saves us hours every day.",
      author: "Sarah Johnson",
      role: "Project Manager",
      company: "BuildCorp Solutions"
    },
    {
      quote: "The admin dashboard gives us complete visibility into all our projects. We can track progress, manage resources, and make data-driven decisions instantly.",
      author: "Michael Chen",
      role: "Construction Director",
      company: "Urban Development Ltd"
    },
    {
      quote: "Implementation was seamless and the support team was fantastic. Our productivity has increased by 40% since switching to 1vans.",
      author: "Emma Rodriguez",
      role: "Operations Manager",
      company: "Metro Construction"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", delay: "delay-100" },
    { number: "2,500+", label: "Projects Managed", delay: "delay-200" },
    { number: "25", label: "Countries Served", delay: "delay-300" },
    { number: "$2.5B", label: "Project Value", delay: "delay-400" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20construction%20site%20with%20glass%20building%20facade%2C%20minimalist%20architecture%2C%20black%20and%20white%20design%20elements%2C%20professional%20workers%20with%20tablets%20and%20safety%20equipment%2C%20clean%20geometric%20lines%20and%20contemporary%20urban%20environment&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Build Smarter with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-pulse">
                  1vans
                </span>
              </h1>
              <p className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Revolutionary construction project management platform that empowers engineers and administrators with cutting-edge mobile and web solutions.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Button 
                  size="lg" 
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  Start Free Trial
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Button>
                <Link href="/features">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
              Why Choose 1vans?
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Comprehensive construction management solutions designed for modern teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group backdrop-blur-md bg-white/60 border border-white/30 p-8 rounded-xl hover:bg-white/80 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  activeFeature === index ? 'ring-2 ring-black/20 shadow-2xl' : ''
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black/20 transition-all duration-300 group-hover:rotate-12">
                  <i className={`${feature.icon} text-3xl text-black group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black group-hover:text-black transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">
              See how 1vans is transforming construction worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl transform transition-all duration-700 hover:scale-110 hover:bg-white/10 ${stat.delay}`}
              >
                <div className="text-4xl font-bold text-white mb-2 animate-bounce">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from construction professionals using 1vans
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="backdrop-blur-md bg-white/60 border border-white/30 p-8 rounded-xl text-center transform transition-all duration-500 hover:scale-105">
                      <i className="ri-double-quotes-l text-4xl text-black/20 mb-4"></i>
                      <p className="text-lg text-gray-700 mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center space-x-4">
                        <div>
                          <p className="font-semibold text-black">{testimonial.author}</p>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-black/5 border border-black/10 rounded-2xl p-12 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-bold text-black mb-4 animate-pulse">
              Ready to Transform Your Construction Projects?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of construction professionals who trust 1vans to deliver exceptional project outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="group hover:scale-110 transition-all duration-300"
              >
                Start Free Trial
                <i className="ri-rocket-line ml-2 group-hover:rotate-12 transition-transform duration-300"></i>
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:scale-110 transition-all duration-300"
                >
                  Schedule Demo
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
