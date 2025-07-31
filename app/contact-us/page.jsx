// app/contact-us/page.jsx
"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Mail, Phone, Send, Building2, GraduationCap, User, MessageSquare, HelpCircle } from 'lucide-react';
// This page provides a contact form and FAQs for users to reach out to BachHouse
export default function ContactUs() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#5e17eb] to-[#4e13c7] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto text-center relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Let's Connect
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-gray-100">
              Your journey to finding the perfect Bachelor accommodation starts with a conversation. We're here to help!
            </p>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-2 sm:p-3 rounded-lg">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-[#5e17eb]" />
                  </div>
                  <div
                      className="cursor-pointer hover:text-green-600 transition"
                      onClick={() => {
                        window.open(
                          'https://wa.me/919039031115?text=Hello%20BachHouse%2C%20I%20came%20across%20your%20platform%20and%20would%20like%20to%20get%20in%20touch.',
                          '_blank'
                        );
                      }}
                    >
                    <h3 href="https://wa.me/919039031115" className="font-semibold text-gray-800">Chat with Us</h3>
                    <p className="text-sm text-gray-600">Get instant support</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-2 sm:p-3 rounded-lg">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#5e17eb]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">Call Us</h3>
                    <p className="text-xs sm:text-sm text-gray-600">+91-903 903 1115</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1 cursor-pointer"
                onClick={() => {
                  window.location.href = 'mailto:contact.bachhouse@gmail.com';
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#5e17eb]/10 p-2 sm:p-3 rounded-lg">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#5e17eb]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">Email Us</h3>
                    <p className="text-xs sm:text-sm text-gray-600">contact.bachhouse@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e17eb] focus:border-[#5e17eb] transition"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e17eb] focus:border-[#5e17eb] transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      I am a
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                      <select
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e17eb] focus:border-[#5e17eb] transition appearance-none"
                        required
                      >
                        <option value="">Select option</option>
                        <option value="student">Student</option>
                        <option value="owner">Property Owner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  // Message Textarea
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e17eb] focus:border-[#5e17eb] transition"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#5e17eb] hover:bg-[#4e13c7] text-white font-medium py-2 sm:py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#5e17eb]" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
                Find quick answers to common questions about BachHouse
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-[#5e17eb] transform transition-transform duration-200 flex-shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-4 sm:px-5 pb-4 sm:pb-5 pt-2 bg-white transition-all duration-300 ${activeFaq === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-[#5e17eb] to-[#4e13c7] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Find Your Perfect Accommodation?
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-gray-100">
                Browse through our verified properties and find your ideal student housing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link 
                  href="/all-properties" 
                  className="bg-white text-[#5e17eb] hover:bg-gray-100 font-medium py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  Explore Properties
                </Link>
                <Link 
                  href="/owner" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-[#5e17eb] font-medium py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  List Your Property
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
// FAQ items for the FAQ section
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