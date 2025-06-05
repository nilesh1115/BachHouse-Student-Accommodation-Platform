import { FiMail, FiCheckCircle, FiClock, FiChevronRight } from 'react-icons/fi';

const inquiries = [
  {
    id: 1,
    name: "Rahul Sharma",
    property: "Sunshine Apartment",
    date: "2023-05-15",
    status: "pending",
    email: "rahul.sharma@example.com",
    phone: "9876543210"
  },
  {
    id: 2,
    name: "Priya Patel",
    property: "Green Valley PG",
    date: "2023-05-10",
    status: "responded",
    email: "priya.patel@example.com",
    phone: "8765432109"
  }
];

export default function Inquiries() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Inquiries</h1>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interested Bachelor</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td className="px-4 py-4">
                  <div className="font-medium text-gray-900">{inquiry.name}</div>
                  <div className="text-gray-500 text-sm">{inquiry.email}</div>
                  <div className="text-gray-500 text-sm">{inquiry.phone}</div>
                </td>
                <td className="px-4 py-4 text-gray-500">{inquiry.property}</td>
                <td className="px-4 py-4 text-gray-500">{new Date(inquiry.date).toLocaleDateString()}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    {inquiry.status === 'responded' ? (
                      <>
                        <FiCheckCircle className="text-green-500 mr-2" />
                        <span className="text-green-800">Responded</span>
                      </>
                    ) : (
                      <>
                        <FiClock className="text-yellow-500 mr-2" />
                        <span className="text-yellow-800">Pending</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    Respond
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{inquiry.name}</h3>
                <p className="text-gray-500 text-sm">{inquiry.property}</p>
              </div>
              <div className="flex items-center">
                {inquiry.status === 'responded' ? (
                  <FiCheckCircle className="text-green-500 mr-1" />
                ) : (
                  <FiClock className="text-yellow-500 mr-1" />
                )}
                <span className={`text-xs ${inquiry.status === 'responded' ? 'text-green-800' : 'text-yellow-800'}`}>
                  {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-gray-900 text-sm">{new Date(inquiry.date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Contact</p>
                <p className="text-gray-900 text-sm">{inquiry.phone}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <a href={`mailto:${inquiry.email}`} className="text-blue-600 text-sm flex items-center">
                <FiMail className="mr-1" /> Email
              </a>
              <button className="text-gray-600 text-sm flex items-center">
                View Details <FiChevronRight className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}