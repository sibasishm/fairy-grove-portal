
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip
} from 'recharts';

interface CompetencyMapProps {
  isLoaded: boolean;
  delay: number;
}

const competencyData = [
  { name: 'Leadership', value: 85, fullMark: 100 },
  { name: 'Technical', value: 92, fullMark: 100 },
  { name: 'Communication', value: 78, fullMark: 100 },
  { name: 'Teamwork', value: 88, fullMark: 100 },
  { name: 'Problem Solving', value: 90, fullMark: 100 },
  { name: 'Adaptability', value: 82, fullMark: 100 },
];

const pieData = [
  { name: 'Mastered', value: 12 },
  { name: 'Proficient', value: 8 },
  { name: 'Developing', value: 5 },
  { name: 'Basic', value: 2 },
];

const COLORS = ['#0A74DA', '#00C853', '#F5B041', '#EC7063'];

export function CompetencyMap({ isLoaded, delay }: CompetencyMapProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, delay]);
  
  return (
    <div 
      className={cn(
        'card-glass rounded-xl h-full p-6 transform transition-all duration-500 ease-out',
        !visible && 'opacity-0 translate-y-8',
        visible && 'opacity-100 translate-y-0'
      )}
    >
      <h3 className="text-lg font-semibold mb-6">Competency Map</h3>
      
      <div className="h-[calc(100%-60px)] grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={competencyData}>
              <PolarGrid strokeDasharray="3 3" />
              <PolarAngleAxis dataKey="name" tick={{ fill: 'var(--foreground)', fontSize: 12 }} />
              <Radar
                name="Skill Level"
                dataKey="value"
                stroke="#0A74DA"
                fill="#0A74DA"
                fillOpacity={0.2}
                animationBegin={visible ? 0 : 9999}
                animationDuration={1200}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--background)', 
                  borderColor: 'var(--border)',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-col justify-center">
          <h4 className="text-sm font-medium mb-4 text-center">Skills Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                animationBegin={visible ? 0 : 9999}
                animationDuration={1200}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--background)', 
                  borderColor: 'var(--border)',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center text-xs">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                />
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
