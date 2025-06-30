'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function MyListings() {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const migrateProperties = async () => {
    try {
      const { data } = await axios.post('/api/property/migrate');
      if (data.success && data.modifiedCount > 0) {
        console.log(`Migrated ${data.modifiedCount} properties`);
      }
    } catch (error) {
      console.error("Error migrating properties:", error);
    }
  };

  const fetchProperties = async () => {
    try {
      const { data } = await axios.get('/api/property/owner-list');
      if (data.success) {
        setProperties(data.properties);
      } else {
        toast.error(data.message || "Failed to fetch properties");
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast.error("Error fetching properties. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (propertyId) => {
    if (!window.confirm('Are you sure you want to delete this property?')) {
      return;
    }

    try {
      const { data } = await axios.delete(`/api/property/${propertyId}`);
      if (data.success) {
        toast.success('Property deleted successfully');
        fetchProperties();
      } else {
        toast.error(data.message || 'Failed to delete property');
      }
    } catch (error) {
      console.error("Error deleting property:", error);
      toast.error("Error deleting property. Please try again.");
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await migrateProperties();
      await fetchProperties();
    };
    initialize();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow min-h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">My Properties</h1>
        <Link 
          href="/owner" 
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <FiPlus className="mr-2" />
          Add Property
        </Link>
      </div>

      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <table className="hidden sm:table min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rent & Deposit</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type & Gender</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties?.length > 0 ? (
              properties.map((property) => (
                <tr key={property._id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{property.name}</div>
                    <div className="text-sm text-gray-500">{property.proptype}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-gray-900">₹{property.rent.toLocaleString()}/mo</div>
                    <div className="text-gray-500">Deposit: ₹{property.deposit.toLocaleString()}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-gray-900 capitalize">{property.proptype}</div>
                    <div className="text-gray-500 capitalize">{property.gender}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-gray-900">{property.location}</div>
                    <div className="text-gray-500">{property.address}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => router.push(`/edit-property/${property._id}`)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit2 className="inline mr-1" /> Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(property._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                  No properties found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {properties?.length > 0 ? (
            properties.map((property) => (
              <div key={property._id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{property.name}</h3>
                    <p className="text-gray-500 text-sm mt-1 capitalize">{property.proptype} • {property.gender}</p>
                  </div>
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-500">Monthly Rent</p>
                    <p className="text-gray-900">₹{property.rent.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Deposit</p>
                    <p className="text-gray-900">₹{property.deposit.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-gray-900 text-sm">{property.address}</p>
                </div>
                
                <div className="mt-4 flex justify-end space-x-3">
                  <button 
                    onClick={() => router.push(`/edit-property/${property._id}`)}
                    className="text-blue-600 hover:text-blue-900 text-sm flex items-center"
                  >
                    <FiEdit2 className="mr-1" /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(property._id)}
                    className="text-red-600 hover:text-red-900 text-sm flex items-center"
                  >
                    <FiTrash2 className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
              No properties found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}