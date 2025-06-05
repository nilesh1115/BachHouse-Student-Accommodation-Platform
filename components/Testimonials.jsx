"use client";
import { Star, Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { testimonialboy,testimonialgirl,testimonialowner} from '@/assets/assets';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Krishna Naik",
      quote: "BachHouse made it super easy to find a PG near my college. Clean rooms, fair pricing, and no broker hassle!",
      rating: 5,
      tag: "Bachelor – DIT Pimpri",
      avatar: testimonialboy,
      stayType: "Premium PG in Pune"
    },
    {
      id: 2,
      name: "Swarali Patil",
      quote: "I moved to Pune for UPSC prep. BachHouse helped me find a peaceful place near my coaching center—safe, quiet, and budget-friendly!",
      rating: 4,
      tag: "UPSC Aspirant – Fergusson Area",
      avatar: testimonialgirl,
      stayType: "Private Room"
    },
    {
      id: 3,
      name: "Mr. Deshmukh",
      quote: "As an owner, I could easily list my property and get verified student inquiries. Hassle-free process and quick support!",
      rating: 5,
      tag: "Property Owner – Pimpri",
      avatar: testimonialowner,
      stayType: "3 Properties Listed"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#f0f9ff] relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-teal-100 rounded-full filter blur-3xl opacity-20 -translate-x-12 sm:-translate-x-20 -translate-y-12 sm:-translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-x-12 sm:translate-x-20 translate-y-12 sm:translate-y-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       
        {/* Header section */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-teal-100 text-teal-800 mb-3 sm:mb-4">
            Trusted by Students & Owners
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Real Stories. <span className="text-teal-600">Real Stays.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See what our community says about their BachHouse experience
          </p>
        </div>

        {/* Desktop testimonials grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl lg:rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2 flex flex-col h-full border border-gray-100"
            >
              <div className="mb-3 lg:mb-4 flex justify-between items-start">
                <Quote className="h-6 w-6 lg:h-8 lg:w-8 text-teal-500 opacity-70" />
                <span className="text-xs font-medium px-2 py-0.5 lg:py-1 rounded bg-gray-100 text-gray-600">
                  {testimonial.stayType}
                </span>
              </div>
              
              <blockquote className="text-gray-700 mb-4 lg:mb-6 flex-grow">
                <p className="text-base lg:text-lg italic relative pl-5 lg:pl-6 before:absolute before:left-0 before:top-0 before:text-3xl lg:before:text-4xl before:text-teal-500 before:opacity-20 before:content-[open-quote] before:font-serif">
                  {testimonial.quote}
                </p>
              </blockquote>
              
              <div className="flex mb-4 lg:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 lg:h-5 lg:w-5 ${i < testimonial.rating ? 'fill-[#f59e0b] text-[#f59e0b]' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-1 lg:ml-2 text-xs lg:text-sm text-gray-500">({testimonial.rating}.0)</span>
              </div>
              
              <div className="flex items-center mt-auto pt-3 lg:pt-4 border-t border-gray-100">
                <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-gray-100 overflow-hidden mr-3 lg:mr-4 border-2 border-teal-100">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5 lg:h-6 lg:w-6 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-sm lg:text-base text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs lg:text-sm text-gray-500">{testimonial.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile testimonial carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl p-5 shadow-md flex flex-col h-full border border-gray-100">
                    <div className="mb-3 flex justify-between items-start">
                      <Quote className="h-6 w-6 text-teal-500 opacity-70" />
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                        {testimonial.stayType}
                      </span>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-4 flex-grow">
                      <p className="text-base italic relative pl-5 before:absolute before:left-0 before:top-0 before:text-3xl before:text-teal-500 before:opacity-20 before:content-[open-quote] before:font-serif">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'fill-[#f59e0b] text-[#f59e0b]' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">({testimonial.rating}.0)</span>
                    </div>
                    
                    <div className="flex items-center mt-auto pt-3 border-t border-gray-100">
                      <div className="relative h-10 w-10 rounded-full bg-gray-100 overflow-hidden mr-3 border-2 border-teal-100">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.tag}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white p-1.5 rounded-full shadow-md"
          >
            <ChevronLeft className="h-4 w-4 text-teal-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white p-1.5 rounded-full shadow-md"
          >
            <ChevronRight className="h-4 w-4 text-teal-600" />
          </button>
          
          <div className="flex justify-center mt-3 gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-teal-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Ready to find your perfect stay?</p>
          <Link 
            href="/all-properties" 
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;