// src/components/ui/UserMenu.jsx
import { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';
import { useUser } from '../../context/UserContext';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  const { user, logout } = useUser();
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <User size={20} />
      </button>
      
      {isOpen && (
        <div 
          style={{backgroundColor: theme.surface}} 
          className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 z-10"
        >
          <div className="px-4 py-3 border-b" style={{borderColor: theme.border}}>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-sm" style={{color: theme.textSecondary}}>{user.email}</p>
          </div>
          <button 
            className="px-4 py-2 text-sm w-full text-left flex items-center transition-colors duration-200"
            onClick={() => console.log('Settings clicked')}
          >
            <Settings size={16} className="mr-2" /> Settings
          </button>
          <button 
            className="px-4 py-2 text-sm w-full text-left flex items-center transition-colors duration-200"
            onClick={logout}
          >
            <LogOut size={16} className="mr-2" /> Log out
          </button>
        </div>
      )}
    </div>
  );
}