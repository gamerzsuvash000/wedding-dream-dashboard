
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Clock, GraduationCap, FileVideo, Image, Palette, Users } from 'lucide-react';

const Services = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const services = [
    {
      icon: <FileVideo className="h-8 w-8 text-wedding-gold" />,
      title: "Video Editing",
      description: "Professional video editing services for wedding ceremonies and receptions. We create cinematic experiences that capture every special moment.",
      features: ["4K resolution", "Color grading", "Audio enhancement", "Custom effects"]
    },
    {
      icon: <Image className="h-8 w-8 text-wedding-gold" />,
      title: "Photo Editing",
      description: "Transform your wedding photos with our professional editing services. We enhance colors, remove imperfections, and create stunning visual stories.",
      features: ["Portrait retouching", "Color correction", "Background enhancement", "Custom presets"]
    },
    {
      icon: <Palette className="h-8 w-8 text-wedding-gold" />,
      title: "Album Design",
      description: "Create beautiful, custom wedding albums that tell your unique love story. Our designers craft elegant layouts that showcase your special moments.",
      features: ["Custom layouts", "Premium printing", "Digital copies", "Revision rounds"]
    },
    {
      icon: <Users className="h-8 w-8 text-wedding-gold" />,
      title: "Client Management",
      description: "Streamlined client management tools for wedding professionals. Keep track of all your clients, communications, and project timelines in one place.",
      features: ["Client portals", "Communication tools", "Document sharing", "Feedback system"]
    },
    {
      icon: <Clock className="h-8 w-8 text-wedding-gold" />,
      title: "Timeline Management",
      description: "Stay organized with our comprehensive timeline management tools. Plan every detail of your wedding projects from start to finish.",
      features: ["Gantt charts", "Task assignment", "Deadline tracking", "Automated reminders"]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-wedding-gold" />,
      title: "Wedding Professional Training",
      description: "Enhance your skills with our specialized training programs for wedding professionals. Learn the latest techniques and industry best practices.",
      features: ["Video courses", "Live workshops", "Personal mentoring", "Industry certification"]
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    toast({
      title: `${serviceName} Selected`,
      description: `You've selected our ${serviceName} service. More details will be sent to your email.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive wedding management solutions tailored for professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleServiceClick(service.title)}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-wedding-pink/20 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-wedding-gold mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-2 flex items-center justify-center space-x-2 bg-gradient-to-r from-wedding-gold to-wedding-mauve text-white py-2 px-4 rounded-lg hover:from-wedding-mauve hover:to-wedding-gold transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
