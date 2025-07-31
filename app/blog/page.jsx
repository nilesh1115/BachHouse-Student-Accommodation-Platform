import React from 'react';
import Link from 'next/link';

export default function BlogComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#5e17eb] mb-4">Blog</h1>
        <p className="text-gray-700 text-lg mb-6">Our blog is coming soon! 📝</p>
        <p className="text-gray-500 mb-8">We are preparing helpful articles and updates for you. Stay tuned!</p>
        <Link href="/" className="inline-block bg-[#5e17eb] hover:bg-[#4e13c7] text-white px-6 py-2 rounded-md font-medium transition-all duration-200">Back to Home</Link>
      </div>
    </div>
  );
} 