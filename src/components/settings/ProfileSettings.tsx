
import { Eye, EyeOff, Globe, Save, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSettings() {
  return (
    <>
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
    </>
  );
}
