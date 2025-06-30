'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch, FiMapPin, FiHome, FiUsers, FiDollarSign } from 'react-icons/fi';
import PropertyCard from '@/components/PropertyCard';
import { useAppContext } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const locations = [
  'All Locations',
  'Koramangala',
  'Indiranagar',
  'HSR Layout',
  'Whitefield',
  'Electronic City',
  'Marathahalli',
  'Bellandur',
  'Sarjapur',
  'Jayanagar',
  'JP Nagar',
  'Bannerghatta',
  'BTM Layout',
  'Silk Board',
  'KR Puram'
];

const propertyTypes = [
  'All Types',
  'PG',
  'Apartment',
  'Villa',
  'Independent House',
  'Studio'
];

const genderOptions = [
  'All',
  'Male',
  'Female',
  'Co-living'
];

const rentRanges = [
  { label: 'All Ranges', min: 0, max: Infinity },
  { label: 'Under ₹10,000', min: 0, max: 10000 },
  { label: '₹10,000 - ₹15,000', min: 10000, max: 15000 },
  { label: '₹15,000 - ₹20,000', min: 15000, max: 20000 },
  { label: '₹20,000 - ₹25,000', min: 20000, max: 25000 },
  { label: 'Above ₹25,000', min: 25000, max: Infinity }
];

export default function PropertiesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { properties, loading, error, updateFilters } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedRentRange, setSelectedRentRange] = useState(rentRanges[0]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    // Get initial filters from URL params
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const gender = searchParams.get('gender');
    const minRent = searchParams.get('minRent');
    const maxRent = searchParams.get('maxRent');
    const search = searchParams.get('search');

    if (location) {
      setSelectedLocation(location);
      setSearchQuery(location);
      updateFilters({ location, hasSearched: true });
    }
    if (type) {
      setSelectedType(type);
      updateFilters({ type });
    }
    if (gender) {
      setSelectedGender(gender);
      updateFilters({ gender });
    }
    if (minRent && maxRent) {
      const range = rentRanges.find(r => r.min === parseInt(minRent) && r.max === parseInt(maxRent));
      if (range) {
        setSelectedRentRange(range);
        updateFilters({ minPrice: range.min, maxPrice: range.max });
      }
    }
    if (search) {
      setSearchQuery(search);
      updateFilters({ location: search, hasSearched: true });
    }
  }, [searchParams, updateFilters]);

  useEffect(() => {
    if (!properties) return;

    let filtered = [...properties];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(property => 
        property.name.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query)
      );
    }

    // Apply location filter - FIXED: Use partial matching instead of exact matching
    if (selectedLocation !== 'All Locations') {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Apply property type filter
    if (selectedType !== 'All Types') {
      filtered = filtered.filter(property => 
        property.type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Apply gender filter
    if (selectedGender !== 'All') {
      filtered = filtered.filter(property => 
        property.gender.toLowerCase() === selectedGender.toLowerCase()
      );
    }

    // Apply rent range filter
    if (selectedRentRange.min !== 0 || selectedRentRange.max !== Infinity) {
      filtered = filtered.filter(property => 
        property.rent >= selectedRentRange.min && 
        property.rent <= selectedRentRange.max
      );
    }

    setFilteredProperties(filtered);
  }, [properties, searchQuery, selectedLocation, selectedType, selectedGender, selectedRentRange]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedLocation !== 'All Locations') params.set('location', selectedLocation);
    if (selectedType !== 'All Types') params.set('type', selectedType);
    if (selectedGender !== 'All') params.set('gender', selectedGender);
    if (selectedRentRange.min !== 0) params.set('minRent', selectedRentRange.min);
    if (selectedRentRange.max !== Infinity) params.set('maxRent', selectedRentRange.max);
    router.push(`/properties?${params.toString()}`);
  };

  const handleFilterChange = (type, value) => {
    switch (type) {
      case 'location':
        setSelectedLocation(value);
        updateFilters({ location: value });
        break;
      case 'type':
        setSelectedType(value);
        updateFilters({ type: value });
        break;
      case 'gender':
        setSelectedGender(value);
        updateFilters({ gender: value });
        break;
      case 'rent':
        setSelectedRentRange(value);
        updateFilters({ minPrice: value.min, maxPrice: value.max });
        break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-red-500">Error loading properties: {error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Search Section */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by location..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <select
                  value={selectedLocation}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedGender}
                  onChange={(e) => handleFilterChange('gender', e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {genderOptions.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedRentRange.label}
                  onChange={(e) => {
                    const range = rentRanges.find(r => r.label === e.target.value);
                    handleFilterChange('rent', range);
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {rentRanges.map((range) => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 