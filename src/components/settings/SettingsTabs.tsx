
import { Bell, Moon, User } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProfileSettings } from "./ProfileSettings";
import { NotificationSettings } from "./NotificationSettings";
import { AppearanceSettings } from "./AppearanceSettings";

interface SettingsTabsProps {
  defaultTab?: string;
  onTabChange?: (value: string) => void;
}

export function SettingsTabs({ defaultTab = "profile", onTabChange }: SettingsTabsProps) {
  return (
    <Tabs defaultValue={defaultTab} className="mb-8" onValueChange={onTabChange}>
      <TabsList className="mb-6 grid grid-cols-3 md:w-[400px]">
        <TabsTrigger value="profile" className="flex items-center justify-center gap-2">
          <User size={16} />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center justify-center gap-2">
          <Bell size={16} />
          <span>Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="preferences" className="flex items-center justify-center gap-2">
          <Moon size={16} />
          <span>Preferences</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile" className="mt-0 space-y-6">
        <ProfileSettings />
      </TabsContent>
      
      <TabsContent value="notifications" className="mt-0 space-y-6">
        <NotificationSettings />
      </TabsContent>
      
      <TabsContent value="preferences" className="mt-0 space-y-6">
        <AppearanceSettings />
      </TabsContent>
    </Tabs>
  );
}
