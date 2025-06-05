import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const MovingGuidePage = () => {
  return (
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              🚚 Bachelor's Moving Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your stress-free checklist for moving into a new place
            </p>
            <div className="mt-6 w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </header>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Section 1 - Rent Details */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-blue-600 text-xl">💬</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Rent Details</h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex">
                  <span className="text-blue-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Confirm <strong>rent amount</strong>, <strong>due date</strong>, and payment method
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Ask about <strong>hidden charges</strong> (electricity, maintenance, Wi-Fi)
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Get everything in <strong>signed agreement</strong> — no verbal deals
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Clarify <strong>notice period</strong> and rent increase rules
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 2 - Deposit & Refund */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-green-600 text-xl">💸</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Deposit & Refund</h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex">
                  <span className="text-green-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Confirm <strong>security deposit</strong> amount and refund process
                  </span>
                </li>
                <li className="flex">
                  <span className="text-green-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Understand <strong>deduction policies</strong> for damages/unpaid bills
                  </span>
                </li>
                <li className="flex">
                  <span className="text-green-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Take <strong>photos/videos</strong> of property before moving in
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 3 - Room Condition */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <span className="text-amber-600 text-xl">🛏️</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Room Condition</h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex">
                  <span className="text-amber-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Inspect all <strong>furniture</strong> (bed, mattress, fan, lights, cupboard)
                  </span>
                </li>
                <li className="flex">
                  <span className="text-amber-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Check <strong>electricals and plumbing</strong> (switches, taps, geyser)
                  </span>
                </li>
                <li className="flex">
                  <span className="text-amber-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    <strong>Report any damage</strong> immediately with photo proof
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 - Utility Bills */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <span className="text-purple-600 text-xl">🧾</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Utility Bills</h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex">
                  <span className="text-purple-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Clarify who pays for <strong>electricity, gas, water, internet</strong>
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Ask if bills are <strong>separate or included</strong> in rent
                  </span>
                </li>
                <li className="flex">
                  <span className="text-purple-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Check if there's an <strong>electricity meter</strong> and how it's calculated
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 5 - Safety & Access */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-red-600 text-xl">🔒</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Safety & Access</h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex">
                  <span className="text-red-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Check for <strong>working locks</strong>, secure windows, and neighborhood safety
                  </span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Confirm if you get <strong>your own key</strong> or shared access
                  </span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Ensure no unreasonable <strong>entry/exit restrictions</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 6 - House Rules */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <span className="text-indigo-600 text-xl">🗣️</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">House Rules</h2>
              </div>
              <ul className="space-y-3 pl-2">
                <li className="flex">
                  <span className="text-indigo-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Clarify <strong>guest policy</strong> and any <strong>cooking rules</strong>
                  </span>
                </li>
                <li className="flex">
                  <span className="text-indigo-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Understand policies around <strong>parties, loud music</strong>, or appliances
                  </span>
                </li>
                <li className="flex">
                  <span className="text-indigo-500 mr-3 mt-1 shrink-0">•</span>
                  <span className="text-gray-700">
                    Know your rights — <strong>don't agree to unfair terms</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Pro Tips Section - Full Width */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-400">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👥</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Pro Tips</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                    Talk to Previous Tenants
                  </h3>
                  <p className="text-gray-600 pl-9">
                    Ask about the owner's behavior, how quickly they respond to repair requests, and any major issues they faced during their stay.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                    Essential Contacts
                  </h3>
                  <p className="text-gray-600 pl-9">
                    Save the owner's number, caretaker contact, and local services like tiffin providers, laundry, and nearby medical facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Tip - Golden Rule */}
            <div className="md:col-span-2 bg-[#FFD700] p-6 rounded-xl text-black">
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-white text-blue-600 p-3 rounded-full mb-4 md:mb-0 md:mr-6 shrink-0">
                  <span className="text-2xl">📌</span>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl text-[#1A1A1A] font-bold mb-3">Golden Rule</h2>
                  <p className="opacity-90 text-lg leading-relaxed">
                    "Never rush into moving. Take photos of everything, get all agreements in writing, 
                    and clarify every doubt beforehand. One thorough inspection can prevent a year of headaches."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
  );
};

export default MovingGuidePage;