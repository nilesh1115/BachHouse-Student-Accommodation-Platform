'use client'
import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiX, FiCheck, FiDollarSign, FiHome, FiUsers, FiMapPin, FiLayers, FiCalendar, FiFilter } from 'react-icons/fi';

const FilterPanel = ({ onClose, propertyCount }) => {
  const { filters, updateFilters } = useAppContext();
  const [expandedSection, setExpandedSection] = useState('price');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const accommodationTypes = ['PG', 'Apartment', 'Flat', 'Hostel', 'Villa', 'Studio', 'Penthouse'];
  const genderOptions = ['Male', 'Female', 'Unisex'];
  const sharingOptions = ['Private', 'Shared (2 beds)', 'Shared (3 beds)', 'Shared (4 beds)'];
  const furnishingOptions = ['Fully Furnished', 'Semi-Furnished', 'Basic', 'Luxury'];
  const amenitiesOptions = ['WiFi', 'AC', 'Parking', 'Laundry', 'Meals', 'Gym', 'Pool'];

  const handlePriceChange = (min, max) => {
    updateFilters({ minPrice: min, maxPrice: max });
  };

  const handleCheckboxChange = (name, value, checked) => {
    if (name === 'amenities') {
      const updatedAmenities = checked 
        ? [...filters.amenities, value]
        : filters.amenities.filter(item => item !== value);
      updateFilters({ amenities: updatedAmenities });
    } else {
      updateFilters({ [name]: checked ? value : null });
    }
  };

  const resetFilters = () => {
    updateFilters({
      gender: null,
      minPrice: 0,
      maxPrice: 100000,
      type: null,
      distance: 10,
      sharing: null,
      amenities: [],
      furnishing: null,
      availableFrom: null
    });
  };

  const FilterSection = ({ title, icon, sectionKey, children }) => (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <button
        className="flex justify-between items-center w-full py-3 focus:outline-none"
        onClick={() => toggleSection(sectionKey)}
      >
        <div className="flex items-center">
          <span className="text-gray-500 mr-3">{icon}</span>
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>
        {expandedSection === sectionKey ? (
          <FiChevronUp className="text-gray-400" />
        ) : (
          <FiChevronDown className="text-gray-400" />
        )}
      </button>
      {expandedSection === sectionKey && (
        <div className="pl-8 mt-2">
          {children}
        </div>
      )}
    </div>
  );

  const RangeSlider = ({ min, max, value, onChange, formatValue }) => (
    <div className="relative pt-6">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden lg:block">
      {/* Mobile header */}
      <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <FiFilter className="mr-2" /> Filters
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FiX size={24} />
        </button>
      </div>

      <div className="p-5 border-b border-gray-100 lg:border-b-0">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 lg:flex items-center hidden">
            <FiFilter className="mr-2" /> Filters
          </h2>
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            Reset All
          </button>
        </div>
      </div>

      <div className="p-5 max-h-[calc(100vh-200px)] lg:max-h-none overflow-y-auto">
        {/* Price Range Filter */}
        <FilterSection title="Price Range" icon={<FiDollarSign />} sectionKey="price">
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>₹{filters.minPrice.toLocaleString()}</span>
              <span>₹{filters.maxPrice.toLocaleString()}</span>
            </div>
            <RangeSlider
              min={0}
              max={100000}
              value={filters.maxPrice}
              onChange={(e) => handlePriceChange(filters.minPrice, parseInt(e.target.value))}
              formatValue={(val) => `₹${val.toLocaleString()}`}
            />
          </div>
        </FilterSection>

        {/* Accommodation Type */}
        <FilterSection title="Accommodation Type" icon={<FiHome />} sectionKey="type">
          <div className="space-y-2">
            {accommodationTypes.map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="radio"
                    name="type"
                    checked={filters.type === type}
                    onChange={() => handleCheckboxChange('type', type, filters.type !== type)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border ${filters.type === type ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                    {filters.type === type && (
                      <div className="absolute inset-0.5 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Gender */}
        <FilterSection title="Gender Preference" icon={<FiUsers />} sectionKey="gender">
          <div className="space-y-2">
            {genderOptions.map((gender) => (
              <label key={gender} className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="radio"
                    name="gender"
                    checked={filters.gender === gender}
                    onChange={() => handleCheckboxChange('gender', gender, filters.gender !== gender)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border ${filters.gender === gender ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                    {filters.gender === gender && (
                      <div className="absolute inset-0.5 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700">{gender}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Distance */}
        <FilterSection title="Distance" icon={<FiMapPin />} sectionKey="distance">
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>0 km</span>
              <span>{filters.distance} km</span>
            </div>
            <RangeSlider
              min={0}
              max={20}
              step={0.5}
              value={filters.distance}
              onChange={(e) => updateFilters({ distance: parseFloat(e.target.value) })}
            />
          </div>
        </FilterSection>

        {/* Room Sharing */}
        <FilterSection title="Room Sharing" icon={<FiUsers />} sectionKey="sharing">
          <div className="space-y-2">
            {sharingOptions.map((option) => (
              <label key={option} className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="radio"
                    name="sharing"
                    checked={filters.sharing === option}
                    onChange={() => handleCheckboxChange('sharing', option, filters.sharing !== option)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border ${filters.sharing === option ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                    {filters.sharing === option && (
                      <div className="absolute inset-0.5 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Amenities */}
        <FilterSection title="Amenities" icon={<FiLayers />} sectionKey="amenities">
          <div className="space-y-2">
            {amenitiesOptions.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="amenities"
                  checked={filters.amenities.includes(amenity)}
                  onChange={(e) => handleCheckboxChange('amenities', amenity, e.target.checked)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Furnishing */}
        <FilterSection title="Furnishing" icon={<FiHome />} sectionKey="furnishing">
          <div className="space-y-2">
            {furnishingOptions.map((option) => (
              <label key={option} className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="radio"
                    name="furnishing"
                    checked={filters.furnishing === option}
                    onChange={() => handleCheckboxChange('furnishing', option, filters.furnishing !== option)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border ${filters.furnishing === option ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                    {filters.furnishing === option && (
                      <div className="absolute inset-0.5 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Availability */}
        <FilterSection title="Availability" icon={<FiCalendar />} sectionKey="availability">
          <div className="space-y-2">
            <label className="block text-sm text-gray-700 mb-1">Available from:</label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={filters.availableFrom || ''}
                onChange={(e) => updateFilters({ availableFrom: e.target.value })}
              />
              {filters.availableFrom && (
                <button
                  onClick={() => updateFilters({ availableFrom: null })}
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>
          </div>
        </FilterSection>
      </div>

      {/* Mobile apply button */}
      <div className="lg:hidden p-4 border-t border-gray-100 bg-white sticky bottom-0">
        <button
          onClick={onClose}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;