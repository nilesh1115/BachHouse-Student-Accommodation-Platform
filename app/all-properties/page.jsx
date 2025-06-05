'use client';
import { useAppContext } from '@/context/AppContext';
import PropertyCard from '@/components/PropertyCard';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { FiFilter } from 'react-icons/fi';

// Wrap the main content in a separate component
function PropertiesContent() {
  const { 
    filteredProperties, 
    loading, 
    updateFilters, 
    filters
  } = useAppContext();
  const searchParams = useSearchParams();
  const locationQuery = searchParams.get('location');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    if (locationQuery && locationQuery !== filters.location) {
      updateFilters({ 
        location: locationQuery,
        hasSearched: true
      });
    }
  }, [locationQuery]); 

  const handleQuickSearch = (location) => {
    updateFilters({ 
      location,
      hasSearched: true
    });
    window.history.pushState({}, '', `/all-properties?location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4">
          <SearchBar />
        </div>
        
        {/* Mobile Filter Button and Property Count */}
        {filters.hasSearched && (
          <div className=" mb-6 space-y-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FiFilter /> Filters
            </button>
            <h2 className="text-lg font-semibold text-gray-700 sm:text-left  text-sm sm:text-lg">
              {filteredProperties.length} Properties Found
            </h2>
          </div>
        )}
        
        {filters.hasSearched ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Panel - Left Side */}
            <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
              <div className="sticky top-4">
                <FilterPanel onClose={() => setShowMobileFilters(false)} />
              </div>
            </div>
            
            {/* Property Listings - Right Side */}
            <div className="lg:w-3/4">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  {filteredProperties.length === 0 ? (
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <h3 className="text-xl font-medium text-gray-700 mb-2">Oops! We don't have listings in this area yet</h3>
                      <p className="text-gray-600">But we're expanding soon — stay tuned!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="">
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

// Main page component with Suspense boundary
export default function PropertiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}