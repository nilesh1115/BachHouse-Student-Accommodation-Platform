'use client';
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useUser,useAuth} from "@clerk/nextjs";
import { get } from "mongoose";
import axios from "axios";
import toast from "react-hot-toast";

const defaultContextValue = {
  properties: [],
  filteredProperties: [],
  userData: false,
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

  const fetchUserData = async () => {
    try {
      if(user.publicMetadata.role ==='owner'){
      setIsOwner(true);
    }
    const token = await getToken();
    const {data} =await axios.get('/api/user/data',{headers: { Authorization: `Bearer ${token}` }});

      if (data.success) {
        setUserData(data.user);
      }else {
        toast.error(data.message );
      }

    } catch (error) {
              toast.error(error.message );

    }
  };
  const {getToken} = useAuth();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [userData, setUserData] = useState(false);
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
  const [error, setError] = useState(null);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/property/list');
      
      if (Array.isArray(response.data)) {
        // Transform the properties to match the expected format
        const transformedProperties = response.data.map(property => ({
          _id: property._id,
          id: property._id, 
          name: property.name || '',
          title: property.title || property.name || '', 
          description: property.description || '',
          type: property.type || property.proptype || '', 
          proptype: property.proptype || property.type || '', 
          rent: typeof property.rent === 'number' ? property.rent : 0,
          price: typeof property.price === 'number' ? property.price : (typeof property.rent === 'number' ? property.rent : 0), 
          deposit: typeof property.deposit === 'number' ? property.deposit : 0,
          gender: property.gender || '',
          location: property.location || '',
          distance: property.distance || '',
          address: property.address || '',
          amenities: Array.isArray(property.amenities) ? property.amenities : [],
          image: Array.isArray(property.image) ? property.image : [],
          images: Array.isArray(property.image) ? property.image : [], 
          occupancy: property.occupancy || '',
          date: property.date || new Date()
        }));

        console.log('Fetched properties count:', transformedProperties.length);
        setProperties(transformedProperties);
        setFilteredProperties(transformedProperties);
        setError(null);
      } else {
        console.error('Invalid response format:', response.data);
        setError('Invalid response format from server');
      }
    } catch (err) {
      console.error('Error fetching properties:', err);
      setError(err.response?.data?.message || 'Failed to fetch properties');
    } finally {
      setLoading(false);
    }
  };

  // Initialize data
  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
      setFavorites(storedFavorites);
      fetchProperties(); 
    } catch (error) {
      console.error("Failed to load initial data:", error);
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

  // Update filtered properties when filters change
  useEffect(() => {
    let filtered = [...properties];

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply gender filter
    if (filters.gender) {
      filtered = filtered.filter(property => 
        property.gender.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    // Apply price range filter
    if (filters.minPrice > 0 || filters.maxPrice < 100000) {
      filtered = filtered.filter(property => 
        property.rent >= filters.minPrice && property.rent <= filters.maxPrice
      );
    }

    // Apply type filter
    if (filters.type) {
      filtered = filtered.filter(property => 
        property.type.toLowerCase() === filters.type.toLowerCase()
      );
    }

    setFilteredProperties(filtered);
  }, [properties, filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const addToFavorites = (propertyId) => {
    setFavorites(prev => ({
      ...prev,
      [propertyId]: true
    }));
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(prev => {
      const newFavorites = { ...prev };
      delete newFavorites[propertyId];
      return newFavorites;
    });
  };

  //setch user data
  useEffect(() => {
    if (user) {
  fetchUserData();
  if (user?.publicMetadata?.role === 'owner') {
    setIsOwner(true);
  } else {
    setIsOwner(false);
  }
}
  }, [user]);

  const contextValue = useMemo(() => ({
    properties,
    filteredProperties,
    userData,
    getToken,
    fetchUserData,
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
    user,
    error,
    refreshProperties: fetchProperties
  }), [properties, filteredProperties, userData, isOwner, favorites, loading, router, filters, user, error]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};