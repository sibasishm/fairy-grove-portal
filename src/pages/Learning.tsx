import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Filter, GraduationCap, ArrowDownUp, BookOpen, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Sample courses data
const coursesData = [
  {
    id: 1,
    title: 'Advanced Project Management',
    description: 'Master the skills needed to lead complex projects and teams effectively',
    provider: 'Gyanodaya Virtual Campus',
    category: 'Management',
    duration: '6 weeks',
    format: 'Interactive',
    progress: 65,
    badge: 'Popular'
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Learn essential concepts and tools for analyzing and interpreting complex data',
    provider: 'Coursera',
    category: 'Technology',
    duration: '8 weeks',
    format: 'Self-paced',
    progress: 0,
    badge: 'New'
  },
  {
    id: 3,
    title: 'Financial Analysis and Decision Making',
    description: 'Develop skills to make data-driven financial decisions for your organization',
    provider: 'Prozone',
    category: 'Finance',
    duration: '4 weeks',
    format: 'Instructor-led',
    progress: 0,
    badge: 'Recommended'
  },
  {
    id: 4,
    title: 'Leadership in Digital Transformation',
    description: 'Guide your organization through technological change effectively',
    provider: 'Wizr',
    category: 'Leadership',
    duration: '5 weeks',
    format: 'Blended',
    progress: 10,
    badge: null
  },
  {
    id: 5,
    title: 'Design Thinking Workshop',
    description: 'Apply innovative problem-solving methodologies to business challenges',
    provider: 'Gyanodaya Virtual Campus',
    category: 'Innovation',
    duration: '2 weeks',
    format: 'Workshop',
    progress: 100,
    badge: 'Completed'
  },
  {
    id: 6,
    title: 'Industrial Safety VR Training',
    description: 'Immersive virtual reality training for safety protocols in manufacturing environments',
    provider: 'Prozone',
    category: 'Safety',
    duration: '1 week',
    format: 'VR Immersive',
    progress: 0,
    badge: 'Immersive'
  }
];

const Learning = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('courses');
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
      case 'Technology': return 'bg-blue-500';
      case 'Management': return 'bg-purple-600';
      case 'Finance': return 'bg-green-600';
      case 'Leadership': return 'bg-amber-500';
      case 'Innovation': return 'bg-pink-500';
      case 'Safety': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  const getBadgeVariant = (badge) => {
    switch(badge) {
      case 'Popular': return 'bg-amber-500';
      case 'New': return 'bg-green-500';
      case 'Recommended': return 'bg-blue-500';
      case 'Completed': return 'bg-slate-500';
      case 'Immersive': return 'bg-purple-500';
      default: return 'bg-slate-500';
    }
  };

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
          
          <Tabs defaultValue="courses" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Courses</span>
              </TabsTrigger>
              <TabsTrigger value="immersive" className="flex items-center gap-2">
                <Monitor size={16} />
                <span>Immersive Learning</span>
              </TabsTrigger>
            </TabsList>
            
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
                  <GraduationCap size={16} />
                  <span>Recommended for You</span>
                </Button>
              </div>
            </div>
            
            <TabsContent value="courses" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.filter(course => course.format !== 'VR Immersive').map((course, index) => (
                  <Card 
                    key={course.id}
                    className={cn(
                      "border overflow-hidden transition-all duration-500 ease-out flex flex-col",
                      !visible && 'opacity-0 translate-y-8',
                      visible && 'opacity-100 translate-y-0'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge className={cn("mb-2", getCategoryColor(course.category))}>
                          {course.category}
                        </Badge>
                        {course.badge && (
                          <Badge variant="outline" className={cn(
                            getBadgeVariant(course.badge),
                            course.badge !== 'Completed' && '!bg-transparent'
                          )}>
                            {course.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-y-2 text-sm">
                        <div className="w-1/2 flex items-center text-muted-foreground">
                          <span>Provider:</span>
                          <span className="ml-1 text-foreground">{course.provider}</span>
                        </div>
                        <div className="w-1/2 flex items-center text-muted-foreground">
                          <span>Duration:</span>
                          <span className="ml-1 text-foreground">{course.duration}</span>
                        </div>
                        <div className="w-1/2 flex items-center text-muted-foreground">
                          <span>Format:</span>
                          <span className="ml-1 text-foreground">{course.format}</span>
                        </div>
                      </div>
                      
                      {course.progress > 0 && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-corporate-blue rounded-full transition-all duration-1000"
                              style={{ 
                                width: visible ? `${course.progress}%` : '0%' 
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </CardContent>
                    
                    <CardFooter className="border-t pt-4">
                      <Button 
                        variant={course.progress === 100 ? "outline" : "default"} 
                        className="w-full"
                      >
                        {course.progress === 0 
                          ? 'Start Course' 
                          : course.progress === 100 
                            ? 'View Certificate' 
                            : 'Continue Learning'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="immersive" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.filter(course => course.format === 'VR Immersive').map((course, index) => (
                  <Card 
                    key={course.id}
                    className={cn(
                      "border overflow-hidden transition-all duration-500 ease-out flex flex-col relative",
                      !visible && 'opacity-0 translate-y-8',
                      visible && 'opacity-100 translate-y-0'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 left-0 h-32 bg-gradient-to-br from-purple-500 to-blue-600 opacity-20"></div>
                    <CardHeader className="pb-2 relative">
                      <div className="flex justify-between items-start">
                        <Badge className={cn("mb-2", getCategoryColor(course.category))}>
                          {course.category}
                        </Badge>
                        {course.badge && (
                          <Badge variant="outline" className={cn(
                            getBadgeVariant(course.badge),
                            course.badge !== 'Completed' && '!bg-transparent'
                          )}>
                            {course.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1 relative">
                      <div className="flex flex-wrap gap-y-2 text-sm">
                        <div className="w-1/2 flex items-center text-muted-foreground">
                          <span>Provider:</span>
                          <span className="ml-1 text-foreground">{course.provider}</span>
                        </div>
                        <div className="w-1/2 flex items-center text-muted-foreground">
                          <span>Duration:</span>
                          <span className="ml-1 text-foreground">{course.duration}</span>
                        </div>
                        <div className="w-full flex items-center text-muted-foreground mb-2">
                          <span>Format:</span>
                          <Badge variant="outline" className="ml-2 bg-transparent border-purple-500 text-purple-500">
                            <Monitor size={12} className="mr-1" />
                            {course.format}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                        <p className="text-xs text-muted-foreground">
                          <strong>Requirements:</strong> VR headset compatible with Oculus or HTC Vive. 
                          Training can be scheduled with your department's VR lab.
                        </p>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="border-t pt-4">
                      <Button 
                        variant="default" 
                        className="w-full"
                      >
                        Schedule VR Training
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Learning;
