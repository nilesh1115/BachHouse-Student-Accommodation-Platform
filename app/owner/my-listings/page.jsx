import Link from 'next/link';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const properties = [
  {
    id: 1,
    name: "Sunshine Apartment",
    rent: 15000,
    deposit: 30000,
    location: "Koramangala, Bangalore",
    status: "active"
  },
  {
    id: 2,
    name: "Green Valley PG",
    rent: 12000,
    deposit: 24000,
    location: "HSR Layout, Bangalore",
    status: "inactive"
  }
];

export default function MyListings() {
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
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{property.name}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-gray-900">₹{property.rent.toLocaleString()}/mo</div>
                  <div className="text-gray-500">Deposit: ₹{property.deposit.toLocaleString()}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-gray-500">{property.location}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    <FiEdit2 className="inline mr-1" /> Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FiTrash2 className="inline mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {properties.map((property) => (
            <div key={property.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{property.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{property.location}</p>
                </div>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </span>
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
              
              <div className="mt-4 flex justify-end space-x-3">
                <button className="text-blue-600 hover:text-blue-900 text-sm flex items-center">
                  <FiEdit2 className="mr-1" /> Edit
                </button>
                <button className="text-red-600 hover:text-red-900 text-sm flex items-center">
                  <FiTrash2 className="mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}