
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Clock, GraduationCap, Star, Tag, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Sample course data
const coursesData = [
  {
    id: 1,
    title: 'UX Design Fundamentals',
    description: 'Learn the core principles of user experience design',
    progress: 100,
    status: 'completed',
    duration: '8 hours',
    category: 'Design',
    rating: 4.8,
    featured: true,
    tags: ['UX', 'Design Thinking', 'User Research'],
    hasVR: false
  },
  {
    id: 2,
    title: 'Advanced Project Management',
    description: 'Master agile methodologies and leadership techniques',
    progress: 65,
    status: 'in-progress',
    duration: '12 hours',
    category: 'Management',
    rating: 4.6,
    featured: false,
    tags: ['Agile', 'Leadership', 'Risk Management'],
    hasVR: false
  },
  {
    id: 3,
    title: 'Data Analytics Basics',
    description: 'Introduction to data analysis and visualization tools',
    progress: 32,
    status: 'in-progress',
    duration: '10 hours',
    category: 'Analytics',
    rating: 4.7,
    featured: false,
    tags: ['Data Science', 'Python', 'Tableau'],
    hasVR: false
  },
  {
    id: 4,
    title: 'Manufacturing Safety VR Training',
    description: 'Immersive virtual reality training for plant safety protocols',
    progress: 20,
    status: 'in-progress',
    duration: '6 hours',
    category: 'Manufacturing',
    rating: 4.9,
    featured: true,
    tags: ['Safety', 'VR', 'Compliance'],
    hasVR: true
  },
  {
    id: 5,
    title: 'Leadership Essentials',
    description: 'Develop core leadership competencies for managerial roles',
    progress: 0,
    status: 'not-started',
    duration: '15 hours',
    category: 'Leadership',
    rating: 4.5,
    featured: true,
    tags: ['Communication', 'Team Building', 'Strategy'],
    hasVR: false
  },
  {
    id: 6,
    title: 'AR Machine Maintenance',
    description: 'Learn machine maintenance procedures using augmented reality',
    progress: 0,
    status: 'not-started',
    duration: '8 hours',
    category: 'Technical',
    rating: 4.8,
    featured: false,
    tags: ['AR', 'Maintenance', 'Equipment'],
    hasVR: true
  }
];

export function CoursesList() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coursesData.map((course, index) => (
        <div 
          key={course.id}
          className={cn(
            "card-glass rounded-xl overflow-hidden transition-all duration-500 ease-out",
            !visible && 'opacity-0 translate-y-8',
            visible && 'opacity-100 translate-y-0'
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
            {/* Course thumbnail would go here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen size={48} className="text-slate-400" />
            </div>
            
            {course.featured && (
              <Badge className="absolute top-2 left-2 bg-corporate-blue">
                Featured
              </Badge>
            )}
            
            {course.hasVR && (
              <Badge className="absolute top-2 right-2 bg-purple-600">
                VR/AR
              </Badge>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-200 dark:bg-slate-700">
              <div 
                className={cn(
                  "h-full transition-all duration-1000",
                  course.status === 'completed' ? 'bg-corporate-green' : 'bg-corporate-blue'
                )}
                style={{ 
                  width: visible ? `${course.progress}%` : '0%' 
                }}
              />
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <div className="flex items-center text-amber-500">
                <Star size={16} className="fill-amber-500" />
                <span className="ml-1 text-sm">{course.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {course.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag size={12} className="mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={14} className="mr-1" />
                {course.duration}
              </div>
              <Button variant="default" size="sm" className="flex items-center gap-1">
                {course.status === 'not-started' ? 'Start' : 'Continue'}
                <ArrowUpRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
