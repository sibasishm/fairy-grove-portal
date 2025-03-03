
import { Bell, BellOff, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Control what notifications you receive and how</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Course Recommendations</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new courses matching your interests
                </p>
              </div>
              <Switch defaultChecked id="email-courses" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Project Opportunities</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about projects matching your skills
                </p>
              </div>
              <Switch defaultChecked id="email-projects" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Feedback & Evaluations</Label>
                <p className="text-sm text-muted-foreground">
                  Receive feedback from mentors and project leads
                </p>
              </div>
              <Switch defaultChecked id="email-feedback" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Learning Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get reminders about ongoing courses and deadlines
                </p>
              </div>
              <Switch defaultChecked id="email-reminders" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>New Messages</Label>
                <p className="text-sm text-muted-foreground">
                  Notifications for new messages from mentors and peers
                </p>
              </div>
              <Switch defaultChecked id="app-messages" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Quest Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new quests and challenges
                </p>
              </div>
              <Switch defaultChecked id="app-quests" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Achievements</Label>
                <p className="text-sm text-muted-foreground">
                  Notifications for badges and level-ups
                </p>
              </div>
              <Switch defaultChecked id="app-achievements" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Leaderboard Changes</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when your leaderboard position changes
                </p>
              </div>
              <Switch id="app-leaderboard" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="flex items-center gap-2">
          <BellOff size={16} />
          <span>Pause All</span>
        </Button>
        <Button className="flex items-center gap-2">
          <Save size={16} />
          <span>Save Changes</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
