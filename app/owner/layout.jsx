import OwnerNavbar from '@/components/owner/Navbar';
import OwnerSidebar from '@/components/owner/Sidebar';
import OwnerFooter from '@/components/owner/Footer';

// This layout component wraps the owner pages with a consistent layout

export default function OwnerLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <OwnerNavbar />
      <div className="flex flex-1 pt-16">
        <OwnerSidebar />
        <main className="flex-1 flex flex-col ml-16 md:ml-64"> 
          <div className="flex-grow p-4 md:p-6 pr-8 md:pr-12"> 
            {children}
          </div>
          <OwnerFooter className="mt-auto" /> 
        </main>
      </div>
    </div>
  );
}