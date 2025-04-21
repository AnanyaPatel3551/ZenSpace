// src/components/journal/EntryCard.jsx
import { Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme, moodEmojis } from '../../styles/theme';

export default function EntryCard({ entry }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div 
      style={{backgroundColor: theme.surface}} 
      className="rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Calendar size={18} className="mr-2" style={{color: theme.textSecondary}} />
          <span style={{color: theme.textSecondary}}>{entry.date}</span>
        </div>
        <div 
          className="flex items-center px-3 py-1 rounded-full text-sm"
          style={{
            backgroundColor: entry.mood === 'Happy' ? 'rgba(76, 175, 80, 0.1)' : 
                            entry.mood === 'Calm' ? 'rgba(33, 150, 243, 0.1)' : 
                            entry.mood === 'Neutral' ? 'rgba(158, 158, 158, 0.1)' : 
                            entry.mood === 'Anxious' ? 'rgba(255, 193, 7, 0.1)' : 
                            'rgba(121, 134, 203, 0.1)',
            color: entry.mood === 'Happy' ? '#4CAF50' : 
                  entry.mood === 'Calm' ? '#2196F3' : 
                  entry.mood === 'Neutral' ? '#9E9E9E' : 
                  entry.mood === 'Anxious' ? '#FFC107' : 
                  '#7986CB'
          }}
        >
          <span className="mr-2">{moodEmojis[entry.mood]}</span>
          <span>{entry.mood}</span>
        </div>
      </div>
      <h2 className="text-xl font-medium mb-3">{entry.title}</h2>
      <p style={{color: theme.textSecondary}}>{entry.content}</p>
    </div>
  );
}