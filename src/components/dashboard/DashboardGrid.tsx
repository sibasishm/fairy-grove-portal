
import { useState, useEffect } from 'react';
import { StatCard } from './StatCard';
import { CompetencyMap } from './CompetencyMap';
import { LearningProgress } from './LearningProgress';
import { 
  BrainCircuit, 
  GraduationCap, 
  Trophy, 
  Briefcase 
} from 'lucide-react';

export function DashboardGrid() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatCard 
        title="Competency Score" 
        value="87%" 
        subtitle="Top 10% in your group" 
        icon={BrainCircuit} 
        trend="up" 
        color="blue"
        delay={0}
        isLoaded={isLoaded}
      />
      
      <StatCard 
        title="Courses Completed" 
        value="12" 
        subtitle="4 in progress" 
        icon={GraduationCap} 
        trend="up" 
        color="green"
        delay={100}
        isLoaded={isLoaded}
      />
      
      <StatCard 
        title="Active Projects" 
        value="3" 
        subtitle="1 due this week" 
        icon={Briefcase} 
        trend="neutral" 
        color="purple"
        delay={200}
        isLoaded={isLoaded}
      />
      
      <StatCard 
        title="XP Points" 
        value="3,450" 
        subtitle="Level 7 Achiever" 
        icon={Trophy} 
        trend="up" 
        color="amber"
        delay={300}
        isLoaded={isLoaded}
      />
      
      <div className="md:col-span-2 lg:col-span-3 h-[400px]">
        <CompetencyMap isLoaded={isLoaded} delay={400} />
      </div>
      
      <div className="md:col-span-2 lg:col-span-1 h-[400px]">
        <LearningProgress isLoaded={isLoaded} delay={500} />
      </div>
    </div>
  );
}
