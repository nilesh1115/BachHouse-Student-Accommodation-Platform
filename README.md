````markdown
# BachHouse  - Student Accommodation platform

BachHouse is a modern student accommodation platform built with Next.js that seamlessly connects students with property owners.  
It provides students with advanced property search tools and owners with a powerful property management dashboard — all wrapped in a clean, responsive, and performance-optimized interface.  

🔗 Visit BachHouse: https://bach-house-private-3d6m.vercel.app/
---

# Features  

#  For Students  
- Advanced Property Search: Filter by location, rent, type, and amenities  
- Detailed Property Listings: Photos, descriptions, and rent breakdowns  
- Property Details Page: Comprehensive info for informed decision-making  
- Moving Guide: Helpful resources for students moving to new places  

#  For Property Owners  
- Dashboard: Manage all properties in one place  
- Add Properties Easily: Simple listing form with images and amenities  
- Manage Listings: Update, edit, or remove existing listings  
- Inquiry Management: Handle and respond to student inquiries  

# General Features  
- Blog Section: Tips & insights for both students and owners  
- Contact System: Direct communication between users  
- Responsive UI: Optimized for mobile, tablet, and desktop  
- Fast Performance: Built with the latest **Next.js App Router**  

---

#  Tech Stack  

- Framework & Core: Next.js 15.3.1 (App Router), React 19.1.0  
- Styling & UI: Tailwind CSS, custom reusable components, responsive layout  
- Authentication & Security: Clerk (user auth), JWT for API authorization  
- Database & Storage: MongoDB with Mongoose ODM  
- Background Processing: Inngest (event-driven workflows), Cron jobs  
- API & Utilities: Axios (HTTP requests), React Hot Toast (notifications)  

---

# 📂 Project Structure  


bachhouse/
├── app/                    # App Router pages
│   ├── all-properties/     # Property listing page
│   ├── property-details/   # Dynamic property details
│   ├── owner/              # Owner dashboard
│   ├── blog/               # Blog page
│   ├── moving-guide/       # Moving guide
│   ├── contact-us/         # Contact page
│   └── ...                 # Other routes (auth, policies, etc.)
├── components/             # Reusable UI components
├── config/                 # DB & Inngest configuration
├── context/                # React context providers
├── lib/                    # Utility functions
├── models/                 # MongoDB data models
└── ...                     # Config & build files
````

---

## Installation & Setup

## Prerequisites

* Node.js (v18+)
* MongoDB Atlas (or local MongoDB)
* Clerk account (for authentication)
* Inngest account (for background jobs)

##  Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/bachhouse.git
   cd bachhouse
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root:

   ```text
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Inngest (background jobs)
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key

   # Application
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   * Frontend: [http://localhost:3000](http://localhost:3000)
   * API Routes: Available under `/api/`

---

## 📡 API Endpoints

###  Property Management

* `GET /api/property` → Fetch all properties
* `GET /api/property/list` → Paginated properties
* `GET /api/property/[id]` → Fetch single property
* `POST /api/property/add` → Add new property
* `GET /api/property/owner-list` → Get owner’s properties
* `POST /api/property/migrate` → Data migration

### 👤 User Management

* `GET /api/user/data` → Fetch user data

### ⚙️ Background Jobs

* `POST /api/inngest` → Handle Inngest webhooks

---

##  Key Components

* **Navbar & Footer** → Main layout & navigation
* **HeroSection** → Landing banner with CTA
* **PropertyCard & FeaturedProperties** → Display properties
* **FilterPanel & SearchBar** → Advanced search tools
* **Owner Dashboard** → Listings & inquiries management
* **Testimonials & StatsCounter** → Social proof & stats

---

## Deployment

**Vercel Deployment** (recommended):

1. Connect repo to Vercel
2. Add environment variables in dashboard
3. Deploy automatically on every push to `main`

---

## 📜 Scripts

* `npm run dev` → Start dev server
* `npm run build` → Build for production
* `npm run start` → Run production server
* `npm run lint` → Lint codebase

---


## 💬 Support

* 📧 Email:nileshnikam0501@gmail.com

