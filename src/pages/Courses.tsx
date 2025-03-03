
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { CoursesList } from '@/components/courses/CoursesList';
import { Filter, BookOpen, ArrowDownUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Courses = () => {
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
            <h1 className="text-3xl font-semibold mb-2">Learning Hub</h1>
            <p className="text-muted-foreground">
              Explore personalized courses and immersive learning experiences
            </p>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowDownUp size={16} />
                <span>Sort</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Recommended for You</span>
              </Button>
            </div>
          </div>
          
          <CoursesList />
        </div>
      </main>
    </div>
  );
};

export default Courses;
