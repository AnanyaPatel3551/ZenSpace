// src/styles/theme.js
export const getTheme = (darkMode) => {
    return {
      primary: darkMode ? '#8B5CF6' : '#6D28D9', // Purple
      primaryLight: darkMode ? '#A78BFA' : '#8B5CF6',
      secondary: darkMode ? '#4F46E5' : '#4338CA', // Indigo
      accent: '#F97316', // Orange
      background: darkMode ? '#111827' : '#F9FAFB',
      surface: darkMode ? '#1F2937' : '#FFFFFF',
      surfaceHover: darkMode ? '#374151' : '#F3F4F6',
      surfaceActive: darkMode ? '#4B5563' : '#E5E7EB',
      text: darkMode ? '#F9FAFB' : '#111827',
      textSecondary: darkMode ? '#D1D5DB' : '#4B5563',
      border: darkMode ? '#374151' : '#E5E7EB',
    };
  };
  
  // Emoji mapping for moods
  export const moodEmojis = {
    'Happy': '😊',
    'Calm': '😌', 
    'Neutral': '😐',
    'Anxious': '😰',
    'Sad': '😔'
  };
  
  // Mood colors
  export const moodColors = {
    'Happy': '#4CAF50',
    'Calm': '#2196F3',
    'Neutral': '#9E9E9E',
    'Anxious': '#FFC107',
    'Sad': '#7986CB'
  };