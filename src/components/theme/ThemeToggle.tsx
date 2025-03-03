
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";

interface ThemeToggleProps {
  iconOnly?: boolean;
}

export function ThemeToggle({ iconOnly = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      {!iconOnly && <Sun size={16} className="text-muted-foreground" />}
      <Switch 
        id="dark-mode" 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      {!iconOnly && <Moon size={16} className="text-muted-foreground" />}
    </div>
  );
}
