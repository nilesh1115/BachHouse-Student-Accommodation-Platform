# BachHouse - Student Accommodation Platform

BachHouse is a comprehensive, full-stack student accommodation platform built with modern web technologies. It bridges the gap between students seeking housing and property owners, providing an intuitive, feature-rich experience for both user groups.

## 🚀 Live Demo

**🔗 Production URL:** https://bach-house-private-3d6m.vercel.app/

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation Guide](#-installation-guide)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Development](#-development)
- [Contact](#-contact)

---

## 📖 Overview

BachHouse addresses the critical need for specialized student housing solutions by offering:
- **For Students**: Advanced property discovery with comprehensive filtering and detailed listings
- **For Property Owners**: Powerful dashboard for property management and tenant communication
- **Platform Features**: Blog, moving guides, and direct messaging system

The application is built with performance, scalability, and user experience as primary considerations.

---

## ✨ Key Features

### 🎓 Student-Focused Features
- **Advanced Property Search**: Filter by location, price range, property type, and amenities
- **Detailed Property Views**: High-resolution images, comprehensive descriptions, and transparent pricing
- **Moving Guide**: Curated resources for students relocating to new cities
- **Responsive Design**: Seamless experience across mobile, tablet, and desktop

### 🏠 Property Owner Features
- **Management Dashboard**: Centralized control for all property listings
- **Easy Listing Creation**: Streamlined form with image upload and amenity selection
- **Listing Management**: Edit, update, or remove properties with ease
- **Inquiry System**: Direct communication channel with potential tenants

### 🌐 Platform Features
- **Secure Authentication**: Role-based access control
- **Blog System**: Educational content for students and owners
- **Contact Management**: Built-in messaging system
- **Performance Optimized**: Fast loading times and smooth interactions

---

## 🛠 Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15.3.1 (App Router) |
| **Frontend** | React 19.1.0, Tailwind CSS |
| **Authentication** | Clerk |
| **Database** | MongoDB with Mongoose ODM |
| **Background Jobs** | Inngest |
| **HTTP Client** | Axios |
| **Notifications** | React Hot Toast |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
bachhouse/
├── app/                           # Next.js App Router
│   ├── about-us/                  # About us page
│   ├── all-properties/            # Property listing with filters
│   ├── api/                       # API route handlers
│   │   ├── inngest/               # Background job handlers
│   │   ├── property/              # Property management APIs
│   │   │   ├── [id]/              # Dynamic property routes
│   │   │   ├── add/               # Add new property
│   │   │   ├── list/              # Property listing
│   │   │   ├── migrate/           # Data migration
│   │   │   ├── owner-list/        # Owner's properties
│   │   │   └── route.js           # Main property routes
│   │   └── user/data/             # User data endpoints
│   ├── blog/                      # Blog articles
│   ├── contact-us/                # Contact page
│   ├── moving-guide/              # Student relocation resources
│   ├── owner/                     # Owner dashboard section
│   │   ├── inquiries/             # Inquiry management
│   │   ├── my-listings/           # Owner's property listings
│   │   ├── layout.jsx             # Owner layout
│   │   └── page.jsx               # Owner dashboard main page
│   ├── privacy-policy/            # Privacy policy page
│   ├── property-details/[id]/     # Dynamic property details
│   ├── roommate-finder/           # Roommate matching feature
│   ├── sign-in/                   # Authentication
│   ├── terms-of-service/          # Terms and conditions
│   ├── globals.css                # Global styles
│   ├── layout.js                  # Root layout
│   └── page.jsx                   # Homepage
├── components/                    # Reusable UI components
│   ├── owner/                     # Owner-specific components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── CTAButton.jsx              # Call-to-action buttons
│   ├── FeaturedProperties.js      # Featured property listings
│   ├── FilterPanel.jsx            # Property filtering
│   ├── Footer.jsx                 # Site footer
│   ├── HeroSection.jsx            # Landing hero section
│   ├── HowItWorks.jsx             # Process explanation
│   ├── LoadingSpinner.js          # Loading indicators
│   ├── Navbar.jsx                 # Navigation header
│   ├── PropertyCard.jsx           # Property display cards
│   ├── SearchBar.jsx              # Search functionality
│   ├── StatsCounter.jsx           # Statistics display
│   ├── TestimonialCard.jsx        # Individual testimonials
│   └── Testimonials.jsx           # Testimonials section
├── config/                        # Configuration files
│   ├── db.js                      # Database configuration
│   └── inngest.js                 # Background jobs setup
├── context/                       # React context providers
│   └── AppContext.jsx             # Main application context
├── lib/                           # Utility libraries
│   ├── authOwner.js               # Owner authentication
│   └── db.js                      # Database utilities
├── models/                        # MongoDB data models
│   ├── Property.js                # Property schema
│   └── User.js                    # User schema
├── public/                        # Static assets
│   ├── assets/                    # Images and icons
│   │   ├── aboutusing.png
│   │   ├── aboutus.png.png
│   │   ├── assets.js
│   │   ├── bgimg.png
│   │   ├── closeicon.png
│   │   ├── contact.jpg
│   │   ├── enter.jpg
│   │   └── lb.png
│   └── favicon.ico                # Site favicon
├── .env                           # Environment variables
├── .gitignore                     # Git ignore rules
├── eslint.config.mjs              # ESLint configuration
├── jsconfig.json                  # JavaScript configuration
├── middleware.ts                  # Next.js middleware
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.mjs             # PostCSS configuration
└── README.md                      # Project documentation
```

---

## ⚙️ Installation Guide

### Prerequisites
- Node.js 18.0 or higher
- MongoDB Atlas account or local MongoDB instance
- Clerk account for authentication
- Inngest account for background jobs

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/bachhouse.git
   cd bachhouse
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create `.env.local` file with the following variables:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Background Jobs
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key

   # Application
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - The application will automatically create necessary collections

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Application will be available at: http://localhost:3000

---

## 📡 API Documentation

### Property Management Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/property` | Retrieve all properties |
| `GET` | `/api/property/list` | Paginated property list |
| `GET` | `/api/property/[id]` | Get specific property details |
| `POST` | `/api/property/add` | Create new property listing |
| `GET` | `/api/property/owner-list` | Get properties by owner |
| `POST` | `/api/property/migrate` | Data migration utilities |

### User Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/user/data` | Retrieve user profile data |

### Background Jobs
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/inngest` | Handle background job webhooks |

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Vercel

2. **Configure Environment Variables**
   - Add all environment variables in Vercel dashboard

3. **Deploy**
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests

### Manual Build
```bash
npm run build
npm start
```

---

## 🛠 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
```

### Key Components Overview

- **Layout Components**: Responsive navigation and footer
- **Property Components**: Cards, filters, and search functionality
- **Owner Dashboard**: Complete property management interface
- **API Routes**: RESTful endpoints for data management
- **Context Providers**: State management across the application

### Code Quality Standards
- ESLint configuration for consistent code style
- Component-based architecture for reusability
- Responsive design principles
- Performance optimization practices

---

## 🤝 Contributing

While this is a personal project, contributions and suggestions are welcome. Please ensure:
- Code follows existing style patterns
- All tests pass
- New features include appropriate documentation

---

## 📞 Contact

**Nilesh Nikam**  
📧 Email: nileshnikam0501@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/nilesh-nikam-99b338214/

---

**Built with modern web technologies and industry best practices, featuring a scalable architecture and professional code organization.**
