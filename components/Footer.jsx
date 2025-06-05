"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  WhatsAppIcon,
  LocationIcon,
  EmailIcon,
  logoIcon
} from "@/assets/assets";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#E8E5FC] text-[#E8E5FC] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center -ml-8">
              <Image 
                src={logoIcon} 
                alt="BachHouse Logo"
                width={120}
                height={120}
                className="-mr-6"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-[#5e17eb] to-blue-500 bg-clip-text text-transparent">
                BachHouse
              </span>
            </div>
            <p className="text-teal-800">
              India's trusted platform connecting students with quality accommodations near educational institutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image 
                  src={FacebookIcon} 
                  alt="Facebook"
                  width={50}
                  height={50}
                  className="h-7 w-7 object-contain"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image 
                  src={TwitterIcon} 
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="h-7 w-7 object-contain"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image 
                  src={InstagramIcon} 
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-7 w-7 object-contain"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Image 
                  src={LinkedinIcon} 
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="h-7 w-7 object-contain"
                />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#340c83]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/all-properties" className="text-teal-800 hover:text-teal-400 transition">Browse Properties</Link></li>
              <li><Link href="/owner" className="text-teal-800 hover:text-teal-400 transition">List Your Property</Link></li>
              <li><Link href="/about-us" className="text-teal-800 hover:text-teal-400 transition">About Us</Link></li>
              <li><Link href="/blog" className="text-teal-800 hover:text-teal-400 transition">Blog</Link></li>
              <li><Link href="/contact-us" className="text-teal-800 hover:text-teal-400 transition">Contact </Link></li>
            </ul>
          </div>
          {/* Student Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#340c83]">Student Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/moving-guide" className="text-teal-800 hover:text-teal-400 transition">Moving Guide</Link></li>
              <li><Link href="/safety-tips" className="text-teal-800 hover:text-teal-400 transition">Safety Tips</Link></li>
              <li><Link href="/roommate-finder" className="text-teal-800 hover:text-teal-400 transition">Roommate Finder</Link></li>
              <li><Link href="/faq" className="text-teal-800 hover:text-teal-400 transition">FAQs</Link></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#340c83]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Image 
                  src={LocationIcon} 
                  alt="Location"
                  width={20}
                  height={20}
                  className="h-6 w-6 mr-3"
                />
                <span className="text-teal-800">Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018</span>
              </li>
              <li className="flex items-center">
                <Image 
                  src={EmailIcon} 
                  alt="Email"
                  width={20}
                  height={20}
                  className="h-6 w-6 mr-3"
                />
                <a href="mailto:contact.bachhouse@gmail.com" className="text-teal-800 hover:text-teal-400 transition">contact.bachhouse@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Image 
                  src={WhatsAppIcon} 
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="h-6 w-6 mr-3"
                />
                <a href="https://wa.me/919039031115" className="text-teal-800 hover:text-teal-400 transition">+91 903 903 1115</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile View  */}
        <div className="md:hidden">
          {/* Brand Info (always visible) */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center -ml-4">
              <Image 
                src={logoIcon} 
                alt="BachHouse Logo"
                width={80}
                height={80}
                className="-mr-4"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#5e17eb] to-blue-500 bg-clip-text text-transparent">
                BachHouse
              </span>
            </div>
            <p className="text-teal-800 text-sm">
              India's trusted platform connecting students with quality accommodations near educational institutions.
            </p>
            <div className="flex space-x-4 pt-1">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition">
                  <Image 
                    src={Icon} 
                    alt="Social Icon"
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Collapsible Sections */}
          {[
            {
              title: "Quick Links",
              content: (
                <ul className="space-y-2 pl-5">
                  <li><Link href="/properties" className="text-teal-800 hover:text-teal-400 transition text-sm">Browse Properties</Link></li>
                  <li><Link href="/list-property" className="text-teal-800 hover:text-teal-400 transition text-sm">List Your Property</Link></li>
                  <li><Link href="/about" className="text-teal-800 hover:text-teal-400 transition text-sm">About Us</Link></li>
                  <li><Link href="/blog" className="text-teal-800 hover:text-teal-400 transition text-sm">Blog</Link></li>
                  <li><Link href="/contact" className="text-teal-800 hover:text-teal-400 transition text-sm">Contact</Link></li>
                </ul>
              )
            },
            {
              title: "Student Resources",
              content: (
                <ul className="space-y-2 pl-5">
                  <li><Link href="/moving-guide" className="text-teal-800 hover:text-teal-400 transition text-sm">Moving Guide</Link></li>
                  <li><Link href="/safety-tips" className="text-teal-800 hover:text-teal-400 transition text-sm">Safety Tips</Link></li>
                  <li><Link href="/roommate-finder" className="text-teal-800 hover:text-teal-400 transition text-sm">Roommate Finder</Link></li>
                  <li><Link href="/faq" className="text-teal-800 hover:text-teal-400 transition text-sm">FAQs</Link></li>
                  <li><Link href="/testimonials" className="text-teal-800 hover:text-teal-400 transition text-sm">Testimonials</Link></li>
                </ul>
              )
            },
            {
              title: "Contact Us",
              content: (
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start">
                    <Image 
                      src={LocationIcon} 
                      alt="Location"
                      width={16}
                      height={16}
                      className="h-4 w-4 mt-1 mr-2"
                    />
                    <span className="text-teal-800 text-sm">Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018</span>
                  </li>
                  <li className="flex items-center">
                    <Image 
                      src={EmailIcon} 
                      alt="Email"
                      width={16}
                      height={16}
                      className="h-4 w-4 mr-2"
                    />
                    <a href="mailto:contact.bachhouse@gmail.com" className="text-teal-800 hover:text-teal-400 transition text-sm">contact.bachhouse@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <Image 
                      src={WhatsAppIcon} 
                      alt="WhatsApp"
                      width={16}
                      height={16}
                      className="h-4 w-4 mr-2"
                    />
                    <a href="https://wa.me/919039031115" className="text-teal-800 hover:text-teal-400 transition text-sm">+91 903 903 1115</a>
                  </li>
                </ul>
              )
            }
          ].map((section, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-3">
              <button 
                onClick={() => toggleSection(section.title)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-base font-semibold text-[#340c83]">{section.title}</h3>
                <svg 
                  className={`w-5 h-5 text-[#340c83] transition-transform ${openSection === section.title ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === section.title && (
                <div className="mt-2">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* End of Collapsible Sections */}
        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BachHouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;