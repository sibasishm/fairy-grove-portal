
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare, Star, User, Calendar, ThumbsUp, Trash2, Briefcase, BookOpen, LineChart } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Sample feedback data
const feedbackData = [
  {
    id: 1,
    from: 'Anita Desai',
    role: 'Project Manager',
    type: 'project',
    projectName: 'Digital Transformation Initiative',
    date: 'June 5, 2023',
    rating: 4,
    message: "Great work on the data analysis part of the project. Your insights helped us identify key optimization opportunities. Continue developing your presentation skills for maximum impact.",
    avatarUrl: '',
    isRead: true
  },
  {
    id: 2,
    from: 'Rajiv Khanna',
    role: 'Learning & Development',
    type: 'course',
    courseName: 'Advanced Project Management',
    date: 'May 28, 2023',
    rating: 5,
    message: "Excellent performance in the course. Your case study analysis was particularly insightful and demonstrated strong critical thinking. You've clearly mastered the core concepts and are ready for more advanced material.",
    avatarUrl: '',
    isRead: true
  },
  {
    id: 3,
    from: 'Meera Sharma',
    role: 'Department Head',
    type: 'performance',
    reviewPeriod: 'Q2 2023',
    date: 'July 10, 2023',
    rating: 4,
    message: "You've shown consistent growth this quarter. Your technical skills are strong, and your contributions to team projects have been valuable. Focus on developing your leadership capabilities to take on more responsibilities in the future.",
    avatarUrl: '',
    isRead: false
  },
  {
    id: 4,
    from: 'Vikram Mehta',
    role: 'Mentor',
    type: 'mentor',
    area: 'Technical Skills',
    date: 'July 15, 2023',
    rating: 3,
    message: "I've observed your progress with the new technologies we discussed. You're on the right track, but need more practice with the advanced features. Let's schedule a hands-on session next week to work through the challenging aspects.",
    avatarUrl: '',
    isRead: false
  }
];

export function FeedbackList() {
  const [visible, setVisible] = useState(false);
  const [feedback, setFeedback] = useState(feedbackData);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const markAsRead = (id) => {
    setFeedback(feedback.map(item => 
      item.id === id ? { ...item, isRead: true } : item
    ));
  };
  
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter(item => item.id !== id));
  };
  
  const getTypeIcon = (type) => {
    switch(type) {
      case 'project': return <Briefcase size={16} />;
      case 'course': return <BookOpen size={16} />;
      case 'performance': return <LineChart size={16} />;
      case 'mentor': return <User size={16} />;
      default: return <MessageSquare size={16} />;
    }
  };
  
  const getTypeColor = (type) => {
    switch(type) {
      case 'project': return 'text-corporate-blue';
      case 'course': return 'text-corporate-green';
      case 'performance': return 'text-purple-600';
      case 'mentor': return 'text-amber-500';
      default: return 'text-slate-500';
    }
  };
  
  const getTypeLabel = (item) => {
    switch(item.type) {
      case 'project': return item.projectName;
      case 'course': return item.courseName;
      case 'performance': return `Performance Review - ${item.reviewPeriod}`;
      case 'mentor': return `Mentorship - ${item.area}`;
      default: return 'Feedback';
    }
  };
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <div className="space-y-4">
      {feedback.map((item, index) => (
        <div 
          key={item.id}
          className={cn(
            "card-glass rounded-xl p-5 transition-all duration-500 ease-out",
            !item.isRead && 'border-l-4 border-corporate-blue',
            !visible && 'opacity-0 translate-y-8',
            visible && 'opacity-100 translate-y-0'
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start">
              <Avatar className="mr-3 mt-1">
                <AvatarImage src={item.avatarUrl} alt={item.from} />
                <AvatarFallback className="bg-corporate-blue text-white">
                  {getInitials(item.from)}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="font-semibold">{item.from}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
                
                <div className="flex items-center mt-1 text-sm">
                  <span className={cn("flex items-center mr-3", getTypeColor(item.type))}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                  </span>
                  
                  <span className="flex items-center text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < item.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300'} 
                />
              ))}
            </div>
          </div>
          
          <div className="mb-3">
            <div className="text-sm font-medium mb-2">
              {getTypeLabel(item)}
            </div>
            <p className="text-sm">{item.message}</p>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs" 
              onClick={() => markAsRead(item.id)}
              disabled={item.isRead}
            >
              <ThumbsUp size={14} className="mr-1" />
              {item.isRead ? 'Acknowledged' : 'Mark as Read'}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-red-500 hover:text-red-700 hover:bg-red-50" 
              onClick={() => deleteFeedback(item.id)}
            >
              <Trash2 size={14} className="mr-1" />
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
