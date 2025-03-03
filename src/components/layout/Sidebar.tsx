
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  BrainCircuit, 
  Briefcase, 
  Trophy, 
  MessageSquare, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type NavItem = {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
};

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/', active: location.pathname === '/' },
    { icon: GraduationCap, label: 'Learning', href: '/learning', active: location.pathname === '/learning' },
    { icon: BrainCircuit, label: 'Competencies', href: '/competencies', active: location.pathname === '/competencies' },
    { icon: Briefcase, label: 'Projects', href: '/projects', active: location.pathname === '/projects' },
    { icon: Trophy, label: 'Gamification', href: '/gamification', active: location.pathname === '/gamification' },
    { icon: MessageSquare, label: 'Feedback', href: '/feedback', active: location.pathname === '/feedback' },
    { icon: Settings, label: 'Settings', href: '/settings', active: location.pathname === '/settings' },
  ];

  return (
    <aside
      className={cn(
        'h-screen sticky top-0 flex flex-col bg-sidebar transition-all duration-300 border-r',
        collapsed ? 'w-[70px]' : 'w-[240px]',
        className
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!collapsed && (
          <h1 className="text-xl font-bold text-corporate-blue animate-fade-in">
            FAIRY
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'nav-item group',
              item.active && 'active'
            )}
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!collapsed && (
              <span className="animate-fade-in">{item.label}</span>
            )}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-corporate-blue text-white flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Product Designer</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
