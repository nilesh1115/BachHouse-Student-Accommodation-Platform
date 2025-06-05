'use client';
export const dynamic = 'force-dynamic';

import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAppContext } from '@/context/AppContext';
import PropertyCard from '@/components/PropertyCard';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { FiFilter } from 'react-icons/fi';

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
  }, [locationQuery, filters.location, updateFilters]); 

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
          <SearchBar onSearch={handleQuickSearch} />
        </div>
        
        {filters.hasSearched && (
          <div className="mb-6 space-y-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FiFilter /> Filters
            </button>
            <h2 className="text-lg font-semibold text-gray-700 sm:text-left text-sm sm:text-lg">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </h2>
          </div>
        )}
        
        {filters.hasSearched ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
              <div className="sticky top-4">
                <FilterPanel onClose={() => setShowMobileFilters(false)} />
              </div>
            </div>
            
            <div className="lg:w-3/4">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  {filteredProperties.length === 0 ? (
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <h3 className="text-xl font-medium text-gray-700 mb-2">No listings found in this area</h3>
                      <p className="text-gray-600">Try adjusting your search filters</p>
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
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Search for properties</h3>
            <p className="text-gray-600">Enter a location to begin your search</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PropertiesContent />
    </Suspense>
  );
}