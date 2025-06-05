// assets/assets.js
import logo from '@/assets/logo.png';
import logoIcon from '@/assets/logoIcon.png';
import user_icon from '@/assets/user_icon.svg';
import bgimg from '@/assets/bgimg.png';
import enter from '@/assets/enter.jpg';
import search from '@/assets/search.jpg';
import contact from '@/assets/contact.jpg';
import property1_image from '@/assets/p1i1.jpg';
import property2_image from '@/assets/property2_image.jpeg';
import property3_image from '@/assets/p1i3.jpg';
import FacebookIcon from '@/assets/fb.png';
import InstagramIcon from '@/assets/instagram.png';
import TwitterIcon from '@/assets/x.png';
import LinkedinIcon from '@/assets/linkdin.png';
import WhatsAppIcon from '@/assets/Whatsapp.png';
import LocationIcon from '@/assets/location.png';
import EmailIcon from '@/assets/mail.png';
import propertyPlaceholder from '@/assets/property-placeholder.jpg';
import menuIcon from '@/assets/mobmenu.svg';
import closeIcon from '@/assets/closeicon.png';
import aboutusimg from '@/assets/aboutusimg.png';
import aboutuspng from '@/assets/aboutuspng.png';
import testimonialboy from '@/assets/testimonialboy.jpg';
import testimonialgirl from '@/assets/testimonialgirl.jpg';
import testimonialowner from '@/assets/testimonialowner.png';
// Dummy property data
const properties = [
  {
    id: 1,
    title: "1 RK flat for rent",
    image: property1_image,
    price: 3200,
    distance: 1.2,
    location: "YCM",  // Add this
    type: "Apartment",
    deposit:5000,
    gender: "Male",
    sharing: "between 2-3",
    furnishing: "Table and chair",
    amenities: ["WiFi", "balcony", "Parking", "Hot water"],
    availableFrom: "2023-06-01"
  },
  {
    id: 2,
    title: "Cozy PG for Girls",
    image: property2_image,
    images:[ property2_image,property1_image,property3_image],
    price: 3000,
    distance: 2.5,
    deposit:5000,
    location: "Pune Hinjewadi",
    coordinates: [18.6229, 73.8069],  
    type: "PG",
    available: true,
    gender: "Female",
    sharing: "Shared (2 beds)",
    furnishing: "Semi-Furnished",
    amenities: ["WiFi", "Laundry", "Meals"],
    availableFrom: "2023-05-15",
    ownerName: "Rahul Sharma",
    ownerPhone: "9876543210", 
    ownerEmail: "rahul@example.com"
  },
  {
    id: 3,
    title: "Modern Studio Flat",
    image: property3_image,
    price: 18000,
    deposit:5000,
    distance: 3.1,
    location: "Pune Hinjewadi",  // Add this
    type: "Flat",
    gender: "Unisex",
    sharing: "Private",
    furnishing: "Fully Furnished",
    amenities: ["WiFi", "AC", "Parking", "Gym"],
    availableFrom: "2023-06-10",
    ownerName: "Rahul Sharma",
    ownerPhone: "9876543210", 
    ownerEmail: "rahul@example.com"
  },
  // Add location to all other properties similarly
  {
    id: 4,
    title: "Budget PG for Boys",
    image: propertyPlaceholder,
    price: 8000,
    distance: 4.2,
    location: "Pune Hinjewadi",  // Add this
    type: "PG",
    deposit:5000,
    gender: "Male",
    sharing: "Shared (3 beds)",
    furnishing: "Basic",
    amenities: ["WiFi", "Laundry"],
    availableFrom: "2023-05-20"
  },
  {
    id: 5,
    title: "Premium Villa",
    image: propertyPlaceholder,
    price: 45000,
    distance: 5.0,
    type: "Villa",
    gender: "Unisex",
    location: "Pimpri",
    sharing: "Private",
    furnishing: "Luxury",
    amenities: ["WiFi", "AC", "Pool", "Gym", "Parking"],
    availableFrom: "2023-07-01"
  },
  {
    id: 6,
    title: "Shared Room in Hostel",
    image: propertyPlaceholder,
    price: 6000,
    distance: 1.8,
    type: "Hostel",
    location: "Pimpri",
    gender: "Male",
    sharing: "Shared (4 beds)",
    furnishing: "Basic",
    amenities: ["WiFi", "Laundry"],
    availableFrom: "2023-05-10"
  },
  {
    id: 7,
    title: "Executive Apartment",
    image: propertyPlaceholder,
    price: 30000,
    distance: 2.3,
    type: "Apartment",
    location: "Pune",
    gender: "Unisex",
    sharing: "Private",
    furnishing: "Fully Furnished",
    amenities: ["WiFi", "AC", "Parking", "Gym"],
    availableFrom: "2023-06-05"
  },
  {
    id: 8,
    title: "Girls PG with Food",
    image: propertyPlaceholder,
    price: 15000,
    distance: 3.7,
    type: "PG",
    location: "Akurdi",
    gender: "Female",
    sharing: "Shared (2 beds)",
    furnishing: "Semi-Furnished",
    amenities: ["WiFi", "Laundry", "Meals"],
    availableFrom: "2023-05-25"
  },
  {
    id: 9,
    title: "Compact Studio",
    image: propertyPlaceholder,
    price: 20000,
    distance: 1.5,
    type: "Studio",
    gender: "Unisex",
    sharing: "Private",
    location: "Sant tukaram nagar",
    furnishing: "Fully Furnished",
    amenities: ["WiFi", "AC", "Parking"],
    availableFrom: "2023-06-15"
  },
  {
    id: 10,
    title: "Boys Hostel Room",
    image: propertyPlaceholder,
    price: 7000,
    distance: 2.8,
    type: "Hostel",
    location: "Nehru Nagar",
    gender: "Male",
    sharing: "Shared (3 beds)",
    furnishing: "Basic",
    amenities: ["WiFi", "Laundry"],
    availableFrom: "2023-05-30"
  },
  {
    id: 11,
    title: "Luxury Penthouse",
    image: propertyPlaceholder,
    price: 60000,
    distance: 4.5,
    type: "Penthouse",
    location: "DPU",
    gender: "Unisex",
    sharing: "Private",
    furnishing: "Luxury",
    amenities: ["WiFi", "AC", "Pool", "Gym", "Parking"],
    availableFrom: "2023-07-15"
  },
  {
    id: 12,
    title: "Affordable PG",
    image: propertyPlaceholder,
    price: 9000,
    distance: 1.0,
    type: "PG",
    location: "YCM",
    gender: "Unisex",
    sharing: "Shared (2 beds)",
    furnishing: "Semi-Furnished",
    amenities: ["WiFi", "Laundry"],
    availableFrom: "2023-06-01"
  }
];

// Export individual assets
export {
  logo,
  logoIcon,
  user_icon,
  bgimg,
  enter,
  search,
  contact,
  property1_image,
  property2_image,
  property3_image,
  propertyPlaceholder,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  TwitterIcon,
  LocationIcon,
  aboutusimg,
  aboutuspng,
  EmailIcon,
  LinkedinIcon,
  testimonialboy,
  testimonialgirl,
  testimonialowner,
  properties
};

// Export grouped assets
export const assets = {
  logo,
  logoIcon,
  user_icon,
  menu_icon: menuIcon,
  close_icon: closeIcon,
  bgimg,
  howItWorks: {
    enter,
    search,
    contact
  },
  property1_image, 
  property2_image, 
  property3_image,
  propertyPlaceholder,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  LocationIcon,
  EmailIcon,
  LinkedinIcon,
  properties
};
export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);