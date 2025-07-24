
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Industries', href: '/industries' },
      { name: 'Mobile App', href: '/features' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'ri-twitter-x-fill' },
    { name: 'LinkedIn', href: '#', icon: 'ri-linkedin-fill' },
    { name: 'GitHub', href: '#', icon: 'ri-github-fill' },
    { name: 'YouTube', href: '#', icon: 'ri-youtube-fill' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="group">
                <div className="text-3xl font-bold text-white transform transition-all duration-300 group-hover:scale-110">
                  <span style={{ fontFamily: '"Pacifico", serif' }} className="group-hover:text-gray-300">
                    1vans
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionary construction project management platform that empowers engineers and administrators with cutting-edge mobile and web solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-white hover:scale-110 transition-transform duration-300`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm animate-fade-in">
              © {currentYear} 1vans. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400 text-sm animate-fade-in">
                <i className="ri-shield-check-line text-green-400"></i>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm animate-fade-in">
                <i className="ri-lock-line text-blue-400"></i>
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm animate-fade-in">
                <i className="ri-cloud-line text-purple-400"></i>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
