import React from 'react';
import { FaHome, FaEye, FaBullseye, FaUserGraduate, FaUserTie, FaSearch, FaShieldAlt, FaComments, FaMapMarkerAlt, FaRupeeSign, FaBook, FaBriefcase, FaBuilding, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { aboutusimg, aboutuspng } from '@/assets/assets';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#5e17eb]/5 to-[#4e13c7]/5 px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
              Welcome to <span className="text-[#5e17eb]">BachHouse</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#5e17eb] font-medium mb-3 sm:mb-4">
              Your Home Away From Home
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed">
              BachHouse is India's premier accommodation platform dedicated to bachelors, offering verified, affordable, and comfortable living spaces near educational institutions and workplaces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href="/all-properties"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#5e17eb] text-white font-semibold rounded-lg shadow-md hover:bg-[#4e13c7] hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Find Your Space
              </Link>
              <Link
                href="/contact-us"
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#5e17eb] text-[#5e17eb] font-semibold rounded-lg hover:bg-[#5e17eb]/5 hover:shadow-sm transition-all duration-300 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src={aboutusimg} 
                alt="Modern bachelor accommodation"
                width={600}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Story
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#5e17eb] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Born from the challenges faced by bachelors in finding suitable accommodation
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-[#5e17eb]/10 p-1 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <FaHome className="text-[#5e17eb] text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    The Challenge
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  We witnessed the struggles of bachelors in finding safe, affordable, and well-maintained accommodations. From fake listings to unverified properties, the rental market was fraught with challenges.
                </p>
              </div>
              
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-[#5e17eb]/10 p-1 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <FaSearch className="text-[#5e17eb] text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    Our Solution
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  BachHouse was created to revolutionize the rental experience. We verify every property, ensure transparent pricing, and provide a seamless platform for bachelors to find their perfect living space.
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

      {/* Vision & Mission Section */}
      <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-[#5e17eb]">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-[#5e17eb]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <FaEye className="text-[#5e17eb] text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To become India's most trusted platform for bachelor accommodations, making quality living spaces accessible to every bachelor across the country.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-[#5e17eb]">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-[#5e17eb]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <FaBullseye className="text-[#5e17eb] text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-1 sm:p-2 rounded-full mt-1">
                    <FaCheckCircle className="text-[#5e17eb] text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Provide verified, safe, and comfortable accommodations
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-1 sm:p-2 rounded-full mt-1">
                    <FaCheckCircle className="text-[#5e17eb] text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Ensure transparent pricing and no hidden charges
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-1 sm:p-2 rounded-full mt-1">
                    <FaCheckCircle className="text-[#5e17eb] text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Create a seamless booking experience
                  </span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-1 sm:p-2 rounded-full mt-1">
                    <FaCheckCircle className="text-[#5e17eb] text-base sm:text-lg" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Build a community of satisfied bachelors and property owners
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Why Choose BachHouse?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#5e17eb] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We're committed to making your accommodation search hassle-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: <FaShieldAlt />, title: "Verified Properties", text: "Every listing undergoes thorough verification for your safety and peace of mind." },
              { icon: <FaRupeeSign />, title: "Transparent Pricing", text: "No hidden charges or surprise fees. Clear pricing from day one." },
              { icon: <FaBuilding />, title: "Quality Living", text: "Carefully selected properties with essential amenities for comfortable living." },
              { icon: <FaComments />, title: "24/7 Support", text: "Round-the-clock assistance for all your accommodation needs." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border-b-2 sm:border-b-4 border-[#5e17eb]">
                <div className="text-[#5e17eb] text-3xl sm:text-4xl mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Who We Serve
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#5e17eb] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Tailored solutions for every bachelor's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: <FaUserGraduate />, title: "College Students", text: "Comfortable PGs and hostels near educational institutions with study-friendly environments." },
              { icon: <FaBook />, title: "Competitive Aspirants", text: "Peaceful accommodations near coaching centers with minimal distractions." },
              { icon: <FaUserTie />, title: "Working Professionals", text: "Modern living spaces near tech parks and business districts." },
              { icon: <FaBriefcase />, title: "Job Seekers", text: "Flexible short-term stays during your career transition." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-[#5e17eb] text-3xl sm:text-4xl mb-4 sm:mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#5e17eb] to-[#4e13c7] px-4 py-12 sm:px-6 sm:py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Find Your Perfect Space?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/30 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            Join thousands of bachelors who found their ideal accommodation through BachHouse
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/all-properties"
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-[#5e17eb] font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact-us"
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;