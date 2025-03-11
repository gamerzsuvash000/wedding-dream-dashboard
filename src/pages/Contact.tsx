
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
      duration: 3000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-wedding-gold" />,
      title: "Email Us",
      details: "contact@weddingdreams.com",
      action: () => {
        toast({
          title: "Contact via Email",
          description: "You can reach us at contact@weddingdreams.com",
          duration: 3000,
        });
      }
    },
    {
      icon: <Phone className="h-6 w-6 text-wedding-gold" />,
      title: "Call Us",
      details: "+1 (123) 456-7890",
      action: () => {
        toast({
          title: "Contact via Phone",
          description: "You can call us at +1 (123) 456-7890",
          duration: 3000,
        });
      }
    },
    {
      icon: <MapPin className="h-6 w-6 text-wedding-gold" />,
      title: "Office Location",
      details: "1234 Wedding Ave, Suite 500, Beverly Hills, CA 90210",
      action: () => {
        toast({
          title: "Office Location",
          description: "Our office is located at 1234 Wedding Ave, Beverly Hills",
          duration: 3000,
        });
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our wedding management experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="col-span-1 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 h-full">
                <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-wedding-pink/10 transition-colors cursor-pointer"
                      onClick={item.action}
                    >
                      <div className="p-3 bg-wedding-pink/20 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="col-span-1 lg:col-span-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 lg:p-8">
                <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-wedding-gold to-wedding-mauve text-white py-3 px-6 rounded-lg hover:from-wedding-mauve hover:to-wedding-gold transition-all duration-300"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 lg:p-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What type of wedding professionals use your platform?",
                  answer: "Our platform is designed for photographers, videographers, planners, florists, DJs, and other wedding vendors who want to streamline their business operations."
                },
                {
                  question: "Do you offer a free trial?",
                  answer: "Yes, we offer a 14-day free trial for all our subscription plans. No credit card required to start."
                },
                {
                  question: "Can I cancel my subscription at any time?",
                  answer: "Absolutely! You can cancel your subscription at any time with no cancellation fees or hidden charges."
                },
                {
                  question: "Do you provide training for new users?",
                  answer: "Yes, we offer comprehensive onboarding, video tutorials, and live support to help you get started quickly."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-playfair font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
