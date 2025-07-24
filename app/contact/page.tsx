
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    subject: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          id: 'contact-form',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          subject: formData.subject
        }),
      });

      if (response.ok) {
        setSubmitStatus('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          subject: 'general'
        });
      } else {
        setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const faqs = [
    {
      question: "How quickly can we get started with 1vans?",
      answer: "Most teams can be up and running within 24 hours. We provide onboarding support and training to ensure a smooth transition."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we offer custom integrations with your existing tools and systems. Our API allows for seamless connectivity with popular construction software."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, dedicated account management, training resources, and a comprehensive knowledge base."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 30-day free trial with full access to all features so you can experience the platform before making a commitment."
    },
    {
      question: "How secure is our project data?",
      answer: "We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits to protect your data."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mx-auto max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              Get in Touch
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Ready to transform your construction projects? Our team is here to help you get started with 1vans.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl shadow-lg hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-3xl font-bold text-black mb-6 animate-fade-in">Send us a Message</h2>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in">
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    />
                  </div>
                  <div className="animate-fade-in-delay">
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in">
                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    />
                  </div>
                  <div className="animate-fade-in-delay">
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="animate-fade-in">
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-8 transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div className="animate-fade-in-delay">
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-300"
                    placeholder="Tell us about your project and how we can help..."
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full group hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <i className="ri-send-plane-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Button>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} animate-fade-in`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/80 border border-white/30 p-8 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
                <h2 className="text-3xl font-bold text-black mb-6 animate-fade-in">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start animate-fade-in">
                    <div className="w-12 h-12 bg-black/10 backdrop-blur-md rounded-lg flex items-center justify-center mr-4 hover:bg-black/20 transition-all duration-300">
                      <i className="ri-mail-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-black">Email</h3>
                      <p className="text-gray-600">support@1vans.com</p>
                      <p className="text-gray-600">sales@1vans.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-in-delay">
                    <div className="w-12 h-12 bg-black/10 backdrop-blur-md rounded-lg flex items-center justify-center mr-4 hover:bg-black/20 transition-all duration-300">
                      <i className="ri-phone-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-black">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-fade-in">
                    <div className="w-12 h-12 bg-black/10 backdrop-blur-md rounded-lg flex items-center justify-center mr-4 hover:bg-black/20 transition-all duration-300">
                      <i className="ri-map-pin-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-black">Address</h3>
                      <p className="text-gray-600">
                        123 Construction Ave<br/>
                        Suite 456<br/>
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="backdrop-blur-md bg-black/5 border border-black/10 p-6 rounded-lg hover:bg-black/10 transition-all duration-500 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <i className="ri-time-line text-black mr-2"></i>
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 animate-fade-in">Visit Our Office</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              We're located in the heart of New York City and welcome visitors by appointment.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg backdrop-blur-md bg-white/80 border border-white/30 p-4 hover:bg-white/90 transition-all duration-500 transform hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682118994812!2d-73.99892602346928!3d40.74844097138641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699564800000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4 animate-fade-in">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Quick answers to common questions about 1vans
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-md bg-white/80 border border-white/30 rounded-lg shadow-md hover:bg-white/90 transition-all duration-500 transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors rounded-lg"
                >
                  <span className="text-lg font-semibold text-black">{faq.question}</span>
                  <i className={`ri-${openFaq === index ? 'subtract' : 'add'}-line text-xl text-gray-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your construction projects. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 group hover:scale-110 transition-all duration-300"
              >
                Start Free Trial
                <i className="ri-rocket-line ml-2 group-hover:rotate-12 transition-transform duration-300"></i>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black group hover:scale-110 transition-all duration-300"
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
