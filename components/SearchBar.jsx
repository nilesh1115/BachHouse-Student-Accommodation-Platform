'use client'
import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { FiSearch, FiMapPin, FiX } from 'react-icons/fi';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { updateFilters } = useAppContext();

  // Initialize search term from URL
  useEffect(() => {
    const location = searchParams.get('location');
    if (location) {
      setSearchTerm(location);
    }
  }, [searchParams]);

  const popularLocations = ['DIT Pimpri', 'DPU', 'Sant Tukaram Nagar', 'Pune Hinjewadi'];
  const allSuggestions = [
    ...popularLocations,
    "Pimpri",
  "near DPU Medical College",
  "near DIT College",
  "near DY Patil Enginnering College",
  "near YCM",
  "kharalwadi",
  "near Shani  chowk",
  "Nehru Nagar",
  "Sant Tukaram Nagar",
  "Vallabhnagar",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Update URL with new search term
      const params = new URLSearchParams(searchParams.toString());
      params.set('location', searchTerm.trim());
      router.push(`/all-properties?${params.toString()}`);

      // Update filters
      updateFilters({ 
        location: searchTerm.trim(),
        hasSearched: true
      });
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowSuggestions(false);
    
    // Clear URL parameter
    const params = new URLSearchParams(searchParams.toString());
    params.delete('location');
    router.push(`/all-properties?${params.toString()}`);

    // Update filters
    updateFilters({ 
      location: '',
      hasSearched: false
    });
  };

  const handleQuickSearch = (location) => {
    setSearchTerm(location);
    
    // Update URL with selected location
    const params = new URLSearchParams(searchParams.toString());
    params.set('location', location);
    router.push(`/all-properties?${params.toString()}`);

    // Update filters
    updateFilters({
      location,
      hasSearched: true
    });
    setShowSuggestions(false);
  };

  return (
    <div className="w-full px-4 sm:max-w-2xl sm:mx-auto sm:px-0">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center bg-white rounded-full shadow-sm border border-gray-200 hover:border-[#5e17eb] transition-colors duration-200">
          {/* Location Icon */}
          <div className="absolute left-3 text-gray-400">
            <FiMapPin size={20} />
          </div>
          
          {/* Search Input */}
          <input
            type="text"
            className="w-full py-3 pl-10 pr-10 text-gray-700 focus:outline-none rounded-full text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(e.target.value.trim().length > 0);
            }}
            onFocus={() => searchTerm.trim().length > 0 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            aria-label="Search properties by location"
          />
          
          {/* Custom placeholder implementation */}
          {!searchTerm && (
            <>
              {/* Mobile placeholder */}
              <span className="absolute pointer-events-none left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:hidden">
                Search area...
              </span>
              {/* Desktop placeholder */}
              <span className="absolute pointer-events-none left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm hidden sm:block">
                Enter college, area, or landmark...
              </span>
            </>
          )}
          
          {/* Clear Button */}
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <FiX size={18} />
            </button>
          )}
          
          {/* Search Button */}
          <button
            type="submit"
            className={`h-full px-4 rounded-r-full transition-colors duration-200 flex items-center ${
              searchTerm.trim()
                ? 'bg-white text-gray-400 hover:bg-white'
                : 'bg-white text-gray-400 cursor-not-allowed'
            }`}
            disabled={!searchTerm.trim()}
          >
            <FiSearch size={18} />
            <span className="sr-only">Search</span>
          </button>
        </div>
        
        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
            {allSuggestions
              .filter(suggestion => 
                suggestion.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer flex items-center"
                  onMouseDown={() => handleQuickSearch(suggestion)}
                >
                  <FiMapPin size={14} className="mr-2 text-gray-400" />
                  {suggestion}
                </div>
              ))
            }
          </div>
        )}
        
        {/* Location Quick Links */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {popularLocations.map((location) => (
            <button 
              key={location}
              type="button"
              onClick={() => handleQuickSearch(location)}
              className="text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors duration-200 flex items-center"
            >
              <FiMapPin size={12} className="mr-1" />
              {location}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;