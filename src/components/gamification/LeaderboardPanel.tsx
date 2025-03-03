
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Trophy, Medal, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample leaderboard data
const leaderboardData = [
  { id: 1, name: 'Rohit Sharma', department: 'Marketing', xp: 9850, level: 10, avatarUrl: '' },
  { id: 2, name: 'Priya Patel', department: 'Finance', xp: 9320, level: 9, avatarUrl: '' },
  { id: 3, name: 'Amit Kumar', department: 'Technology', xp: 8760, level: 9, avatarUrl: '' },
  { id: 4, name: 'Neha Singh', department: 'HR', xp: 7980, level: 8, avatarUrl: '' },
  { id: 5, name: 'Vikram Mehta', department: 'Operations', xp: 7650, level: 8, avatarUrl: '' },
  { id: 6, name: 'Sonia Gupta', department: 'Sales', xp: 7540, level: 8, avatarUrl: '' },
  { id: 7, name: 'Rajesh Verma', department: 'Customer Service', xp: 7210, level: 7, avatarUrl: '' },
  { id: 8, name: 'Ananya Das', department: 'Research', xp: 6980, level: 7, avatarUrl: '' },
  { id: 9, name: 'Karan Malhotra', department: 'Legal', xp: 6750, level: 7, avatarUrl: '' },
  { id: 10, name: 'Divya Joshi', department: 'Product', xp: 6540, level: 7, avatarUrl: '' },
];

export function LeaderboardPanel() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const getAvatarColorClass = (index) => {
    const colors = [
      'bg-corporate-blue text-white',
      'bg-corporate-green text-white',
      'bg-purple-600 text-white',
      'bg-amber-500 text-white',
      'bg-pink-500 text-white',
      'bg-indigo-500 text-white',
      'bg-emerald-500 text-white',
      'bg-rose-500 text-white',
      'bg-cyan-500 text-white',
      'bg-orange-500 text-white',
    ];
    
    return colors[index % colors.length];
  };
  
  return (
    <div 
      className={cn(
        "card-glass rounded-xl overflow-hidden transition-all duration-500 ease-out",
        !visible && 'opacity-0 translate-y-8',
        visible && 'opacity-100 translate-y-0'
      )}
    >
      <div className="p-6 bg-corporate-blue text-white">
        <h3 className="text-xl font-semibold flex items-center">
          <Trophy className="mr-2" />
          Top Performers
        </h3>
        <p className="text-blue-100">Leaderboard updated daily</p>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 text-sm font-medium">
          <div className="w-10 text-center">#</div>
          <div className="flex-1">Name</div>
          <div className="w-28 text-right">Department</div>
          <div className="w-20 text-right">XP</div>
          <div className="w-20 text-right">Level</div>
        </div>
        
        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <div 
              key={user.id}
              className={cn(
                "flex justify-between items-center p-3 rounded-lg transition-all",
                index < 3 ? 'bg-slate-50 dark:bg-slate-800/60' : '',
                !visible && 'opacity-0 translate-x-8',
                visible && 'opacity-100 translate-x-0'
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-10 text-center flex justify-center">
                {index === 0 ? (
                  <Trophy size={20} className="text-amber-500" />
                ) : index === 1 ? (
                  <Medal size={20} className="text-slate-400" />
                ) : index === 2 ? (
                  <Award size={20} className="text-amber-700" />
                ) : (
                  <span className="text-muted-foreground">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1 flex items-center">
                <Avatar className="mr-2">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback className={getAvatarColorClass(index)}>
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
              
              <div className="w-28 text-right text-sm text-muted-foreground">
                {user.department}
              </div>
              
              <div className="w-20 text-right font-medium">
                {user.xp.toLocaleString()}
              </div>
              
              <div className="w-20 text-right">
                <span className="inline-flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 w-8 h-8 font-semibold text-sm">
                  {user.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
