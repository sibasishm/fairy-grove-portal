
import { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './Sidebar';

export function Header() {
  const [searchActive, setSearchActive] = useState(false);
  
  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur-md sticky top-0 z-10 px-4 flex items-center justify-between">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu size={20} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="max-w-md w-full flex-1 mx-auto hidden md:block">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-10 bg-muted/50 border-none focus-visible:ring-corporate-blue"
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-corporate-green rounded-full"></span>
        </Button>
        
        <Button size="sm" className="hidden md:inline-flex bg-corporate-blue hover:bg-corporate-blue/90">
          Quick Action
        </Button>
      </div>
    </header>
  );
}
