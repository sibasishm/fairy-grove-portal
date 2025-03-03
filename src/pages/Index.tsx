
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { DashboardGrid } from '@/components/dashboard/DashboardGrid';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother initial experience
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <main className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        <div className="p-6 md:p-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, John. Here's an overview of your progress.
            </p>
          </div>
          
          <DashboardGrid />
        </div>
      </main>
    </div>
  );
};

export default Index;
