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
import { ArrowUpDown } from "lucide-react";
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
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

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

  const handleSort = (order) => {
    setSortOrder(order);
    setShowSortDropdown(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div
        className="sticky top-16 z-30 bg-white border-b border-gray-200 w-full px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex-1 min-w-0">
          <SearchBar onSearch={handleQuickSearch} />
        </div>
        {filters.hasSearched && (
          <div className="flex flex-row gap-2 w-full mt-2 sm:mt-0 sm:w-auto lg:hidden">
            {/* Sort By Button */}
            <div className="relative flex-1">
              <button
                onClick={() => setShowSortDropdown((v) => !v)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                style={{ minWidth: 120 }}
              >
               <ArrowUpDown className="w-4 h-4"/> Sort By 
              </button>
              {showSortDropdown && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg text-gray-600 shadow-lg z-40">
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${sortOrder === 'lowToHigh' ? 'font-semibold text-blue-600' : ''}`}
                    onClick={() => handleSort('lowToHigh')}
                  >
                    Price: Low to High
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${sortOrder === 'highToLow' ? 'font-semibold text-blue-600' : ''}`}
                    onClick={() => handleSort('highToLow')}
                  >
                    Price: High to Low
                  </button>
                </div>
              )}
            </div>
            {/* Filters Button */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              style={{ minWidth: 120 }}
            >
              <FiFilter /> Filters
            </button>
          </div>
        )}
      </div>
      {/* End Sticky Bar */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Property Count and Filters (desktop) */}
        {filters.hasSearched && (
          <div className="mb-6 space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 sm:text-left text-sm sm:text-lg">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </h2>
          </div>
        )}
        
        {filters.hasSearched ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
              <div className="lg:sticky lg:top-[76px]">
                <FilterPanel onClose={() => setShowMobileFilters(false)} />
              </div>
            </div>
            
            <div className="lg:w-3/4">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <LoadingSpinner />
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