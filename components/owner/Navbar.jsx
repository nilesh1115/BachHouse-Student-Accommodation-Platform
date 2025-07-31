"use client";
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useRouter } from 'next/navigation';
import { useClerk, UserButton } from '@clerk/nextjs';
import { useUser } from "@clerk/nextjs";

export default function OwnerNavbar() {
  const router = useRouter();
  const { signOut, openSignIn } = useClerk();
  const { user, isLoaded } = useUser();
  const handleSignIn = () => {
    if (openSignIn) {
      openSignIn();
    }
  };
  
  return (
    <header className="bg-white h-16 flex items-center border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-1 w-full">
        {/* Logo container with mobile centering */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
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
        </div>
        {/* Login/User Icon - always visible */}
        <div className="flex items-center md:flex-none">
          {user ? (
            <div className="pr-2">
              <UserButton />
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="flex items-center gap-2 border border-[#5e17eb] px-6 py-1 md:px-4 md:py-1.5 rounded-full hover:bg-[#5e17eb] hover:text-white transition text-base"
            >
              <Image
                src={assets.user_icon}
                alt="user icon"
                width={18}
                height={18}
                className="md:hidden"
              />
              <span className="hidden md:inline">Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}