'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

const PropertyCard = ({ property }) => {
  const router = useRouter();
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isFavorite = favorites[property._id] || false;
  const handleViewDetails = () => {
    router.push(`/property-details/${property._id}`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  // Format price to show only first 4 digits
  const formatPrice = (price) => {
    const priceStr = price?.toString() || '0';
    const numericPrice = priceStr.replace(/[^0-9]/g, '').slice(0, 4);
    return `₹${numericPrice}/m`;
  };

  // Get first 3 amenities and count remaining
  const getAmenities = (amenities) => {
    if (amenities.length <= 3) return amenities;
    return [...amenities.slice(0, 3), `+${amenities.length - 3}`];
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1 cursor-pointer">
      <div className="p-1 sm:p-2 relative">
        <div className="relative rounded-md sm:rounded-lg overflow-hidden">
          <div className="relative h-48 sm:h-56 md:h-64 w-full">
          <Image 
              src={property.images[currentImageIndex]}
            alt={property.title}
            fill
            className="object-cover"
            priority
          /> 

            {property.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>      

      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1 sm:mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-[#5e17eb] transition-colors">
            {property.title}
          </h3>
          <div className="bg-[#5e17eb]/10 px-3 py-1 rounded-full">
            <span className="text-base font-semibold text-[#5e17eb]">{formatPrice(property.price)}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-3 sm:mb-4">
          <div className="flex flex-col">
            <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-[#059669]" />
              <span className="text-xs sm:text-sm">{property.location}</span>
            </div>
            {property.distance && String(property.distance).trim() !== "0" && String(property.distance).trim() !== "" && (
              <span className="text-xs text-gray-600 mt-1 ml-4">{property.distance} from DIT college</span>
            )}
          </div>
          
          <div className="flex">
            <div className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              property.gender === "Male Only" ? "bg-blue-100 text-blue-800 hover:bg-blue-200" :
              property.gender === "Female Only" ? "bg-pink-100 text-pink-800 hover:bg-pink-200" :
              "bg-purple-100 text-purple-800 hover:bg-purple-200"
            }`}>
              <Users className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
              <span>{property.gender}</span>
            </div>
          </div>
        </div>

        {/* Amenities: display max 4 as badges below main info */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
            {property.amenities.slice(0, 4).map((amenity, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-0.5 text-xs border border-gray-300"
              >
                {amenity.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </span>
            ))}
            {property.amenities.length > 4 && (
              <span
                className="inline-block bg-gray-200 text-gray-600 rounded-full px-2 py-0.5 text-xs font-semibold border border-gray-300"
              >
                +{property.amenities.length - 4}
              </span>
            )}
          </div>
        )}

        <button 
          className="mt-auto w-full bg-[#5e17eb] hover:bg-[#4e13c7] text-white py-1.5 sm:py-2 rounded-md font-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base hover:shadow-md active:scale-95"
          onClick={handleViewDetails}
        >
          View Details
          <svg className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );     
};

export default PropertyCard;