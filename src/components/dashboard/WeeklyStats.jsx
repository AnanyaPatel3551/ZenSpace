// src/components/dashboard/WeeklyStats.jsx
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';

export default function WeeklyStats() {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div style={{backgroundColor: theme.surface}} className="rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:shadow-xl">
      <h2 className="text-xl font-medium mb-6">Weekly Check-in Stats</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Journal Entries</h3>
            <p style={{color: theme.textSecondary}}>This Week</p>
          </div>
          <div className="text-3xl font-bold" style={{color: theme.primary}}>5</div>
        </div>
        <div style={{backgroundColor: theme.border}} className="h-px w-full"></div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Most Frequent Mood</h3>
            <p style={{color: theme.textSecondary}}>This Week</p>
          </div>
          <div className="text-3xl">😌</div>
        </div>
        <div style={{backgroundColor: theme.border}} className="h-px w-full"></div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Streak</h3>
            <p style={{color: theme.textSecondary}}>Consecutive Days</p>
          </div>
          <div className="text-3xl font-bold" style={{color: theme.accent}}>3</div>
        </div>
      </div>
    </div>
  );
}