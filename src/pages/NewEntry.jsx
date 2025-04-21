// src/pages/NewEntry.jsx
import { useTheme } from '../context/ThemeContext';
import { getTheme } from '../styles/theme';
import EntryForm from '../components/journal/EntryForm';

export default function NewEntry({ setCurrentPage }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">New Journal Entry</h1>
      
      <div style={{backgroundColor: theme.surface}} className="rounded-2xl shadow-lg p-6">
        <EntryForm onCancel={() => setCurrentPage('home')} />
      </div>
    </div>
  );
}