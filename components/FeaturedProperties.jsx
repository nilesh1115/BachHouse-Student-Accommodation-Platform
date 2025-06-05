"use client";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { MapPin, Users, Wifi, Utensils, Droplet, Dumbbell, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const PropertyImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isMounted && isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length, isMounted]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="relative h-48 sm:h-56 md:h-64 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={images[currentIndex]}
        alt="Property"
        fill
        className="object-cover"
        priority
      />

      {isMounted && images.length > 1 && (
        <>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all hover:scale-110"
            suppressHydrationWarning
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-all hover:scale-110"
            suppressHydrationWarning
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </>
      )}

      {isMounted && images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-gray-800 w-3 sm:w-4' : 'bg-white/50 hover:bg-white/80'
              }`}
              suppressHydrationWarning
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FeaturedProperties = () => {
  const [favorites, setFavorites] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const properties = [
    {
      id: 1,
      images: [assets.property1_image, assets.property2_image, assets.property3_image],
      type: "PG",
      price: "₹3500/month",
      title: "PG Near DIT Pimpri",
      distance: "200 m from campus",
      gender: "Male Only",
      amenities: ["WiFi", "Balcony", "Table", "+3"]
    },
    {
      id: 2,
      images: [assets.property2_image, assets.property1_image, assets.property3_image],
      type: "Shared Flat",
      price: "₹4,000/month",
      title: "Modern 2BHK Flat",
      distance: "1.2 km from DPU Medical",
      gender: "Male only",
      amenities: ["WiFi", "Hot Water", "Parking", "+5"]
    },
    {
      id: 3,
      images: [assets.property3_image, assets.property1_image, assets.property2_image],
      type: "Standard Room",
      price: "₹3,000/month",
      title: "Cozy Room for Students",
      distance: "350 m from DIT Pimpri",
      gender: "Female Only",
      amenities: ["WiFi", "Balcony", "Cubboard", "+4"]
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Properties</h2>
          <div className="w-20 sm:w-24 md:w-28 h-0.5 bg-[#059669] mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-1 sm:p-2 relative">
                <div className="relative rounded-md sm:rounded-lg overflow-hidden">
                  <PropertyImageCarousel images={property.images} />

                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#ff6b2c] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm z-10">
                    {property.type}
                  </div>
                  
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-md z-10">
                    {property.price}
                  </div>

                  <button
                    onClick={(e) => toggleFavorite(property.id, e)}
                    className={`absolute top-12 right-3 sm:top-14 sm:right-4 p-1.5 rounded-full shadow-md z-10 transition-all ${
                      favorites[property.id] 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 hover:bg-white text-gray-700'
                    } ${hoveredCard === property.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    aria-label={favorites[property.id] ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart 
                      className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                        favorites[property.id] ? 'fill-current' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 hover:text-[#5e17eb] transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-[#059669]" />
                    <span className="text-xs sm:text-sm">{property.distance}</span>
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

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {property.amenities.map((amenity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center border border-gray-300 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs bg-white text-black hover:bg-gray-100 transition-colors"
                    >
                      {amenity === "WiFi" && <Wifi className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />}
                      {amenity === "Food" && <Utensils className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />}
                      {amenity === "Laundry" && <Droplet className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />}
                      {amenity === "Gym" && <Dumbbell className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />}
                      {amenity}
                    </div>
                  ))}
                </div>

                <button 
                  className="mt-auto w-full bg-[#5e17eb] hover:bg-[#4e13c7] text-white py-1.5 sm:py-2 rounded-md font-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base hover:shadow-md active:scale-95"
                  suppressHydrationWarning
                >
                  View Details
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;