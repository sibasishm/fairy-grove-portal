import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Send, User, PaperClip, Mic, Image, Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample mentors data
const mentors = [
  { id: 1, name: 'Anil Kumar', role: 'Technical Lead', expertise: 'Software Engineering', avatarUrl: '', status: 'online' },
  { id: 2, name: 'Sita Reddy', role: 'Department Head', expertise: 'Operations', avatarUrl: '', status: 'offline' },
  { id: 3, name: 'Rahul Menon', role: 'Senior Manager', expertise: 'Project Management', avatarUrl: '', status: 'online' }
];

// Sample messages data
const initialMessages = [
  { id: 1, senderId: 1, text: 'Hi there! How can I help you with your career development today?', timestamp: '10:30 AM', isRead: true },
  { id: 2, senderId: 'user', text: "Hello! I'm looking for guidance on improving my project management skills.", timestamp: '10:32 AM', isRead: true },
  { id: 3, senderId: 1, text: "That's a great area to focus on. Have you looked at the Advanced Project Management course in the learning catalog?", timestamp: '10:35 AM', isRead: true },
  { id: 4, senderId: 'user', text: "Yes, I'm currently 65% through that course. I'm particularly interested in practical applications.", timestamp: '10:37 AM', isRead: true },
  { id: 5, senderId: 1, text: "Excellent progress! I'd recommend applying for the Digital Transformation project we have open. It would give you hands-on experience with the concepts you're learning.", timestamp: '10:40 AM', isRead: true },
];

export function MentorChat() {
  const [visible, setVisible] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [chatContainerRef, setChatContainerRef] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (chatContainerRef) {
      chatContainerRef.scrollTop = chatContainerRef.scrollHeight;
    }
  }, [messages, chatContainerRef]);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const newMsg = {
      id: messages.length + 1,
      senderId: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isRead: false
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Simulate mentor response after a short delay
    setTimeout(() => {
      const mentorResponse = {
        id: messages.length + 2,
        senderId: selectedMentor.id,
        text: "Thanks for sharing that. I'll look into some specific opportunities that match your interests and skills. Let's schedule a call next week to discuss in more detail.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRead: false
      };
      
      setMessages(prevMessages => [...prevMessages, mentorResponse]);
    }, 2000);
  };
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <div className="card-glass rounded-xl h-[600px] flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarImage src={selectedMentor.avatarUrl} alt={selectedMentor.name} />
            <AvatarFallback className="bg-corporate-blue text-white">
              {getInitials(selectedMentor.name)}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="font-medium">{selectedMentor.name}</h3>
            <p className="text-sm text-muted-foreground">{selectedMentor.role} • {selectedMentor.expertise}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className={cn(
            "inline-flex h-2 w-2 rounded-full mr-1",
            selectedMentor.status === 'online' ? 'bg-corporate-green' : 'bg-slate-400'
          )} />
          <span className="text-sm">{selectedMentor.status === 'online' ? 'Online' : 'Offline'}</span>
        </div>
      </div>
      
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4" 
        ref={setChatContainerRef}
      >
        {messages.map((message, index) => {
          const isMentor = message.senderId !== 'user';
          const mentor = isMentor ? mentors.find(m => m.id === message.senderId) : null;
          
          return (
            <div 
              key={message.id}
              className={cn(
                "flex",
                isMentor ? "justify-start" : "justify-end",
                !visible && 'opacity-0',
                visible && 'opacity-100'
              )}
              style={{ transitionDelay: `${index * 100}ms`, transition: 'opacity 0.5s ease-out' }}
            >
              {isMentor && (
                <Avatar className="mr-2 mt-1">
                  <AvatarImage src={mentor?.avatarUrl} alt={mentor?.name} />
                  <AvatarFallback className="bg-corporate-blue text-white">
                    {getInitials(mentor?.name || '')}
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div 
                className={cn(
                  "max-w-[70%] rounded-2xl p-3 text-sm",
                  isMentor 
                    ? "bg-slate-100 dark:bg-slate-800" 
                    : "bg-corporate-blue text-white"
                )}
              >
                <p>{message.text}</p>
                <div 
                  className={cn(
                    "text-xs mt-1",
                    isMentor ? "text-slate-500" : "text-blue-100"
                  )}
                >
                  {message.timestamp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-3 border-t">
        <div className="flex gap-2">
          <Input 
            placeholder="Type a message..." 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          
          <Button 
            variant="default"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send size={16} />
          </Button>
        </div>
        
        <div className="flex justify-center mt-2 gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <PaperClip size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Image size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Mic size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Video size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
