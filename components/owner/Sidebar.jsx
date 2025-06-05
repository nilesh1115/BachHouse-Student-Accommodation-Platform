"use client";
import Link from 'next/link';
import { 
  FiPlus as AddIcon,
  FiList as ListIcon,
  FiMessageSquare as MessageIcon
} from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function OwnerSidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Add Property', path: '/owner', icon: <AddIcon className="w-6 h-6" /> },
    { name: 'My Listings', path: '/owner/my-listings', icon: <ListIcon className="w-6 h-6" /> },
    { name: 'Inquiries', path: '/owner/inquiries', icon: <MessageIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-[calc(100vh-4rem)] border-gray-300 py-2 fixed top-16 left-0 z-40 bg-white">
      <div className="flex flex-col">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link href={item.path} key={item.name} passHref>
              <div
                className={`flex items-center py-3 px-4 gap-3 ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-500"
                    : "hover:bg-gray-100/90 border-white"
                }`}
              >
                <div className="text-gray-700">
                  {item.icon}
                </div>
                <p className="md:block hidden text-gray-700 font-medium">
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}