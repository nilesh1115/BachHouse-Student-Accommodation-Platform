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
├── app/                    # Next.js App Router pages
│   ├── all-properties/     # Property listing with filters
│   ├── property-details/   # Individual property pages
│   ├── owner/              # Owner dashboard and management
│   ├── blog/               # Blog articles and content
│   ├── moving-guide/       # Student relocation resources
│   └── api/                # API route handlers
├── components/             # Reusable UI components
│   ├── ui/                 # Base components (buttons, cards)
│   ├── layout/             # Layout components
│   └── features/           # Feature-specific components
├── lib/                    # Utility functions and configurations
├── models/                 # MongoDB data models
├── context/                # React context providers
└── public/                 # Static assets
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

### Code Quality
- ESLint configuration for code consistency
- Pre-commit hooks for quality checks
- Responsive design testing requirements

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

