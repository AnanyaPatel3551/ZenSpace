// src/pages/Entries.jsx
import { Plus } from 'lucide-react';
import EntryList from '../components/journal/EntryList';
import { journalEntries } from '../data/sampleData';
import { useTheme } from '../context/ThemeContext';
import { getTheme } from '../styles/theme';

export default function Entries({ setCurrentPage }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Journal Entries</h1>
        <button 
          onClick={() => setCurrentPage('new-entry')}
          className="px-4 py-2 text-white rounded-lg flex items-center transition-colors duration-200"
          style={{backgroundColor: theme.primary}}
        >
          <Plus size={18} className="mr-2" /> New Entry
        </button>
      </div>
      
      <EntryList entries={journalEntries} />
    </div>
  );
}
