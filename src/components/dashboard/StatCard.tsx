
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  trend: 'up' | 'down' | 'neutral';
  color: 'blue' | 'green' | 'purple' | 'amber';
  delay: number;
  isLoaded: boolean;
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  color, 
  delay,
  isLoaded 
}: StatCardProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, delay]);
  
  const colorClasses = {
    blue: 'bg-blue-50 text-corporate-blue dark:bg-blue-950/30',
    green: 'bg-green-50 text-corporate-green dark:bg-green-950/30',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-950/30',
    amber: 'bg-amber-50 text-amber-600 dark:bg-amber-950/30',
  };
  
  const trendIcon = {
    up: TrendingUp,
    down: TrendingDown,
    neutral: Minus,
  };
  
  const TrendIcon = trendIcon[trend];
  
  const trendColorClasses = {
    up: 'text-corporate-green',
    down: 'text-red-500',
    neutral: 'text-gray-500',
  };
  
  return (
    <div 
      className={cn(
        'card-glass rounded-xl p-4 transform transition-all duration-500 ease-out',
        !visible && 'opacity-0 translate-y-8',
        visible && 'opacity-100 translate-y-0'
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={cn('p-2 rounded-md', colorClasses[color])}>
          <Icon size={20} />
        </div>
        <div className={cn('flex items-center text-sm font-medium', trendColorClasses[trend])}>
          <TrendIcon size={16} className="mr-1" />
          <span>8.2%</span>
        </div>
      </div>
      
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-2xl font-semibold mb-1">{value}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  );
}
