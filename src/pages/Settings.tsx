
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { SettingsTabs } from '@/components/settings/SettingsTabs';

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  
  useEffect(() => {
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
            <h1 className="text-3xl font-semibold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account preferences and application settings
            </p>
          </div>
          
          <SettingsTabs 
            defaultTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        </div>
      </main>
    </div>
  );
};

export default Settings;
