
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CalendarDays, ChevronRight, User, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tips', name: 'Wedding Tips' },
    { id: 'trends', name: 'Industry Trends' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business Growth' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tools Every Wedding Photographer Needs",
      excerpt: "Discover the must-have tools that will elevate your wedding photography business and help you deliver exceptional service to your clients.",
      category: "tips",
      author: "Emma Reynolds",
      date: "June 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "How AI is Transforming Wedding Video Editing",
      excerpt: "Explore how artificial intelligence is revolutionizing the wedding video editing process, saving time while creating stunning results.",
      category: "technology",
      author: "Michael Chen",
      date: "May 22, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1496285416008-7b7b55fcc41c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Wedding Color Trends for the Upcoming Season",
      excerpt: "Stay ahead of the curve with our comprehensive guide to the hottest wedding color palettes and themes for the next season.",
      category: "trends",
      author: "Sophia Martinez",
      date: "April 10, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1528975604071-b4dc52fe3d35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Scaling Your Wedding Planning Business: From Solo to Studio",
      excerpt: "Learn effective strategies for growing your wedding planning business from a one-person operation to a thriving studio with multiple planners.",
      category: "business",
      author: "James Wilson",
      date: "March 5, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Client Communication Strategies That Boost Satisfaction",
      excerpt: "Discover proven communication techniques that will enhance client satisfaction and lead to more referrals for your wedding business.",
      category: "tips",
      author: "Emma Reynolds",
      date: "February 18, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "The Rise of Sustainable Weddings: What Professionals Need to Know",
      excerpt: "Explore the growing trend of eco-conscious weddings and how wedding professionals can adapt their services to meet this increasing demand.",
      category: "trends",
      author: "Sophia Martinez",
      date: "January 30, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1541265307330-55d34396957b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handlePostClick = (postId: number) => {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      toast({
        title: "Blog Post Selected",
        description: `You selected "${post.title}". Full article coming soon.`,
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tips and trends for wedding professionals
            </p>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-wedding-gold text-white shadow-md'
                    : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-wedding-gold/30'
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {filteredPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-wedding-pink/30 text-wedding-gold">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User size={14} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <CalendarDays size={14} className="mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="flex items-center text-wedding-gold hover:text-wedding-mauve transition-colors">
                    <span className="mr-1">Read more</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="bg-gradient-to-r from-wedding-pink/30 to-wedding-champagne/30 backdrop-blur-sm rounded-xl shadow-lg p-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">Stay updated with the latest wedding industry insights, tips, and trends delivered directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg bg-white/80 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                />
                <button 
                  className="bg-gradient-to-r from-wedding-gold to-wedding-mauve text-white py-3 px-6 rounded-lg hover:from-wedding-mauve hover:to-wedding-gold transition-all duration-300"
                  onClick={() => toast({
                    title: "Newsletter Subscription",
                    description: "Thank you for subscribing to our newsletter!",
                    duration: 3000,
                  })}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
