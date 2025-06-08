'use client';
import { useAppContext } from '@/context/AppContext';
import { useState, useCallback } from 'react';
import { FiUpload, FiX, FiImage } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddProperty() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState({
    bed: false,
    cupboard: false, 
    geyser: false,
    Water_availability_24_7: false,
    hot_water: false,
    wifi: false,
    drinking_water: false,
    cleaning: false,
    balcony: false,
    Table: false,
    chair: false,
    wash_basin: false,
    Indian_toilet: false,
    western_toilet: false,
    rooftop_access: false,
    security: false,
    parking: false,
    ac: false,
    kitchen: false,
    laundry: false,
  });

  const [description, setDescription] = useState('');
  const [propertyType, setPropertyType] = useState('room');
  const [occupancy, setOccupancy] = useState('1');
  const [gender, setGender] = useState('male');
  const [propertyTitle, setPropertyTitle] = useState('');

  const handleImageUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size
    }));
    setImages(prev => [...prev, ...newImages].slice(0, 10));
  }, []);

  const removeImage = useCallback((index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData();

    try {
      formData.append('name', propertyTitle);
      formData.append('description', description);
      formData.append('type', propertyType);
      formData.append('occupancy', occupancy);
      formData.append('rent', form.rent.value);
      formData.append('deposit', form.deposit.value || '0');
      formData.append('gender', gender);
      formData.append('address', form.address.value);

      const selectedAmenities = Object.entries(amenities)
        .filter(([_, value]) => value)
        .map(([key]) => key);
      formData.append('amenities', selectedAmenities.join(','));

      const imageInput = form.querySelector('input[type="file"]');
      Array.from(imageInput.files).forEach((file) => {
        formData.append('images', file);
      });

      const { data } = await axios.post('/api/property/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      
      if (data.success) {
        toast.success(data.message);
        setImages([]);
        setAmenities({
          bed: false,
          cupboard: false,
          geyser: false,
          Water_availability_24_7: false,
          hot_water: false,
          wifi: false,
          drinking_water: false,
          cleaning: false,
          balcony: false,
          Table: false,
          chair: false,
          wash_basin: false,
          Indian_toilet: false,
          western_toilet: false,
          rooftop_access: false,
          security: false,
          parking: false,
          ac: false,
          kitchen: false,
          laundry: false,
        });
        setDescription('');
        setPropertyType('room');
        setOccupancy('1');
        setPropertyTitle('');
        setGender('male');
        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmenityChange = (amenity) => {
    setAmenities(prev => ({
      ...prev,
      [amenity]: !prev[amenity]
    }));
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow max-w-6xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Add New Property</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div className="space-y-1">
            <div className="flex justify-between items-end">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Name *</label>
              <span className="text-xs text-gray-500">
                <span className="text-gray-700 font-medium">{propertyTitle.length}</span>/50
              </span>
            </div>
            <input 
              type="text" 
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors"  
              placeholder="1 BHK Flat in XYZ"
              value={propertyTitle}
              onChange={(e) => {
                if (e.target.value.length <= 50) {
                  setPropertyTitle(e.target.value);
                }
              }}
              required 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Type *</label>
            <select 
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              required
            >
              <option value="room">Room</option>
              <option value="pg">PG</option>
              <option value="flat">Flat</option>
              <option value="house">House</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Total Occupancy</label>
            <select 
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
              value={occupancy}
              onChange={(e) => setOccupancy(e.target.value)}
            >
              <option value="1">1 Person</option>
              <option value="2">2 Sharing</option>
              <option value="3">3 Sharing</option>
              <option value="4">4 Sharing</option>
              <option value="5">5 Sharing</option>
              <option value="6">6 Sharing</option>  
              <option value="7">7 Sharing</option>
              <option value="8">8 Sharing</option>
            </select>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-base sm:text-lg font-medium text-gray-800">Property Images *</h2>
          <label className="block w-full min-h-[120px] sm:min-h-[150px] border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer hover:border-blue-400 transition-colors">
            <div className="flex flex-col items-center justify-center h-full">
              {images.length === 0 ? (
                <>
                  <FiUpload className="mx-auto text-gray-400 mb-1 sm:mb-2 text-xl sm:text-2xl" />
                  <p className="text-xs sm:text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Upload up to 10 images (JPEG, PNG)</p>
                </>
              ) : (
                <>
                  <FiImage className="mx-auto text-gray-400 mb-1 sm:mb-2 text-xl sm:text-2xl" />
                  <p className="text-xs sm:text-sm text-gray-600">Click to add more images</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">{images.length}/10 images uploaded</p>
                </>
              )}
              <input 
                type="file" 
                className="hidden" 
                onChange={handleImageUpload}
                accept="image/jpeg, image/png"
                multiple
                required
              />
            </div>
          </label>
          
          {images.length > 0 && (
            <div className="mt-3 sm:mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                {images.map((img, index) => (
                  <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={img.url} 
                      alt={`Property ${index}`} 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity text-[10px]"
                    >
                      <FiX size={12} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-[10px] sm:text-xs p-1 truncate">
                      {img.name}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2 text-right">
                {images.length}/10 images uploaded • Max 5MB each
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Rent (₹) *</label>
            <input 
              type="number" 
              name="rent"
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors"  
              placeholder="e.g.₹3000"
              required 
              min="0"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Deposit (₹)</label>
            <input 
              type="number" 
              name="deposit"
              placeholder="e.g.₹ 3000" 
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
              min="0"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Preferred Tenant Gender</label>
          <select 
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="any">Any</option>
          </select>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Amenities</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {Object.entries(amenities).map(([amenity, checked]) => (
              <div key={amenity} className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={checked}
                  onChange={() => handleAmenityChange(amenity)}
                  className="h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-xs sm:text-sm text-gray-700 capitalize">
                  {amenity.replace('_', ' ')}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Description *</label>
            <span className="text-xs text-gray-500">
              <span className="text-gray-700 font-medium">{description.length}</span>/500
            </span>
          </div>
          <textarea 
            rows={3}
            className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
            placeholder="Describe your property in detail..."
            value={description}
            onChange={(e) => {
              if (e.target.value.length <= 500) {
                setDescription(e.target.value);
              }
            }}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Address *</label>
          <input 
            type="text" 
            name="address"
            className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
            placeholder="Enter full address" 
            required 
          />
        </div>

        <div className="flex justify-end pt-3 sm:pt-4">
          <button 
            type="submit" 
            className="px-4 py-1.5 sm:px-6 sm:py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={images.length === 0 || isSubmitting}
          >
            {isSubmitting ? 'Adding Property...' : 'Add Property'}
          </button>
        </div>
      </form>
    </div>
  );
}