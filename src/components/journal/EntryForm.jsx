// src/components/journal/EntryForm.jsx
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { getTheme, moodEmojis } from '../../styles/theme';

export default function EntryForm({ onCancel }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  const [selectedMood, setSelectedMood] = useState('Happy');
  
  const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
  
  return (
    <form className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Date</label>
        <input 
          type="date" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-all duration-200 outline-none"
          style={{
            backgroundColor: darkMode ? '#374151' : '#FFFFFF',
            borderColor: theme.border,
            color: theme.text,
          }}
          defaultValue={today}
          required
        />
      </div>
      
      <div>
        <label className="block mb-2 font-medium">How are you feeling today?</label>
        <div className="grid grid-cols-5 gap-3 mb-4">
          {Object.entries(moodEmojis).map(([mood, emoji]) => (
            <div 
              key={mood} 
              className="flex flex-col items-center p-4 border rounded-xl cursor-pointer transition-all duration-200"
              style={{
                borderColor: mood === selectedMood ? 
                  (mood === 'Happy' ? '#4CAF50' : 
                   mood === 'Calm' ? '#2196F3' : 
                   mood === 'Neutral' ? '#9E9E9E' : 
                   mood === 'Anxious' ? '#FFC107' : 
                   '#7986CB') : theme.border,
                backgroundColor: mood === selectedMood ? 
                  (mood === 'Happy' ? (darkMode ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.1)') : 
                   mood === 'Calm' ? (darkMode ? 'rgba(33, 150, 243, 0.2)' : 'rgba(33, 150, 243, 0.1)') :
                   mood === 'Neutral' ? (darkMode ? 'rgba(158, 158, 158, 0.2)' : 'rgba(158, 158, 158, 0.1)') :
                   mood === 'Anxious' ? (darkMode ? 'rgba(255, 193, 7, 0.2)' : 'rgba(255, 193, 7, 0.1)') :
                   (darkMode ? 'rgba(121, 134, 203, 0.2)' : 'rgba(121, 134, 203, 0.1)')) : 
                  'transparent',
              }}
              onClick={() => setSelectedMood(mood)}
            >
              <span className="text-3xl mb-2">{emoji}</span>
              <span className="text-sm font-medium">{mood}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block mb-2 font-medium">Title</label>
        <input 
          type="text" 
          placeholder="Give your entry a title"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-all duration-200 outline-none"
          style={{
            backgroundColor: darkMode ? '#374151' : '#FFFFFF',
            borderColor: theme.border,
            color: theme.text,
          }}
          required
        />
      </div>
      
      <div>
        <label className="block mb-2 font-medium">What's on your mind?</label>
        <textarea 
          rows="6" 
          placeholder="Write your thoughts here..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-all duration-200 outline-none"
          style={{
            backgroundColor: darkMode ? '#374151' : '#FFFFFF',
            borderColor: theme.border,
            color: theme.text,
          }}
          required
        ></textarea>
      </div>
      
      <div className="pt-4 flex items-center justify-end space-x-3">
        <button 
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg font-medium transition-colors duration-200"
          style={{
            borderColor: theme.border,
            color: theme.text,
          }}
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="px-6 py-2 rounded-lg font-medium text-white transition-colors duration-200"
          style={{backgroundColor: theme.primary}}
        >
          Save Entry
        </button>
      </div>
    </form>
  );
}