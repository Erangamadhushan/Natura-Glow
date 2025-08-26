import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
    return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">GlowBeauty</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner in beauty, bringing you the finest cosmetics and skincare products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-rose-600 rounded-full hover:bg-rose-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-rose-600 rounded-full hover:bg-rose-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-rose-600 rounded-full hover:bg-rose-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Shop All', 'Skincare', 'Makeup', 'Gift Cards'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              {['Contact Us', 'Shipping Info', 'Returns', 'Size Guide', 'FAQ'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">hello@glowbeauty.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-rose-400" />
                <span className="text-gray-300">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GlowBeauty. All rights reserved. Made with ❤️ for beauty lovers.
          </p>
        </div>
      </div>
      <div className="text-center p-3">
            © 2023 Copyright:
            <p>Powered by EM956 Community 2025</p>
        </div>
    </footer>
  );
};


export default Footer;
// Compare this snippet from my-project/src/Components/Footer.jsx: