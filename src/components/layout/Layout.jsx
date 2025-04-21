// src/components/layout/Layout.jsx
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';
import Header from './Header';

export default function Layout({ children, currentPage, setCurrentPage }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div style={{backgroundColor: theme.background, color: theme.text}} className="min-h-screen flex flex-col transition-colors duration-300">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main content */}
      <main className="flex-1 overflow-auto max-w-7xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}