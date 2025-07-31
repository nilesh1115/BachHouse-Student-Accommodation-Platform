'use client';
import { useAppContext } from '@/context/AppContext';
import { useState, useCallback } from 'react';
import { FiUpload, FiX, FiImage } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';


const LOCATIONS = [
  'Sant Tukaram Nagar',
  'Nehru Nagar',
  'YCM',
  'Vallabhnagar',
  'Shiv Mandir',
  'Near DY Patil Engineering',
  'Maitri Chowk',
  'Near DPU Medical'
];

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

  const [formData, setFormData] = useState({
    title: '',
    name: '',
    description: '',
    location: '',
    type: 'room',
    gender: 'male',
    rent: '',
    deposit: '',
    occupancy: '1',
    image: [],
    amenities: [],
    rules: [],
    ownerName: '',
    phone: '',
    whatsappNumber: '',
    email: '',
    available: true,
    distance: '',
    furnishing: 'Furnished',
    ownerPhone: '',
    price: '',
    address: '',
    latitude: '',
    longitude: '',
    googleMapsLink: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      // If name is being updated, also update title
      if (name === 'name') {
        newData.title = value;
      }
      return newData;
    });
  };

  const handleImageUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      file: file // Store the actual file object
    }));
    setImages(prev => [...prev, ...newImages].slice(0, 10));
  }, []);

  const removeImage = useCallback((index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Collect checked amenities
    const selectedAmenities = Object.keys(amenities).filter(key => amenities[key]);
    setFormData(prev => ({
      ...prev,
      amenities: selectedAmenities
    }));

    // Validate required fields
    const requiredFields = {
      title: 'Property Title',
      name: 'Property Name',
      description: 'Description',
      location: 'Location',
      type: 'Property Type',
      gender: 'Gender',
      rent: 'Rent',
      ownerName: 'Owner Name',
      phone: 'Phone Number',
      whatsappNumber: 'WhatsApp Number'
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !formData[key])
      .map(([_, label]) => label);

    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    // Validate images
    if (images.length === 0) {
      toast.error('Please upload at least one image');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      
      // Map form fields to required database fields
      const propertyData = {
        title: formData.name,
        name: formData.name,
        description: formData.description,
        location: formData.location,
        type: formData.type,
        proptype: formData.type,
        gender: formData.gender,
        rent: Number(formData.rent) || Number(formData.price) || 0,
        price: Number(formData.price) || Number(formData.rent) || 0,
        deposit: Number(formData.deposit) || 0,
        occupancy: formData.occupancy || '1',
        amenities: selectedAmenities,
        rules: Array.isArray(formData.rules) ? formData.rules : [],
        ownerName: formData.ownerName,
        phone: formData.phone,
        ownerPhone: formData.phone,
        whatsappNumber: formData.whatsappNumber,
        email: formData.email || '',
        available: formData.available !== false,
        distance: formData.distance || '',
        furnishing: formData.furnishing || 'Furnished',
        address: formData.address || '',
        latitude: formData.latitude || '',
        longitude: formData.longitude || '',
        googleMapsLink: formData.googleMapsLink || '',
        date: new Date()
      };

      // Append all property data
      Object.keys(propertyData).forEach(key => {
        if (propertyData[key] !== undefined && propertyData[key] !== null) {
          if (Array.isArray(propertyData[key])) {
            formDataToSend.append(key, JSON.stringify(propertyData[key]));
          } else {
            formDataToSend.append(key, propertyData[key]);
          }
        }
      });

      // Append images
      images.forEach((image) => {
        if (image.file) {
          formDataToSend.append('images', image.file);
        }
      });

      console.log('Sending form data with images:', images.length);

      const response = await fetch('/api/property/add', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add property');
      }

      toast.success(data.message || 'Property added successfully!');
      
      // Reset form
      setFormData({
        title: '',
        name: '',
        description: '',
        location: '',
        type: 'room',
        gender: 'male',
        rent: '',
        deposit: '',
        occupancy: '1',
        image: [],
        amenities: [],
        rules: [],
        ownerName: '',
        phone: '',
        whatsappNumber: '',
        email: '',
        available: true,
        distance: '',
        furnishing: 'Furnished',
        ownerPhone: '',
        price: '',
        address: '',
        latitude: '',
        longitude: '',
        googleMapsLink: '',
        });
      setImages([]);
      
      router.push('/owner/my-listings');
    } catch (err) {
      console.error('Error adding property:', err);
      setError(err.message);
      toast.error(err.message || 'Failed to add property');
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
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Name/Title *</label>
              <span className="text-xs text-gray-500">
                <span className="text-gray-700 font-medium">{formData.name.length}</span>/50
              </span>
            </div>
            <input 
              type="text" 
              name="name"
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors"  
              placeholder="1 BHK Flat in XYZ"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Location *</label>
            <select 
              name="location"
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Distance from DIT Pimpri</label>
          <input 
            type="text" 
            name="distance"
            className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors"  
            placeholder="eg 200 m ,1 km , 1.4 km"
            value={formData.distance}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Property Type *</label>
            <select 
              name="type"
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.type}
              onChange={handleChange}
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
              name="occupancy"
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.occupancy}
              onChange={handleChange}
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
              value={formData.rent}
              onChange={handleChange}
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
              value={formData.deposit}
              onChange={handleChange}
              placeholder="e.g.₹ 3000" 
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
              min="0"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs sm:text-sm font-medium text-gray-700">Preferred Tenant Gender *</label>
          <select 
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:ring-blue-500 focus:border-blue-500"
            required
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
              <span className="text-gray-700 font-medium">{formData.description.length}</span>/500
            </span>
          </div>
          <textarea 
            name="description"
            rows={3}
            className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
            placeholder="Describe your property in detail..."
            value={formData.description}
            onChange={handleChange}
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
            value={formData.address}
            onChange={handleChange}
          />
          {/* Google Maps Link Input */}
          <div className="mt-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">Google Maps Link (Shareable)</label>
            <input
              type="url"
              name="googleMapsLink"
              className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Paste the Google Maps shareable link here"
              value={formData.googleMapsLink || ''}
              onChange={handleChange}
            />
          </div>
          
        </div>

        {/* Contact Information Section */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Contact Information</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Owner Name *</label>
              <input 
                type="text" 
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
                placeholder="Enter owner name" 
                required 
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
                placeholder="Enter phone number" 
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required 
              />
              <p className="text-xs text-gray-500">Enter 10-digit mobile number</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">WhatsApp Number *</label>
              <input 
                type="tel" 
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
                placeholder="Enter WhatsApp number" 
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit WhatsApp number"
                required 
              />
              <p className="text-xs text-gray-500">Enter 10-digit WhatsApp number</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-700 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none transition-colors" 
                placeholder="Enter email address" 
              />
            </div>
          </div>
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