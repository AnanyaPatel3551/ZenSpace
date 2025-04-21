// src/components/dashboard/RecentEntries.jsx
import { ChevronRight, Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';
import { moodEmojis } from '../../styles/theme';

export default function RecentEntries({ entries, setCurrentPage }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Recent Entries</h2>
        <button 
          onClick={() => setCurrentPage('entries')}
          className="flex items-center text-sm font-medium transition-colors duration-200"
          style={{color: theme.primary}}
        >
          View all <ChevronRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map(entry => (
          <div 
            key={entry.id} 
            style={{backgroundColor: theme.surface}} 
            className="rounded-xl shadow-md p-4 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" style={{color: theme.textSecondary}} />
                <span style={{color: theme.textSecondary}}>{entry.date}</span>
              </div>
              <span className="text-2xl">{moodEmojis[entry.mood]}</span>
            </div>
            <h3 className="font-medium text-lg mb-2">{entry.title}</h3>
            <p 
              style={{color: theme.textSecondary}} 
              className="line-clamp-2 text-sm"
            >
              {entry.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}