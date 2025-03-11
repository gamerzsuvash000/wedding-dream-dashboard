
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Clock, Award, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const teamMembers = [
    {
      name: "Emma Reynolds",
      role: "Founder & Creative Director",
      description: "With over 15 years in the wedding industry, Emma founded Wedding Dreams to revolutionize how wedding professionals manage their business."
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      description: "Michael brings 10+ years of software development experience to create intuitive tools that simplify the complex world of wedding management."
    },
    {
      name: "Sophia Martinez",
      role: "Client Relations Manager",
      description: "Sophia ensures every wedding professional using our platform receives personalized support and training for maximum success."
    },
    {
      name: "James Wilson",
      role: "Design Lead",
      description: "James crafts the beautiful interfaces that make Wedding Dreams both functional and aesthetically pleasing for wedding professionals."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-wedding-gold" />,
      title: "Passion",
      description: "We're passionate about helping wedding professionals succeed, bringing the same dedication to our work that you bring to your clients."
    },
    {
      icon: <Clock className="h-8 w-8 text-wedding-gold" />,
      title: "Reliability",
      description: "Just like your clients count on you for their big day, you can count on our tools to work flawlessly when you need them most."
    },
    {
      icon: <Award className="h-8 w-8 text-wedding-gold" />,
      title: "Excellence",
      description: "We strive for excellence in every feature we develop, ensuring wedding professionals have the best tools for their trade."
    },
    {
      icon: <Users className="h-8 w-8 text-wedding-gold" />,
      title: "Community",
      description: "We're building more than software - we're creating a community of wedding professionals who support and inspire each other."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Company Story */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The story behind Wedding Dreams and our mission
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                Wedding Dreams was born out of a simple observation: wedding professionals spend too much time on administrative tasks and not enough time doing what they love - creating magical moments for couples on their special day.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2018 by Emma Reynolds, a wedding photographer who experienced firsthand the challenges of managing a wedding business, our platform has grown to serve thousands of wedding professionals across the country.
              </p>
              <p className="text-gray-600">
                Our mission is to simplify the business side of weddings, providing elegant, intuitive tools that free up wedding professionals to focus on their craft and their clients, ultimately elevating the entire wedding industry.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-wedding-pink/20">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Our Team */}
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-24 h-24 bg-wedding-pink/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-playfair font-bold text-wedding-gold">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-gray-800 mb-1 text-center md:text-left">{member.name}</h3>
                    <p className="text-wedding-gold mb-3 text-center md:text-left">{member.role}</p>
                    <p className="text-gray-600 text-center md:text-left">{member.description}</p>
                  </div>
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

export default About;
