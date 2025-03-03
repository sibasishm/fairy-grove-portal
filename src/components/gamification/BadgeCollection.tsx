
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Award, CheckCircle2, Lock } from 'lucide-react';

// Sample badges data
const badgesData = [
  { 
    id: 1, 
    name: 'Learning Pioneer', 
    description: 'Complete 5 courses', 
    unlocked: true, 
    progress: 5, 
    total: 5,
    category: 'Learning',
    rarity: 'Common',
    dateEarned: 'May 15, 2023',
    icon: '🎓'
  },
  { 
    id: 2, 
    name: 'Team Player', 
    description: 'Participate in 3 collaborative projects', 
    unlocked: true, 
    progress: 3, 
    total: 3,
    category: 'Collaboration',
    rarity: 'Common',
    dateEarned: 'June 2, 2023',
    icon: '👥'
  },
  { 
    id: 3, 
    name: 'Feedback Master', 
    description: 'Give and receive 10 peer feedback responses', 
    unlocked: false, 
    progress: 7, 
    total: 10,
    category: 'Communication',
    rarity: 'Uncommon',
    dateEarned: null,
    icon: '💬'
  },
  { 
    id: 4, 
    name: 'Innovation Champion', 
    description: 'Submit 2 innovative ideas that get implemented', 
    unlocked: false, 
    progress: 1, 
    total: 2,
    category: 'Innovation',
    rarity: 'Rare',
    dateEarned: null,
    icon: '💡'
  },
  { 
    id: 5, 
    name: 'Digital Expert', 
    description: 'Master all digital tools training modules', 
    unlocked: false, 
    progress: 3, 
    total: 5,
    category: 'Technical',
    rarity: 'Uncommon',
    dateEarned: null,
    icon: '💻'
  },
  { 
    id: 6, 
    name: 'Leadership Guru', 
    description: 'Complete the advanced leadership pathway', 
    unlocked: true, 
    progress: 1, 
    total: 1,
    category: 'Leadership',
    rarity: 'Epic',
    dateEarned: 'April 10, 2023',
    icon: '👑'
  },
  { 
    id: 7, 
    name: 'VR Explorer', 
    description: 'Complete 3 VR training sessions', 
    unlocked: false, 
    progress: 1, 
    total: 3,
    category: 'Immersive',
    rarity: 'Rare',
    dateEarned: null,
    icon: '🥽'
  },
  { 
    id: 8, 
    name: 'Knowledge Sage', 
    description: 'Create a learning resource that helps 50+ colleagues', 
    unlocked: false, 
    progress: 0, 
    total: 1,
    category: 'Knowledge Sharing',
    rarity: 'Legendary',
    dateEarned: null,
    icon: '📚'
  },
  { 
    id: 9, 
    name: 'Growth Mindset', 
    description: 'Complete 30 consecutive days of learning activities', 
    unlocked: false, 
    progress: 12, 
    total: 30,
    category: 'Consistency',
    rarity: 'Epic',
    dateEarned: null,
    icon: '🌱'
  }
];

export function BadgeCollection() {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'unlocked', 'locked'
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const getRarityColorClass = (rarity) => {
    switch(rarity) {
      case 'Common': return 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
      case 'Uncommon': return 'bg-corporate-green text-white';
      case 'Rare': return 'bg-corporate-blue text-white';
      case 'Epic': return 'bg-purple-600 text-white';
      case 'Legendary': return 'bg-amber-500 text-white';
      default: return 'bg-slate-200 text-slate-700';
    }
  };
  
  const filteredBadges = filter === 'all' 
    ? badgesData 
    : filter === 'unlocked' 
      ? badgesData.filter(badge => badge.unlocked) 
      : badgesData.filter(badge => !badge.unlocked);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold flex items-center">
          <Award className="mr-2 text-corporate-blue" />
          Badge Collection
        </div>
        
        <div className="flex border rounded-lg overflow-hidden">
          <button 
            className={cn(
              "px-3 py-1 text-sm",
              filter === 'all' ? 'bg-corporate-blue text-white' : 'bg-transparent'
            )}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={cn(
              "px-3 py-1 text-sm",
              filter === 'unlocked' ? 'bg-corporate-blue text-white' : 'bg-transparent'
            )}
            onClick={() => setFilter('unlocked')}
          >
            Unlocked
          </button>
          <button 
            className={cn(
              "px-3 py-1 text-sm",
              filter === 'locked' ? 'bg-corporate-blue text-white' : 'bg-transparent'
            )}
            onClick={() => setFilter('locked')}
          >
            Locked
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredBadges.map((badge, index) => (
          <div 
            key={badge.id}
            className={cn(
              "card-glass rounded-xl p-4 text-center transition-all duration-500 ease-out",
              !visible && 'opacity-0 scale-95',
              visible && 'opacity-100 scale-100'
            )}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="relative mb-2 mx-auto">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto",
                badge.unlocked ? 'opacity-100' : 'opacity-50'
              )}>
                {badge.icon}
              </div>
              
              {badge.unlocked ? (
                <div className="absolute -bottom-1 -right-1 bg-corporate-green text-white rounded-full p-0.5">
                  <CheckCircle2 size={16} />
                </div>
              ) : (
                <div className="absolute -bottom-1 -right-1 bg-slate-400 text-white rounded-full p-0.5">
                  <Lock size={16} />
                </div>
              )}
            </div>
            
            <h4 className="font-medium text-sm mb-1">{badge.name}</h4>
            
            <div className={cn(
              "text-xs py-0.5 px-1.5 rounded mb-2 mx-auto inline-block",
              getRarityColorClass(badge.rarity)
            )}>
              {badge.rarity}
            </div>
            
            <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
            
            {!badge.unlocked && (
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-1">
                <div 
                  className="h-full bg-corporate-blue rounded-full transition-all duration-1000"
                  style={{ 
                    width: visible ? `${(badge.progress / badge.total) * 100}%` : '0%' 
                  }}
                />
              </div>
            )}
            
            <div className="text-xs text-muted-foreground">
              {badge.unlocked 
                ? `Earned ${badge.dateEarned}` 
                : `Progress: ${badge.progress}/${badge.total}`
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
