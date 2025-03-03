
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { QuestBoard } from '@/components/gamification/QuestBoard';
import { LeaderboardPanel } from '@/components/gamification/LeaderboardPanel';
import { BadgeCollection } from '@/components/gamification/BadgeCollection';
import { Trophy, Users, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gamification = () => {
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
            <h1 className="text-3xl font-semibold mb-2">Gamification</h1>
            <p className="text-muted-foreground">
              Level up your career through interactive challenges and achievements
            </p>
          </div>
          
          <Tabs defaultValue="quests" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
              <TabsTrigger value="quests" className="flex items-center gap-2">
                <Trophy size={16} />
                <span>Quests</span>
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Users size={16} />
                <span>Leaderboard</span>
              </TabsTrigger>
              <TabsTrigger value="badges" className="flex items-center gap-2">
                <Award size={16} />
                <span>Badges</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="quests">
              <QuestBoard />
            </TabsContent>
            
            <TabsContent value="leaderboard">
              <LeaderboardPanel />
            </TabsContent>
            
            <TabsContent value="badges">
              <BadgeCollection />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Gamification;
