'use client';
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { properties as initialProperties } from "@/assets/assets";
import { useUser } from "@clerk/nextjs";

// Define default context value
const defaultContextValue = {
  properties: [],
  filteredProperties: [],
  userData: null,
  isOwner: false,
  favorites: {},
  loading: true,
  filters: {
    gender: null,
    minPrice: 0,
    maxPrice: 100000,
    type: null,
    distance: 10,
    sharing: null,
    amenities: [],
    furnishing: null,
    availableFrom: null,
    hasSearched: false,
    location: null
  },
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  updateFilters: () => {},
  setIsOwner: () => {},
  setUserData: () => {},
  router: null
};

export const AppContext = createContext(defaultContextValue);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
}

export const AppContextProvider = ({ children }) => {
  const router = useRouter();
  const { user } = useUser();

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    gender: null,
    minPrice: 0,
    maxPrice: 100000,
    type: null,
    distance: 10,
    sharing: null,
    amenities: [],
    furnishing: null,
    availableFrom: null,
    hasSearched: false,
    location: null
  });

  // Initialize data
  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
      setProperties(initialProperties || []);
      setFilteredProperties(initialProperties || []);
      setFavorites(storedFavorites);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load initial data:", error);
      setLoading(false);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Set isOwner only after user data is loaded
  useEffect(() => {
    if (userData) {
      setIsOwner(userData.role === 'owner');
    }
  }, [userData]);

  // Apply filters when they change
  useEffect(() => {
    if (properties.length > 0) {
      applyFilters();
    }
  }, [filters, properties]);

  const applyFilters = () => {
    let result = [...properties];
    
    if (filters.hasSearched) {
      if (filters.location) {
        const searchTerm = filters.location.toLowerCase();
        result = result.filter(property => 
          property.location.toLowerCase().includes(searchTerm) ||
          property.title.toLowerCase().includes(searchTerm)
        );
      }
      
      if (filters.gender) {
        result = result.filter(property => property.gender === filters.gender || property.gender === 'Unisex');
      }
      
      result = result.filter(property => 
        property.price >= filters.minPrice && property.price <= filters.maxPrice
      );
      
      if (filters.type) {
        result = result.filter(property => property.type === filters.type);
      }
      
      result = result.filter(property => property.distance <= filters.distance);
      
      if (filters.sharing) {
        result = result.filter(property => property.sharing.includes(filters.sharing));
      }
      
      if (filters.amenities.length > 0) {
        result = result.filter(property => 
          filters.amenities.every(amenity => property.amenities.includes(amenity))
        );
      }
      
      if (filters.furnishing) {
        result = result.filter(property => property.furnishing === filters.furnishing);
      }
      
      if (filters.availableFrom) {
        result = result.filter(property => new Date(property.availableFrom) >= new Date(filters.availableFrom));
      }
    } else {
      result = [];
    }
    
    setFilteredProperties(result);
  };

  const addToFavorites = (propertyId) => {
    setFavorites(prev => ({ ...prev, [propertyId]: true }));
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(prev => {
      const newFavorites = { ...prev };
      delete newFavorites[propertyId];
      return newFavorites;
    });
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const contextValue = useMemo(() => ({
    properties,
    filteredProperties,
    userData,
    setUserData,
    isOwner,
    setIsOwner,
    favorites,
    addToFavorites,
    removeFromFavorites,
    loading,
    router,
    filters,
    updateFilters,
    user // Include user from Clerk in context
  }), [properties, filteredProperties, userData, isOwner, favorites, loading, router, filters, user]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};