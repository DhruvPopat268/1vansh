
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small construction teams and individual contractors",
      monthlyPrice: 29,
      annualPrice: 25,
      features: [
        "Up to 5 team members",
        "10 active projects",
        "Basic project templates",
        "Mobile app access",
        "Email support",
        "Basic reporting",
        "File storage (5GB)",
        "Task management"
      ],
      popular: false,
      ctaText: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Ideal for growing construction companies and project managers",
      monthlyPrice: 79,
      annualPrice: 69,
      features: [
        "Up to 25 team members",
        "Unlimited projects",
        "Advanced project templates",
        "Mobile app access",
        "Priority support",
        "Advanced reporting & analytics",
        "File storage (50GB)",
        "Custom workflows",
        "Time tracking",
        "Budget management",
        "Integration with popular tools"
      ],
      popular: true,
      ctaText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large construction firms with complex project needs",
      monthlyPrice: 149,
      annualPrice: 129,
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Custom project templates",
        "Mobile app access",
        "24/7 dedicated support",
        "Advanced analytics & insights",
        "Unlimited file storage",
        "Custom integrations",
        "Advanced security features",
        "Multi-project dashboards",
        "API access",
        "Custom training",
        "Dedicated account manager"
      ],
      popular: false,
      ctaText: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 30-day free trial for all plans with full access to features. No credit card required to start your trial."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or we'll work with you to find a solution that fits your needs."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, annual billing provides significant savings - up to 20% off compared to monthly billing. The discount is automatically applied when you choose annual billing."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and we'll help you export your data if needed."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we work with large enterprises to create custom solutions that fit their specific needs, including custom integrations, dedicated infrastructure, and specialized support."
    },
    {
      question: "What kind of support is included?",
      answer: "All plans include comprehensive support. Starter plans get email support, Professional plans get priority support, and Enterprise plans get 24/7 dedicated support with a dedicated account manager."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mx-auto max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              Simple, Transparent Pricing
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Choose the perfect plan for your construction team. Start with a free trial and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="backdrop-blur-md bg-black/5 border border-black/10 p-1 rounded-lg animate-fade-in">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap ${
                  billingCycle === 'monthly' 
                    ? 'bg-black text-white shadow-sm scale-105' 
                    : 'text-black hover:text-black/70 hover:scale-105'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap ${
                  billingCycle === 'annual' 
                    ? 'bg-black text-white shadow-sm scale-105' 
                    : 'text-black hover:text-black/70 hover:scale-105'
                }`}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-md bg-white/80 border border-white/30 rounded-xl shadow-lg p-8 relative hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in ${
                  plan.popular ? 'ring-2 ring-black/20' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-black">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-lg text-gray-600 ml-1">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-black/70 mt-2 animate-bounce">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center animate-fade-in" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                      <i className="ri-check-line text-black mr-3 animate-bounce"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full group hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'bg-black text-white hover:bg-gray-800' : ''
                  }`}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                >
                  {plan.ctaText}
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Advanced capabilities for large construction organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "ri-shield-check-line", title: "Advanced Security", description: "SOC 2 compliance, SSO, and advanced access controls" },
              { icon: "ri-api-line", title: "API Access", description: "Full API access for custom integrations and workflows" },
              { icon: "ri-user-settings-line", title: "Dedicated Support", description: "24/7 support with dedicated account manager" },
              { icon: "ri-settings-line", title: "Custom Setup", description: "Tailored implementation and training for your team" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center backdrop-blur-md bg-white/80 border border-white/30 p-6 rounded-xl hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
                  <i className={`${feature.icon} text-2xl text-black hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Everything you need to know about 1vans pricing
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

      {/* Money Back Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-black/5 border border-black/10 rounded-2xl p-12 transform transition-all duration-500 hover:scale-105">
            <div className="w-24 h-24 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-black/20 transition-all duration-300 hover:rotate-12">
              <i className="ri-medal-line text-4xl text-black animate-bounce"></i>
            </div>
            <h2 className="text-4xl font-bold text-black mb-4 animate-pulse">
              30-Day Money Back Guarantee
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Try 1vans risk-free for 30 days. If you're not completely satisfied, we'll refund your money, no questions asked.
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
                Talk to Sales
                <i className="ri-phone-line ml-2 group-hover:bounce transition-transform duration-300"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">
              Ready to Transform Your Construction Projects?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of construction professionals who have streamlined their workflows with 1vans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 group hover:scale-110 transition-all duration-300"
              >
                Start Free 30-Day Trial
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
