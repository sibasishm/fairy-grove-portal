
import { Moon, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function AppearanceSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Preferences</CardTitle>
        <CardDescription>Customize your experience with the platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Appearance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="flex items-center gap-2">
                  <Moon size={16} />
                  <span>Dark Mode</span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Toggle between light and dark themes
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Content Preferences</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="language" className="mb-2 block">Display Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="ta">Tamil</SelectItem>
                  <SelectItem value="te">Telugu</SelectItem>
                  <SelectItem value="mr">Marathi</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Priority Content Areas</Label>
                <p className="text-sm text-muted-foreground">
                  Content areas you'd like to see more of
                </p>
              </div>
              <Button variant="outline" size="sm">
                Customize
              </Button>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Learning Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Learning Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Set regular reminders for learning sessions
                </p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
            
            <div>
              <Label htmlFor="learningPace" className="mb-2 block">Learning Pace</Label>
              <Select defaultValue="moderate">
                <SelectTrigger id="learningPace">
                  <SelectValue placeholder="Select pace" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relaxed">Relaxed (1-2 hours/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (3-5 hours/week)</SelectItem>
                  <SelectItem value="intensive">Intensive (6+ hours/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="flex items-center gap-2">
          <Save size={16} />
          <span>Save Preferences</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
