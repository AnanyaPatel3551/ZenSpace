// src/components/layout/Header.jsx
import { useState } from 'react';
import { Home, Book, Plus, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';
import ThemeToggle from '../ui/ThemeToggle';
import UserMenu from '../ui/UserMenu';
import Button from '../ui/Button';

export default function Header({ currentPage, setCurrentPage }) {
  const { darkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = getTheme(darkMode);
  
  return (
    <header style={{backgroundColor: theme.surface}} className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div style={{backgroundColor: theme.primary}} className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-xl">
              Z
            </div>
            <h1 className="ml-3 text-xl font-semibold">ZenSpace</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant={currentPage === 'home' ? 'primary' : 'text'}
              size="sm"
              icon={<Home size={18} />}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'entries' ? 'primary' : 'text'}
              size="sm"
              icon={<Book size={18} />}
              onClick={() => setCurrentPage('entries')}
            >
              Journal Entries
            </Button>
            <Button
              variant={currentPage === 'new-entry' ? 'primary' : 'text'}
              size="sm"
              icon={<Plus size={18} />}
              onClick={() => setCurrentPage('new-entry')}
            >
              New Entry
            </Button>
          </nav>
          
          {/* User Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <UserMenu />
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t" style={{borderColor: theme.border}}>
            <nav className="space-y-1">
              <Button
                variant={currentPage === 'home' ? 'primary' : 'text'}
                fullWidth
                icon={<Home size={18} />}
                className="justify-start"
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </Button>
              <Button
                variant={currentPage === 'entries' ? 'primary' : 'text'}
                fullWidth
                icon={<Book size={18} />}
                className="justify-start"
                onClick={() => {
                  setCurrentPage('entries');
                  setMobileMenuOpen(false);
                }}
              >
                Journal Entries
              </Button>
              <Button
                variant={currentPage === 'new-entry' ? 'primary' : 'text'}
                fullWidth
                icon={<Plus size={18} />}
                className="justify-start"
                onClick={() => {
                  setCurrentPage('new-entry');
                  setMobileMenuOpen(false);
                }}
              >
                New Entry
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}