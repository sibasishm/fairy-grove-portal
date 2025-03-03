import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Bell, Moon, Sun, User, Shield, Globe, BellOff, Eye, EyeOff, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

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
          
          <Tabs defaultValue="profile" className="mb-8" onValueChange={setActiveTab}>
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
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and professional information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="" alt="John Doe" />
                        <AvatarFallback className="bg-corporate-blue text-white text-xl">JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">Change Photo</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="john.doe@abgroup.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title</Label>
                        <Input id="title" defaultValue="Product Designer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select defaultValue="design">
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="product">Product Management</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="hr">Human Resources</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Select defaultValue="mumbai">
                          <SelectTrigger id="location">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="pune">Pune</SelectItem>
                            <SelectItem value="remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Professional Summary</h3>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input id="bio" defaultValue="Product designer with 5+ years of experience in creating intuitive user experiences." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills</Label>
                      <Input id="skills" defaultValue="UI/UX, Figma, Prototyping, User Research, Design Systems" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save size={16} />
                    <span>Save Changes</span>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                  <CardDescription>Manage your account security and privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="passwordChange" className="flex items-center gap-2">
                        <Shield size={16} />
                        <span>Change Password</span>
                      </Label>
                      <Button variant="outline" size="sm" id="passwordChange">
                        Update
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="flex items-center gap-2">
                            <Eye size={16} />
                            <span>Profile Visibility</span>
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Who can see your profile information
                          </p>
                        </div>
                        <Select defaultValue="organization">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">All Aditya Birla Group</SelectItem>
                            <SelectItem value="organization">My Organization Only</SelectItem>
                            <SelectItem value="team">My Team Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="flex items-center gap-2">
                            <Globe size={16} />
                            <span>Learning Activity</span>
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Share your learning progress with others
                          </p>
                        </div>
                        <Switch defaultChecked id="learning-activity" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="flex items-center gap-2">
                            <EyeOff size={16} />
                            <span>Hide Gamification Status</span>
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Keep your badges and achievements private
                          </p>
                        </div>
                        <Switch id="hide-gamification" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0 space-y-6">
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
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-0 space-y-6">
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;
