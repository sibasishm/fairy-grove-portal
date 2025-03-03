
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { FeedbackList } from '@/components/feedback/FeedbackList';
import { MentorChat } from '@/components/feedback/MentorChat';
import { MessageSquare, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feedback = () => {
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
            <h1 className="text-3xl font-semibold mb-2">Feedback & Collaboration</h1>
            <p className="text-muted-foreground">
              Connect with mentors and receive structured feedback
            </p>
          </div>
          
          <Tabs defaultValue="feedback" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
              <TabsTrigger value="feedback" className="flex items-center gap-2">
                <FileText size={16} />
                <span>Feedback</span>
              </TabsTrigger>
              <TabsTrigger value="mentors" className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>Mentor Chat</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="feedback">
              <FeedbackList />
            </TabsContent>
            
            <TabsContent value="mentors">
              <MentorChat />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Feedback;
