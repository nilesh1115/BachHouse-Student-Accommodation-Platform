// app/contact-us/page.jsx
"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactUs() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We're here to help you find your perfect student accommodation or manage your property listings.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Form */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Send Us a Message
                  </h2>
                  <form className="space-y-4 md:space-y-5">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2">
                        I am a
                      </label>
                      <select
                        className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                      >
                        <option value="">Select option</option>
                        <option value="student">Student</option>
                        <option value="owner">Property Owner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 md:py-3 px-4 rounded-lg transition duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                
                {/* Right Side - Contact Info */}
                <div className="w-full lg:w-1/2 bg-indigo-50 p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-800">Our Location</h3>
                        <p className="text-sm md:text-base text-gray-600">Pimpri, Pune, Maharashtra</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-800">Email Us</h3>
                        <p className="text-sm md:text-base text-gray-600">support@bachhouse.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-800">Call Us</h3>
                        <p className="text-sm md:text-base text-gray-600">+91-9876543210</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                Find quick answers to common questions about BachHouse
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 text-indigo-600 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-4 md:px-6 pb-4 md:pb-6 pt-0 md:pt-2 bg-white transition-all duration-300 ${activeFaq === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-sm md:text-base text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Properties Section */}
        <section className="py-12 md:py-16 bg-indigo-700 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Ready to Find Your Perfect Accommodation?
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
                Browse through our verified properties and find your ideal student housing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link 
                  href="/all-properties" 
                  className="bg-white text-indigo-700 hover:bg-gray-100 font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-200 text-sm md:text-base"
                >
                  Explore Properties
                </Link>
                <Link 
                  href="/owner" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-700 font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-200 text-sm md:text-base"
                >
                  List Your Property
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const faqItems = [
  {
    question: "Is BachHouse free for students?",
    answer: "✅ Yes, searching and inquiring about properties is completely free for students. We believe in making the accommodation search process as accessible as possible."
  },
  {
    question: "How do I find suitable accommodation?",
    answer: "🔎 Use our advanced filters on the Properties page to search by type (room, PG, flat), rent range, amenities, and preferred location. You can save your favorite listings and compare them side by side."
  },
  {
    question: "Can I directly contact property owners?",
    answer: "📞 For your safety and privacy, we handle initial inquiries through our platform. Owner contact details are shared only after mutual agreement and verification when necessary. This helps maintain trust and security for both parties."
  },
  {
    question: "How quickly will I get a response to my inquiry?",
    answer: "⏱️ Our team typically responds within 24 hours on business days. During peak seasons, response times may be slightly longer, but we prioritize student inquiries to ensure you get timely assistance."
  },
  {
    question: "Are all property listings verified?",
    answer: "🛡️ Yes. Each listing undergoes a thorough verification process including documentation checks, photos verification, and sometimes physical visits to ensure accuracy and safety standards. We continuously monitor listings for quality assurance."
  },
  {
    question: "What if I have issues with a property after moving in?",
    answer: "🛠️ Please report any concerns through our contact form or to your assigned support representative. We mediate between students and owners to resolve issues professionally. For urgent matters, you can call our support line for immediate assistance."
  }
];