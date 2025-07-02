"use client";
import { FiLogOut } from 'react-icons/fi';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useRouter } from 'next/navigation';

export default function OwnerNavbar() {
  const router = useRouter();
  
  return (
    <header className="bg-white h-16 flex items-center border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-1 w-full">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <Image
            className="w-36 md:w-44 h-auto"
            src={assets.logo}
            alt="BachHouse Logo"
            width={176}
            height={55}
            priority
          />
        </div>
        {/*
        <button className="flex items-center text-gray-600 hover:text-white transition-colors bg-gray-100 hover:bg-[#5e17eb] px-4 py-2 rounded-full">
          <FiLogOut className="mr-2" />
          <span className="text-sm font-medium">Logout</span>
        </button>
        */}
      </div>
    </header>
  );
}