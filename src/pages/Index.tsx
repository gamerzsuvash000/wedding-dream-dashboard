
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import { Video, Users, DollarSign, UserCog, Image, BookImage } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  const dashboardItems = [
    {
      id: 'video',
      title: 'Video Edit Tracker',
      description: 'Track and manage all your wedding video editing projects in one place.',
      icon: Video,
      gradient: 'bg-gradient-to-r from-rose-400 to-red-500',
      delay: 0
    },
    {
      id: 'freelancer',
      title: 'Freelancer Management',
      description: 'Easily manage your network of wedding freelancers and their assignments.',
      icon: Users,
      gradient: 'bg-gradient-to-r from-amber-400 to-orange-500',
      delay: 100
    },
    {
      id: 'finance',
      title: 'Finance Management',
      description: 'Keep track of all financial aspects of your wedding projects.',
      icon: DollarSign,
      gradient: 'bg-gradient-to-r from-emerald-400 to-teal-500',
      delay: 200
    },
    {
      id: 'user',
      title: 'User Management',
      description: 'Manage clients, staff, and user permissions within your dashboard.',
      icon: UserCog,
      gradient: 'bg-gradient-to-r from-sky-400 to-blue-500',
      delay: 300
    },
    {
      id: 'photo',
      title: 'Photo Edit Tracker',
      description: 'Organize and track all your wedding photo editing projects.',
      icon: Image,
      gradient: 'bg-gradient-to-r from-violet-400 to-purple-500',
      delay: 400
    },
    {
      id: 'album',
      title: 'Album Selection',
      description: 'Create and manage beautiful wedding album selections for your clients.',
      icon: BookImage,
      gradient: 'bg-gradient-to-r from-pink-400 to-rose-500',
      delay: 500
    }
  ];

  const handleCardClick = (id: string, title: string) => {
    toast({
      title: `${title} Selected`,
      description: `You've selected the ${title} module. This feature will be available soon.`,
      duration: 3000,
    });
  };

  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      {/* Dashboard Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-wedding-pink/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4 animate-fade-in">
              Wedding Management Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Access all your wedding management tools with a single click
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardItems.map((item) => (
              <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${item.delay}ms` }}>
                <DashboardCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  gradient={item.gradient}
                  onClick={() => handleCardClick(item.id, item.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 px-4 bg-wedding-gold/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-12 animate-fade-in">
            What Our Clients Say
          </h2>
          
          <div className="glass-card p-8 md:p-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <p className="text-lg md:text-xl italic text-gray-700 mb-8">
              "Wedding Dreams has completely transformed how we manage our wedding photography business. 
              The dashboard is not only beautiful but incredibly intuitive. 
              We've increased our efficiency by 40% since implementing their system."
            </p>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-wedding-gold mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">Wedding Photographer, Eternal Moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
