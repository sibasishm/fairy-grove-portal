
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { ProjectsList } from '@/components/projects/ProjectsList';
import { Filter, Briefcase, SortAscending } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
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
            <h1 className="text-3xl font-semibold mb-2">Projects Hub</h1>
            <p className="text-muted-foreground">
              Discover opportunities to apply your skills and collaborate
            </p>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <SortAscending size={16} />
                <span>Sort</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="flex items-center gap-2">
                <Briefcase size={16} />
                <span>Recommended for You</span>
              </Button>
            </div>
          </div>
          
          <ProjectsList />
        </div>
      </main>
    </div>
  );
};

export default Projects;
