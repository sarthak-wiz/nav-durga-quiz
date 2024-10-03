import { Analytics } from "@vercel/analytics/react"
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary-light to-white">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-primary-dark text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen flex flex-col">
      <Analytics/>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div> 
  );
}