
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { CheckCircle2, Clock, GraduationCap } from 'lucide-react';

interface LearningProgressProps {
  isLoaded: boolean;
  delay: number;
}

const recentCourses = [
  { name: 'UX Design Fundamentals', status: 'completed', progress: 100 },
  { name: 'Advanced Project Management', status: 'in-progress', progress: 65 },
  { name: 'Data Analytics Basics', status: 'in-progress', progress: 32 },
];

const learningData = [
  { month: 'Jan', courses: 1 },
  { month: 'Feb', courses: 2 },
  { month: 'Mar', courses: 1 },
  { month: 'Apr', courses: 3 },
  { month: 'May', courses: 2 },
  { month: 'Jun', courses: 4 },
];

export function LearningProgress({ isLoaded, delay }: LearningProgressProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, delay]);
  
  return (
    <div 
      className={cn(
        'card-glass rounded-xl h-full p-6 transform transition-all duration-500 ease-out',
        !visible && 'opacity-0 translate-y-8',
        visible && 'opacity-100 translate-y-0'
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Learning Progress</h3>
        <GraduationCap size={20} className="text-corporate-blue" />
      </div>
      
      <div className="h-[140px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={learningData}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)', 
                borderColor: 'var(--border)',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }} 
            />
            <Bar 
              dataKey="courses" 
              fill="#0A74DA" 
              radius={[4, 4, 0, 0]} 
              animationBegin={visible ? 0 : 9999}
              animationDuration={1200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <h4 className="text-sm font-medium mb-3">Recent Courses</h4>
      
      <div className="space-y-3">
        {recentCourses.map((course) => (
          <div key={course.name} className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{course.name}</span>
              {course.status === 'completed' ? (
                <CheckCircle2 size={16} className="text-corporate-green" />
              ) : (
                <Clock size={16} className="text-amber-500" />
              )}
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-1000",
                  course.status === 'completed' 
                    ? 'bg-corporate-green' 
                    : 'bg-corporate-blue'
                )}
                style={{ 
                  width: visible ? `${course.progress}%` : '0%' 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
