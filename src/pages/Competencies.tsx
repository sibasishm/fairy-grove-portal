
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Filter, BrainCircuit, ArrowDownUp, Search, Target, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Sample competencies data
const competenciesData = [
  {
    id: 1,
    name: 'Data Analysis',
    category: 'Technical',
    description: 'The ability to interpret complex data sets and derive actionable insights',
    level: 4,
    maxLevel: 5,
    badges: ['Certified', 'Trending'],
    growthAreas: [
      'Advanced statistical methods',
      'Data visualization techniques',
      'Machine learning applications'
    ],
    relatedCourses: [
      'Advanced Analytics with Python',
      'Data Visualization Masterclass'
    ],
    relatedProjects: [
      'Customer Segmentation Analysis',
      'Sales Prediction Model'
    ]
  },
  {
    id: 2,
    name: 'Project Management',
    category: 'Management',
    description: 'The ability to plan, execute, and deliver projects on time and within budget',
    level: 3,
    maxLevel: 5,
    badges: ['In Demand'],
    growthAreas: [
      'Agile methodologies',
      'Risk management',
      'Stakeholder communication'
    ],
    relatedCourses: [
      'Advanced Project Management',
      'Agile Scrum Master Certification'
    ],
    relatedProjects: [
      'Digital Transformation Initiative',
      'Product Launch Campaign'
    ]
  },
  {
    id: 3,
    name: 'Leadership',
    category: 'Soft Skills',
    description: 'The ability to inspire and guide teams toward achieving organizational goals',
    level: 3,
    maxLevel: 5,
    badges: ['High Potential'],
    growthAreas: [
      'Strategic thinking',
      'Change management',
      'Executive presence'
    ],
    relatedCourses: [
      'Leadership in Digital Transformation',
      'Executive Communication Skills'
    ],
    relatedProjects: [
      'Team Restructuring Initiative',
      'Mentorship Program Development'
    ]
  },
  {
    id: 4,
    name: 'Financial Analysis',
    category: 'Finance',
    description: 'The ability to evaluate financial performance and make data-driven recommendations',
    level: 2,
    maxLevel: 5,
    badges: ['Development Focus'],
    growthAreas: [
      'Financial modeling',
      'Investment analysis',
      'Corporate valuation methods'
    ],
    relatedCourses: [
      'Financial Analysis and Decision Making',
      'Corporate Finance Fundamentals'
    ],
    relatedProjects: [
      'Budget Optimization Project',
      'Investment Portfolio Analysis'
    ]
  },
  {
    id: 5,
    name: 'UX Design',
    category: 'Creative',
    description: 'The ability to create user-centered designs that enhance user experience and satisfaction',
    level: 4,
    maxLevel: 5,
    badges: ['Expert', 'Mentor'],
    growthAreas: [
      'Advanced prototyping',
      'User research methodologies',
      'Accessibility standards'
    ],
    relatedCourses: [
      'Advanced User Testing Techniques',
      'Design Systems at Scale'
    ],
    relatedProjects: [
      'Mobile App Redesign',
      'Customer Journey Optimization'
    ]
  }
];

const Competencies = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate loading for a smoother initial experience
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Technical': return 'bg-blue-500';
      case 'Management': return 'bg-purple-600';
      case 'Soft Skills': return 'bg-green-600';
      case 'Finance': return 'bg-amber-500';
      case 'Creative': return 'bg-pink-500';
      default: return 'bg-slate-500';
    }
  };

  const getBadgeVariant = (badge) => {
    switch(badge) {
      case 'Certified': return 'bg-green-500 border-transparent';
      case 'Trending': return 'border-blue-500 text-blue-500';
      case 'In Demand': return 'border-purple-500 text-purple-500';
      case 'High Potential': return 'border-amber-500 text-amber-500';
      case 'Development Focus': return 'border-red-500 text-red-500';
      case 'Expert': return 'bg-blue-700 border-transparent';
      case 'Mentor': return 'border-green-700 text-green-700';
      default: return 'border-slate-500 text-slate-500';
    }
  };

  const filteredCompetencies = searchQuery 
    ? competenciesData.filter(comp => 
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : competenciesData;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <main className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        <div className="p-6 md:p-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-semibold mb-2">Competency Hub</h1>
            <p className="text-muted-foreground">
              Track your skills, identify growth areas, and plan your development
            </p>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-auto sm:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search competencies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowDownUp size={16} />
                <span>Sort</span>
              </Button>
              <Button variant="default" size="sm" className="flex items-center gap-2">
                <BrainCircuit size={16} />
                <span>Top Skills</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetencies.map((competency, index) => (
              <Card 
                key={competency.id}
                className={cn(
                  "border overflow-hidden transition-all duration-500 ease-out h-full flex flex-col",
                  !visible && 'opacity-0 translate-y-8',
                  visible && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className={cn("mb-2", getCategoryColor(competency.category))}>
                      {competency.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{competency.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{competency.description}</p>
                  
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {competency.badges.map((badge) => (
                      <Badge 
                        key={badge} 
                        variant="outline" 
                        className={cn("text-xs", getBadgeVariant(badge))}
                      >
                        {badge === 'Certified' && <Award size={12} className="mr-1" />}
                        {badge === 'Trending' && <TrendingUp size={12} className="mr-1" />}
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Proficiency Level</span>
                      <span>{competency.level}/{competency.maxLevel}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-corporate-blue rounded-full transition-all duration-1000"
                        style={{ 
                          width: visible ? `${(competency.level / competency.maxLevel) * 100}%` : '0%' 
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-2">Growth Areas</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {competency.growthAreas.map((area, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-corporate-blue mt-1.5 mr-2"></span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-2">Related Courses</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {competency.relatedCourses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t pt-4">
                  <Button 
                    variant="default" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Target size={16} />
                    <span>Create Development Plan</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Competencies;
