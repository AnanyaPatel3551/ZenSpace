// src/components/ui/ThemeToggle.jsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full transition-colors duration-200"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
