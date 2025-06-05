'use client';
import Image from "next/image";
import { bgimg } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { useAppContext } from "@/context/AppContext";

export default function HeroSection() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const { updateFilters } = useAppContext();

useEffect(() => {
  setIsMounted(true);
}, []);

const [showSuggestions, setShowSuggestions] = useState(false);
const [suggestions] = useState([
  "Pimpri",
  "DPU",
  "Pune Hinjewadi",
  "Nehru Nagar",
  "Sant Tukaram Nagar",
  "Akurdi",
  "Pune",
]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/all-properties?location=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
{/* Handle search on Enter key press */}
  if (!isMounted) {
    return (
      <section className="relative h-[500px] md:h-[600px] w-full">
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-left">
              <form className="w-full max-w-2xl">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FiMapPin className="text-gray-400 text-lg md:text-xl" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by college, area or landmark..."
                    className="w-full py-3 pl-12 pr-28 md:pr-32 text-gray-800 rounded-3xl border-0 focus:ring-2 focus:ring-[#5e17eb] focus:outline-none shadow-lg text-sm md:text-base"
                    defaultValue=""
                    readOnly
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
{/* Render the hero section with the search bar and background image */}
  return (
    <section className="relative h-[500px] md:h-[600px] w-full">
      <Image
        src={bgimg}
        alt="Student accommodation near college"
        fill
        className="object-cover brightness-[0.85]"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              <span className="block">Find Your Perfect Stay with</span>
              <span className="block mt-1 md:mt-2">BachHouse!</span>
            </h1>
            <p className="text-sm md:text-lg text-white/90 mb-6 md:mb-8">
              Rooms, PGs, and Flats — made easy for every bachelor!
            </p>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="w-full max-w-2xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4 pointer-events-none">
                  <FiMapPin className="text-red-500 text-lg md:text-xl" />
                </div>
                <input
                  type="text"
                  placeholder={typeof window !== 'undefined' && window.innerWidth < 768 ? "Search location..." : "Search by college, area or landmark..."}
                  className="w-full py-2 md:py-3 pl-10 md:pl-12 pr-24 md:pr-32 text-gray-800 bg-white rounded-3xl border-0 focus:ring-2 focus:ring-[#5e17eb] focus:outline-none shadow-lg text-sm md:text-base"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(e.target.value.trim().length > 0);
                  }}
                  onFocus={() => searchTerm.trim().length > 0 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <button
                  type="submit"
                  className={`absolute right-1 top-1/2 -translate-y-1/2 h-[80%] aspect-square md:aspect-auto md:h-[calc(100%-8px)] px-0 md:px-6 text-white rounded-full md:rounded-3xl flex items-center justify-center md:justify-start transition-colors ${
                    searchTerm.trim() 
                      ? 'bg-[#5e17eb] hover:bg-[#4a10d9]' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!searchTerm.trim()}
                >
                  <FiSearch className="text-base md:text-lg" />
                  <span className="hidden md:inline ml-2">Search</span>
                </button>
                
                {/* Suggestions dropdown */}
                {showSuggestions && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
                    {suggestions
                      .filter(suggestion => 
                        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                          onMouseDown={() => {
                            setSearchTerm(suggestion);
                            setShowSuggestions(false);
                          }}
                        >
                          <FiMapPin size={14} className="mr-2 text-gray-400" />
                          <span className="text-gray-500">{suggestion}</span>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}