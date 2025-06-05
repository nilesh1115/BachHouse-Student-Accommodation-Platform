'use client';
import React, { useState, useEffect } from 'react';
import { assets } from '@/assets/assets';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useClerk, UserButton } from '@clerk/nextjs';
import {HomeIcon} from '@/assets/assets';
const Navbar = () => {
  const { isOwner, user } = useAppContext();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signIn } = useClerk(); // Correctly destructured signIn

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center justify-between px-6 md:px-16 lg:px-32 py-2 border-b border-gray-200 text-gray-700 h-16">
        {/* Left side - Hamburger menu (mobile only) */}
        <div className="flex items-center md:hidden">
          <button
            className="p-2 -ml-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Image
              src={mobileMenuOpen ? assets.close_icon : assets.menu_icon}
              alt={mobileMenuOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Center - Logo */}
        <div
          className="cursor-pointer mx-auto md:mx-0"
          onClick={() => handleNavigation('/')}
        >
          <Image
            className="w-36 md:w-44 h-auto"
            src={assets.logo}
            alt="BachHouse Logo"
            width={176}
            height={55}
            priority
          />
        </div>

        {/* Right side - Navigation links (desktop) and Login (both) */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14 font-medium absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="hover:text-[#5e17eb] transition text-base">
              Home
            </Link>
            <Link
              href="/all-properties"
              className="hover:text-[#5e17eb] transition text-base"
            >
              Properties
            </Link>
            <Link
              href="/about-us"
              className="hover:text-[#5e17eb] transition text-base"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#5e17eb] transition text-base"
            >
              Contact
            </Link>

            {isMounted && isOwner && (
              <button
                onClick={() => router.push('/owner')}
                className="text-sm border border-[#5e17eb] text-[#5e17eb] px-4 py-1.5 rounded-full hover:bg-[#5e17eb] hover:text-white transition"
              >
                Owner Dashboard
              </button>
            )}
          </div>

          {/* User Button / Login */}
          {user ? (
            <div className="pr-4">
              <UserButton  >
                <UserButton.MenuItems>
                  <UserButton.Action label="Home" labelIcon={<HomeIcon/>} onClick={()=>router.push('/')}/>
                </UserButton.MenuItems>
              </UserButton>
            </div>
          ) : (
            <button
              onClick={() => signIn.openSignIn()}
              className="flex items-center gap-2 border border-[#5e17eb] px-3 py-1 md:px-4 md:py-1.5 rounded-full hover:bg-[#5e17eb] hover:text-white transition text-base"
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
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900/10 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg" style={{ top: '64px' }}>
            <div className="flex flex-col h-[calc(100vh-64px)] p-4">
              <div className="flex flex-col space-y-4 flex-grow mt-4">
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('/all-properties')}
                  className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                >
                  Properties
                </button>
                <button
                  onClick={() => handleNavigation('/about-us')}
                  className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavigation('/contact-us')}
                  className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                >
                  Contact
                </button>
                {isMounted && isOwner && (
                  <button
                    onClick={() => handleNavigation('/owner')}
                    className="text-left px-4 py-3 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
                  >
                    Owner Dashboard
                  </button>
                )}
              </div>

              <div className="mt-auto pb-8 px-2">
                {user ? (
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <button
                    onClick={() => signIn.openSignIn()}
                    className="w-full flex items-center justify-center gap-2 border border-[#5e17eb] px-4 py-2.5 rounded-full hover:bg-[#5e17eb] hover:text-white transition text-base"
                  >
                    <Image
                      src={assets.user_icon}
                      alt="user icon"
                      width={18}
                      height={18}
                    />
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;