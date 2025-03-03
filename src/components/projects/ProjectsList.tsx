
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Briefcase, 
  Calendar, 
  Users, 
  Tag, 
  ArrowUpRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Digital Transformation Initiative',
    description: 'Implement digital solutions to streamline customer onboarding',
    deadline: 'Jun 15, 2023',
    status: 'active',
    teamSize: 5,
    department: 'Digital',
    skills: ['Project Management', 'Digital Strategy', 'Change Management'],
    isRecommended: true
  },
  {
    id: 2,
    title: 'Supply Chain Optimization',
    description: 'Analyze and improve logistics processes to reduce costs',
    deadline: 'Jul 30, 2023',
    status: 'active',
    teamSize: 8,
    department: 'Operations',
    skills: ['Data Analysis', 'Logistics', 'Process Improvement'],
    isRecommended: false
  },
  {
    id: 3,
    title: 'Employee Engagement Survey',
    description: 'Design and implement an organization-wide engagement survey',
    deadline: 'Aug 10, 2023',
    status: 'active',
    teamSize: 3,
    department: 'HR',
    skills: ['Survey Design', 'Data Analysis', 'Change Management'],
    isRecommended: true
  },
  {
    id: 4,
    title: 'Product Launch Campaign',
    description: 'Develop marketing campaign for new product line launch',
    deadline: 'Sep 5, 2023',
    status: 'active',
    teamSize: 6,
    department: 'Marketing',
    skills: ['Marketing Strategy', 'Content Creation', 'Campaign Management'],
    isRecommended: false
  },
  {
    id: 5,
    title: 'Cost Reduction Analysis',
    description: 'Identify opportunities to optimize operational expenses',
    deadline: 'Jul 20, 2023',
    status: 'completed',
    teamSize: 4,
    department: 'Finance',
    skills: ['Financial Analysis', 'Cost Management', 'Reporting'],
    isRecommended: false
  },
  {
    id: 6,
    title: 'Customer Experience Improvement',
    description: 'Analyze customer journey and implement improvements',
    deadline: 'Aug 25, 2023',
    status: 'active',
    teamSize: 7,
    department: 'Customer Service',
    skills: ['Customer Journey Mapping', 'UX Research', 'Service Design'],
    isRecommended: true
  }
];

export function ProjectsList() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <div 
          key={project.id}
          className={cn(
            "card-glass rounded-xl overflow-hidden transition-all duration-500 ease-out",
            !visible && 'opacity-0 translate-y-8',
            visible && 'opacity-100 translate-y-0'
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
            {/* Project thumbnail would go here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Briefcase size={48} className="text-slate-400" />
            </div>
            
            {project.isRecommended && (
              <Badge className="absolute top-2 left-2 bg-corporate-blue">
                Recommended
              </Badge>
            )}
            
            <Badge 
              className={cn(
                "absolute top-2 right-2",
                project.status === 'active' ? 'bg-amber-500' : 'bg-corporate-green'
              )}
            >
              {project.status === 'active' ? 'Active' : 'Completed'}
            </Badge>
          </div>
          
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map(skill => (
                <Badge key={skill} variant="outline" className="text-xs">
                  <Tag size={12} className="mr-1" />
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Users size={14} className="mr-1" />
                Team: {project.teamSize}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar size={14} className="mr-1" />
                {project.deadline}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Badge variant="secondary">{project.department}</Badge>
              <Button variant="default" size="sm" className="flex items-center gap-1">
                {project.status === 'completed' ? 'View Details' : 'Join Project'}
                <ArrowUpRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
