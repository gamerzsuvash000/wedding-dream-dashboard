
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Search = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'videos', label: 'Videos' },
    { id: 'photos', label: 'Photos' },
    { id: 'clients', label: 'Clients' },
    { id: 'freelancers', label: 'Freelancers' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "Search Initiated",
        description: `Searching for "${searchTerm}" in ${activeFilter} category`,
        duration: 3000,
      });
    } else {
      toast({
        title: "Search Error",
        description: "Please enter a search term",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    toast({
      title: "Filter Changed",
      description: `Filter set to "${filters.find(f => f.id === filterId)?.label}"`,
      duration: 2000,
    });
  };

  return (
    <div className="glass-card p-6 w-full max-w-3xl mx-auto animate-fade-in">
      <form onSubmit={handleSearch}>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all duration-300 text-gray-700 placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-wedding-gold transition-colors"
          >
            <SearchIcon className="text-gray-400 hover:text-wedding-gold" size={20} />
          </button>
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </form>
      
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-wedding-gold text-white shadow-md'
                : 'bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-wedding-gold/30'
            }`}
            onClick={() => handleFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
