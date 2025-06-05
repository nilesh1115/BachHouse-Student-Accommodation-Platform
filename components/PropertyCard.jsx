'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import { LocationIcon } from '@/assets/assets';
import { FiWifi, FiLock, FiDroplet, FiHome, FiUmbrella, FiCoffee, FiMonitor, FiTv } from 'react-icons/fi';

const amenityIcons = {
  'WiFi': <FiWifi className="mr-1.5" />,
  'AC': <FiDroplet className="mr-1.5" />,
  'Parking': <FiHome className="mr-1.5" />,
  'Meals': <FiCoffee className="mr-1.5" />,
  'TV': <FiTv className="mr-1.5" />,
  'Security': <FiLock className="mr-1.5" />,
  'Terrace': <FiUmbrella className="mr-1.5" />,
  'Cleaning': <FiDroplet className="mr-1.5" />,
  'Furnishing': <FiHome className="mr-1.5" />,
};

const PropertyCard = ({ property }) => {
  const router = useRouter();
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const isFavorite = favorites[property.id] || false;

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property.id);
    }
  };

  const handleViewDetails = () => {
    router.push(`/property/${property.id}`);
  };

  const getGenderBadge = () => {
    switch(property.gender) {
      case 'Male':
        return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' };
      case 'Female':
        return { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-200' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };
    }
  };

  const genderBadge = getGenderBadge();
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full cursor-pointer"
      onClick={handleViewDetails}
    >
      {/* Photo Card Section */}
      <div className="relative h-56 w-full p-3">
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <Image 
            src={property.image} 
            alt={property.title}
            fill
            className="object-cover"
            priority
          /> 

          {/* gender icon */}
          <div className={`absolute top-2 left-2 flex items-center ${genderBadge.bg} ${genderBadge.text} ${genderBadge.border} px-3 py-1 rounded-full text-xs font-medium border`}>
            {property.gender === 'Male' && '♂ '}
            {property.gender === 'Female' && '♀ '}
            {property.gender === 'Unisex' && '⚥ '}
            {property.gender}
          </div>

          <button // Favorite Button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white transition-all"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-400'}`}
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>   
        </div>
      </div>      

      <div className="px-4 pb-4 flex-grow flex flex-col">
        {/* Property Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 sm:text-lg">
          {property.title}
        </h3>
        
        {/* Rent and Distance - Now always side by side */}
        <div className="flex items-center justify-between mb-3">
          <div className="bg-blue-50 px-3 py-1 rounded-lg">
            <span className="text-blue-600 font-bold text-lg sm:text-base">₹{property.price.toLocaleString()}</span>
            <span className="text-blue-500 text-xs ml-1">/month</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Image src={LocationIcon} alt="Location" width={14} height={14} className="opacity-70" />
            <span className="ml-1 text-sm">
              <span className="sm:hidden">{property.distance} km</span>
              <span className="hidden sm:inline">{property.distance} km from center</span>
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <div 
                key={index} 
                className="flex items-center px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100"
              >
                {amenityIcons[amenity] || <FiHome className="mr-1.5" />}
                {amenity}
              </div>
            ))}
          </div>
        </div>   
        {/* Sticky View Button at Bottom */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <button 
            className="w-full bg-[#5e17eb] hover:bg-[#4a10d9] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 sm:text-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
          >
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );     
};

export default PropertyCard;