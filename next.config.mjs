/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      // Remove problematic attributes during build
      reactRemoveProperties: { 
        properties: [
          '^fdprocessedid$', // Removes fdprocessedid attributes
          '^data-lpignore$', // Also common from password managers
        ]
      },
      // Or alternatively, suppress hydration warnings for these attributes
      // styledComponents: true, // If you're using styled-components
    }
  };
  
  export default nextConfig;