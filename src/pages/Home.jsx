// src/pages/Home.jsx
import { Plus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getTheme } from '../styles/theme';
import MoodChart from '../components/dashboard/MoodChart';
import WeeklyStats from '../components/dashboard/WeeklyStats';
import RecentEntries from '../components/dashboard/RecentEntries';
import { moodData, journalEntries } from '../data/sampleData';

export default function Home({ setCurrentPage }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to ZenSpace</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <MoodChart data={moodData} />
        <WeeklyStats />
      </div>
      
      <RecentEntries entries={journalEntries} setCurrentPage={setCurrentPage} />
      
      <div style={{backgroundColor: theme.surface}} className="rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:shadow-xl">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{backgroundColor: theme.primary}}>
            <Plus size={20} className="text-white" />
          </div>
          <h2 className="text-xl font-medium ml-3">New Journal Entry</h2>
        </div>
        <p style={{color: theme.textSecondary}} className="mb-4">
          Take a moment to reflect on your day and record your thoughts and feelings.
        </p>
        <button 
          onClick={() => setCurrentPage('new-entry')}
          className="w-full py-3 rounded-lg font-medium text-white transition-colors duration-200 flex items-center justify-center"
          style={{backgroundColor: theme.primary}}
        >
          <Plus size={20} className="mr-2" /> Create New Entry
        </button>
      </div>
    </div>
  );
}