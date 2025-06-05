'use client'
import { useParams, useRouter } from 'next/navigation'
import { useAppContext } from '@/context/AppContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { 
  FiWifi, FiLock, FiDroplet, FiHome, FiUmbrella, 
  FiCoffee, FiMonitor, FiTv, FiPhone, FiMapPin, 
  FiChevronLeft, FiChevronRight, FiNavigation, FiArrowLeft
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { WhatsAppIcon, LocationIcon } from '@/assets/assets'
import PropertyCard from '@/components/PropertyCard' // Import the PropertyCard component

const amenityIcons = {
  'WiFi': <FiWifi className="mr-1.5" size={16} />,
  'AC': <FiDroplet className="mr-1.5" size={16} />,
  'Parking': <FiHome className="mr-1.5" size={16} />,
  'Meals': <FiCoffee className="mr-1.5" size={16} />,
  'TV': <FiTv className="mr-1.5" size={16} />,
  'Security': <FiLock className="mr-1.5" size={16} />,
  'Terrace': <FiUmbrella className="mr-1.5" size={16} />,
  'Cleaning': <FiDroplet className="mr-1.5" size={16} />,
  'Furnishing': <FiHome className="mr-1.5" size={16} />,
};

const PropertyDetailsPage = () => {
  const { id } = useParams()
  const router = useRouter()
  const { properties, favorites, addToFavorites, removeFromFavorites } = useAppContext()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (properties.length > 0) {
      const foundProperty = properties.find(p => p.id === parseInt(id))
      setProperty(foundProperty)
      setLoading(false)
    }
  }, [id, properties])

  const isFavorite = favorites[property?.id] || false

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(property.id)
    } else {
      addToFavorites(property.id)
    }
  }

  const nextImage = () => {
    if (!property?.images) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    if (!property?.images) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    )
  }

  const getGenderBadge = () => {
    switch(property?.gender) {
      case 'Male':
        return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' };
      case 'Female':
        return { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-200' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };
    }
  }

  const getPropertyImages = () => {
    if (!property) return [];
    if (property.images && property.images.length > 0) return property.images;
    if (property.image) return [property.image];
    return [];
  }

  const propertyImages = getPropertyImages();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Property not found</h2>
            <p className="text-gray-500 mt-2 text-sm">The property you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 max-w-6xl">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
        >
          <FiArrowLeft className="mr-2" size={18} />
          <span className="font-medium">Back to Search</span>
        </button>

        {/* Professional Image Carousel */}
        {propertyImages.length > 0 && (
          <div className="relative w-full mb-6 rounded-lg overflow-hidden">
            <div className="relative aspect-[16/9] w-full max-h-96">
              {propertyImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-300 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={img}
                    alt={`Property image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              ))}
              
              {/* Navigation Arrows */}
              {propertyImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-all z-10"
                  >
                    <FiChevronLeft className="h-4 w-4 text-gray-700" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-all z-10"
                  >
                    <FiChevronRight className="h-4 w-4 text-gray-700" />
                  </button>
                </>
              )}
              
              {/* Favorite Button */}
              <button
                onClick={toggleFavorite}
                className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-all z-10"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-500 hover:text-red-400'}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Image Indicators */}
            {propertyImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-3' : 'bg-white/60'}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Rest of the component remains exactly the same */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Property Details */}
          <div className="lg:w-2/3">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
                
                {/* Desktop Pricing */}
                <div className="hidden sm:flex flex-col items-end">
                  <div className="bg-blue-50 px-3 py-1.5 rounded-lg">
                    <span className="text-blue-600 font-bold text-lg">₹{property.price.toLocaleString()}</span>
                    <span className="text-blue-500 text-xs ml-1">/month</span>
                  </div>
                  {property.deposit && (
                    <div className="bg-purple-50 px-2 py-1 rounded-md mt-1 inline-block">
                      <p className="text-purple-700 text-sm font-medium">
                        Deposit: ₹{property.deposit.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Mobile Pricing */}
                <div className="sm:hidden w-full bg-blue-50 p-3 rounded-lg mt-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-blue-600 font-bold text-lg">₹{property.price.toLocaleString()}</span>
                      <span className="text-blue-500 text-xs ml-1">/month</span>
                    </div>
                    {property.deposit && (
                      <div className="bg-purple-50 px-2 py-1 rounded-md">
                        <p className="text-purple-700 text-sm font-medium">
                          ₹{property.deposit.toLocaleString()} deposit
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${property.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {property.available ? 'Available' : 'Not Available'}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getGenderBadge().bg} ${getGenderBadge().text} ${getGenderBadge().border}`}>
                  {property.gender === 'Male' && '♂ '}
                  {property.gender === 'Female' && '♀ '}
                  {property.gender === 'Unisex' && '⚥ '}
                  {property.gender}
                </span>
              </div>
              
              <div className="flex items-center mb-4 text-sm">
                <FiMapPin className="text-gray-500 mr-1.5" size={14} />
                <span className="text-gray-700">{property.location}</span>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center px-3 py-1.5 bg-gray-50 rounded-md text-sm">
                      {amenityIcons[amenity] || <FiHome className="mr-1.5" size={14} />}
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {property.description || `This ${property.type.toLowerCase()} is located in ${property.location} and offers a comfortable living space. It comes ${property.furnishing.toLowerCase()} and includes amenities like ${property.amenities.join(', ')}.`}
                </p>
              </div>
              
              {/* Enhanced Location Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Location</h2>
                <div className="flex items-center mb-2 text-sm">
                  <FiMapPin className="text-gray-500 mr-1.5" size={14} />
                  <span className="text-gray-700">{property.location}</span>
                </div>
                
                {/* Map Placeholder Box */}
                <div className="relative h-64 w-full bg-gray-200 rounded-lg overflow-hidden mt-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <FiNavigation className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-gray-500 text-sm">Map will be displayed here</p>
                      <p className="text-gray-400 text-xs mt-1">(Replace with your map integration)</p>
                    </div>
                  </div>
                </div>
                
                {property.distance && (
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {property.distance} km from city center
                  </p>
                )}
                
                {/* Directions Button */}
                <div className="mt-4">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(property.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    <FiNavigation size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Similar Properties Section */}
              {/* Similar Properties Section - Updated for better desktop view */}
                <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Similar Properties in {property.location}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {properties
                    .filter(p => 
                        p.id !== property.id && 
                        p.location === property.location
                    )
                    .slice(0, 3)
                    .map(similarProperty => (
                        <div 
                        key={similarProperty.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200"
                        >
                        {/* Property Image */}
                        <div className="relative h-48 w-full">
                            <Image
                            src={similarProperty.image}
                            alt={similarProperty.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Favorite Button */}
                            <button
                            onClick={(e) => {
                                e.stopPropagation();
                                favorites[similarProperty.id] 
                                ? removeFromFavorites(similarProperty.id)
                                : addToFavorites(similarProperty.id);
                            }}
                            className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white transition-all"
                            >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-5 w-5 ${favorites[similarProperty.id] ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-400'}`}
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>

                        {/* Property Details */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{similarProperty.title}</h3>
                            
                            {/* Price and Location */}
                            <div className="flex items-center justify-between mb-3">
                            <div className="bg-blue-50 px-2 py-1 rounded-md">
                                <span className="text-blue-600 font-bold">₹{similarProperty.price.toLocaleString()}</span>
                                <span className="text-blue-500 text-xs ml-1">/month</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                                <FiMapPin className="mr-1" size={14} />
                                <span>{similarProperty.distance} km</span>
                            </div>
                            </div>

                            {/* Amenities */}
                            <div className="flex flex-wrap gap-2 mb-4">
                            {similarProperty.amenities.slice(0, 2).map((amenity, index) => (
                                <div 
                                key={index} 
                                className="flex items-center px-2 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-md"
                                >
                                {amenityIcons[amenity] || <FiHome className="mr-1" size={12} />}
                                <span>{amenity}</span>
                                </div>
                            ))}
                            </div>

                            {/* View Button */}
                            <button
                            className="w-full bg-[#5e17eb] hover:bg-[#4a10d9] text-white py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleViewDetails();
                              }}
                            >
                            View Details
                            </button>
                        </div>
                        </div>
                    ))
                    }
                </div>
                </div>
            </div>
          </div>
          
          {/* Right Side - Owner Contact Card */}
          <div className="lg:w-1/3">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100">Contact Owner</h2>
              
              <div className="space-y-4">
                {/* Phone Call Button */}
                <a 
                  href={`tel:+91${property.ownerPhone}`}
                  className="flex items-center justify-center p-3 bg-[#0066cc] hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <FiPhone className="mr-3" size={18} />
                  <span>Call Owner</span>
                </a>
                
                {/* WhatsApp Button */}
                <a 
                  href={`https://wa.me/91${property.ownerPhone}?text=Hi ${property.ownerName}, I'm interested in your property ${property.title} at ${property.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-lg items-center justify-center p-3 bg-[#25D366] hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                >
                  <FaWhatsapp className="mr-3" size={18} />
                  <span>WhatsApp</span>
                </a>
                
                {/* Owner Info */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <span className="text-gray-600 font-medium text-sm">
                        {property.ownerName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-800">{property.ownerName}</h3>
                      <p className="text-gray-500 text-sm">Property Owner</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    <FiMapPin className="inline mr-2" size={14} />
                    {property.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default PropertyDetailsPage