import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Trophy, 
  Clock, 
  Target, 
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Users,
  Box
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Custom icon for XP points
const XpIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M6 12h12" />
    <path d="m12 6 6 6-6 6" />
  </svg>
);

// Sample quests data
const questsData = [
  {
    id: 1,
    title: 'Digital Explorer',
    description: 'Complete 3 courses in the Digital Skills track',
    progress: 2,
    total: 3,
    xpReward: 500,
    deadline: '14 days',
    category: 'Learning',
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Project Maestro',
    description: 'Successfully complete your first project with a team',
    progress: 0,
    total: 1,
    xpReward: 1000,
    deadline: '30 days',
    category: 'Projects',
    status: 'not-started'
  },
  {
    id: 3,
    title: 'Feedback Champion',
    description: 'Provide meaningful feedback to 5 colleagues',
    progress: 3,
    total: 5,
    xpReward: 300,
    deadline: '21 days',
    category: 'Collaboration',
    status: 'in-progress'
  },
  {
    id: 4,
    title: 'Learning Streak',
    description: 'Complete learning activities for 7 consecutive days',
    progress: 5,
    total: 7,
    xpReward: 700,
    deadline: '2 days',
    category: 'Learning',
    status: 'in-progress'
  },
  {
    id: 5,
    title: 'Immersive Learning Pioneer',
    description: 'Complete your first VR training module',
    progress: 0,
    total: 1,
    xpReward: 800,
    deadline: '14 days',
    category: 'Immersive',
    status: 'not-started'
  },
  {
    id: 6,
    title: 'Knowledge Sharer',
    description: 'Create and share a learning resource with your team',
    progress: 1,
    total: 1,
    xpReward: 500,
    deadline: 'Completed',
    category: 'Collaboration',
    status: 'completed'
  }
];

const categoryIcons = {
  'Learning': BookOpen,
  'Projects': Target,
  'Collaboration': Users,
  'Immersive': Box
};

export function QuestBoard() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Learning': return 'bg-corporate-blue';
      case 'Projects': return 'bg-purple-600';
      case 'Collaboration': return 'bg-green-600';
      case 'Immersive': return 'bg-amber-500';
      default: return 'bg-slate-500';
    }
  };
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-corporate-green';
      case 'in-progress': return 'bg-amber-500';
      case 'not-started': return 'bg-slate-500';
      default: return 'bg-slate-500';
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {questsData.map((quest, index) => {
        const CategoryIcon = categoryIcons[quest.category] || Trophy;
        
        return (
          <Card 
            key={quest.id}
            className={cn(
              "border-2 transition-all duration-500 ease-out",
              quest.status === 'completed' ? 'border-corporate-green' : 'border-transparent',
              !visible && 'opacity-0 translate-y-8',
              visible && 'opacity-100 translate-y-0'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge className={cn("mb-2", getCategoryColor(quest.category))}>
                  <CategoryIcon size={12} className="mr-1" />
                  {quest.category}
                </Badge>
                <Badge variant={quest.status === 'completed' ? 'default' : 'outline'} className={cn(
                  getStatusColor(quest.status),
                  quest.status !== 'completed' && '!bg-transparent'
                )}>
                  {quest.status === 'completed' ? (
                    <span className="flex items-center">
                      <CheckCircle2 size={12} className="mr-1" />
                      Completed
                    </span>
                  ) : quest.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                </Badge>
              </div>
              <CardTitle>{quest.title}</CardTitle>
              <CardDescription>{quest.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{quest.progress}/{quest.total}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      quest.status === 'completed' 
                        ? 'bg-corporate-green' 
                        : 'bg-corporate-blue'
                    )}
                    style={{ 
                      width: visible ? `${(quest.progress / quest.total) * 100}%` : '0%' 
                    }}
                  />
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <XpIcon size={14} className="mr-1" />
                  <span>{quest.xpReward} XP</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{quest.deadline}</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant={quest.status === 'completed' ? 'outline' : 'default'} 
                className="w-full"
                disabled={quest.status === 'completed'}
              >
                {quest.status === 'completed' ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle2 size={16} className="mr-2" />
                    Completed
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    {quest.status === 'in-progress' ? 'Continue Quest' : 'Start Quest'}
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                )}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
