
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform: string) => {
    toast({
      title: `${platform} Clicked`,
      description: `You've clicked on our ${platform} profile. This link will be available soon.`,
      duration: 3000,
    });
  };

  const handleContactClick = (method: string, value: string) => {
    toast({
      title: `Contact via ${method}`,
      description: `You've selected to contact us via ${method}: ${value}`,
      duration: 3000,
    });
  };

  return (
    <footer className="bg-gradient-to-r from-wedding-pink/30 to-wedding-champagne/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800">Wedding Dreams</h3>
            <p className="text-sm text-gray-600 mb-4">
              Elevating your wedding management experience with elegant solutions
            </p>
            <div className="flex space-x-4">
              <button 
                className="text-gray-500 hover:text-wedding-gold transition-colors"
                onClick={() => handleSocialClick('Facebook')}
              >
                <Facebook size={20} />
              </button>
              <button 
                className="text-gray-500 hover:text-wedding-gold transition-colors"
                onClick={() => handleSocialClick('Instagram')}
              >
                <Instagram size={20} />
              </button>
              <button 
                className="text-gray-500 hover:text-wedding-gold transition-colors"
                onClick={() => handleSocialClick('Twitter')}
              >
                <Twitter size={20} />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-600 hover:text-wedding-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-gray-800">Services</h4>
            <ul className="space-y-2">
              {['Video Editing', 'Photo Editing', 'Album Design', 'Client Management', 'Financial Tracking'].map((item) => (
                <li key={item}>
                  <button 
                    className="text-sm text-gray-600 hover:text-wedding-gold transition-colors text-left"
                    onClick={() => toast({
                      title: `${item} Service`,
                      description: `You've selected our ${item} service. More details will be available soon.`,
                      duration: 3000,
                    })}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-gray-800">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="text-wedding-gold mr-2" />
                <button 
                  className="text-sm text-gray-600 hover:text-wedding-gold transition-colors text-left"
                  onClick={() => handleContactClick('Email', 'contact@weddingdreams.com')}
                >
                  contact@weddingdreams.com
                </button>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-wedding-gold mr-2" />
                <button 
                  className="text-sm text-gray-600 hover:text-wedding-gold transition-colors text-left"
                  onClick={() => handleContactClick('Phone', '+1 (123) 456-7890')}
                >
                  +1 (123) 456-7890
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Wedding Dreams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
