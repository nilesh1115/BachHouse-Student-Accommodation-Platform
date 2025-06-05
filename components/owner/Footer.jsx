import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { logoIcon } from "@/assets/assets";

export default function OwnerFooter() {
  return (
    <footer className="bg-white border-t py-1 sm:py-1">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile Layout  */}
        <div className="flex flex-col items-center space-y-3 md:hidden">
        <div className="flex items-center -ml-4">
          <Image 
            src={logoIcon} 
            alt="BachHouse Logo"
            width={60}
            height={60}
            className="-mr-2"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#5e17eb] to-blue-500 bg-clip-text text-transparent ml-1">
            BachHouse
          </span>
        </div>
          
          <div className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} BachHouse. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <Link href="/terms" className="text-xs hover:underline text-gray-600">
              Terms & Conditions
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
              <FiFacebook size={14} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
              <FiTwitter size={14} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-pink-600">
              <FiInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Tablet/Desktop Layout - Horizontal */}
        <div className="hidden md:flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center flex-1 min-w-[200px]">
            <Image 
              src={logoIcon} 
              alt="BachHouse Logo"
              width={80}
              height={80}
              className="mr-3"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#5e17eb] to-blue-500 bg-clip-text text-transparent">
              BachHouse
            </span>
          </div>
          
          <div className="flex-1 text-center text-xs text-gray-600 min-w-[250px]">
            © {new Date().getFullYear()} BachHouse. All rights reserved.
            <Link href="/terms" className="ml-3 hover:underline">
              Terms & Conditions
            </Link>
          </div>
           {/* Social Media Icons*/}
          <div className="flex-1 flex justify-end space-x-3 min-w-[120px]">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
              <FiFacebook size={14} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
              <FiTwitter size={14} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-pink-600">
              <FiInstagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}