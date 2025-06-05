import React from 'react';
import { FaHome, FaEye, FaBullseye, FaUserGraduate, FaUserTie, FaSearch, FaShieldAlt, FaComments, FaMapMarkerAlt, FaRupeeSign, FaBook, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { aboutusimg, aboutuspng } from '@/assets/assets';
import Link from 'next/link';
const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />

      {/* Hero Section - Optimized for mobile */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
              Welcome to <span className="text-[#5e17eb]">BachHouse</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-600 font-medium mb-3 sm:mb-4">
              Because every bachelor deserves a space that feels like home
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed">
              BachHouse is India's dedicated accommodation platform designed for students, aspirants, and professionals seeking reliable, budget-friendly housing near colleges, coaching hubs, and workplaces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
  <Link
    href="/all-properties"
    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
  >
    Explore Properties
  </Link>
  
  <Link
    href="/contact-us"
    className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:shadow-sm transition-all duration-300 text-sm sm:text-base"
  >
    Contact Us
  </Link>
</div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src={aboutusimg} 
                alt="Diverse group of bachelors in comfortable living spaces"
                width={600}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Mobile optimized */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Simplifying Housing for India's Bachelor Community
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Life as a bachelor comes with enough transitions — finding a good place to live shouldn't be another one.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <FaHome className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    Our Founding Principle
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  BachHouse was founded with a single goal: to ease the rental search for India's vast bachelor community. Whether you're pursuing education, chasing your first job, or preparing for a competitive exam, we offer a smarter way to find housing tailored to your lifestyle.
                </p>
              </div>
              
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <FaSearch className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    The Problem We Solved
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We saw the struggle — fake listings, lack of transparency, unreliable agents — and created a user-first solution that connects tenants with verified property owners in just a few taps.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-6 sm:mt-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={aboutuspng} 
                  alt="BachHouse team working"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Mobile optimized */}
      <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-500">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <FaEye className="text-blue-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To become India's most trusted housing platform for bachelors, enabling them to live confidently, comfortably, and independently.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-indigo-500">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <FaBullseye className="text-indigo-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-50 p-1 sm:p-2 rounded-full mt-1">
                    <FaHome className="text-blue-600 text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Curate verified, well-suited rental options across urban and educational hubs.
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-50 p-1 sm:p-2 rounded-full mt-1">
                    <FaSearch className="text-blue-600 text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Deliver a seamless, mobile-friendly digital experience.
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-50 p-1 sm:p-2 rounded-full mt-1">
                    <FaComments className="text-blue-600 text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Enable direct, transparent communication between tenants and owners.
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-50 p-1 sm:p-2 rounded-full mt-1">
                    <FaShieldAlt className="text-blue-600 text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Prioritize safety, affordability, and trust in every interaction.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section - Mobile optimized */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              What Makes BachHouse Different?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We go beyond just listings. We provide peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: <FaShieldAlt />, title: "Verified Listings", text: "All properties undergo a thorough verification process to ensure authenticity." },
              { icon: <FaComments />, title: "Direct Inquiries", text: "Instantly connect with property owners without middlemen or hidden fees." },
              { icon: <FaMapMarkerAlt />, title: "Multi-City Reach", text: "Serving major college towns and business zones across India." },
              { icon: <FaRupeeSign />, title: "Budget-Focused", text: "Housing options for every budget and specific needs." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border-b-2 sm:border-b-4 border-blue-500">
                <div className="text-blue-600 text-3xl sm:text-4xl mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section - Mobile optimized */}
      <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Who We Help
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We cater to a diverse set of bachelor needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: <FaUserGraduate />, title: "Students", text: "Hostels & PGs close to colleges and universities with all necessary amenities." },
              { icon: <FaBook />, title: "Aspirants", text: "Quiet, study-focused spaces near coaching centers with minimal distractions." },
              { icon: <FaUserTie />, title: "Professionals", text: "Rentals near tech parks and offices with convenient commute options." },
              { icon: <FaBriefcase />, title: "Job Seekers", text: "Short-term flexible stays during transitions with easy move-in options." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-blue-600 text-3xl sm:text-4xl mb-4 sm:mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Mobile optimized */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-12 sm:px-6 sm:py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Find Your Perfect Space?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-300 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            Let us help you settle in, so you can focus on what truly matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
            <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg">
              Explore Properties
            </button>
            <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:bg-opacity-10 hover:shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;