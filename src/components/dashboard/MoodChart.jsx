// src/components/dashboard/MoodChart.jsx
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme';

export default function MoodChart({ data }) {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);
  
  return (
    <div style={{backgroundColor: theme.surface}} className="rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:shadow-xl">
      <h2 className="text-xl font-medium mb-4">Your Mood Overview</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={8}
              dataKey="value"
              strokeWidth={1}
              stroke={theme.surface}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value} entries`, name]}
              contentStyle={{
                backgroundColor: theme.surface,
                border: `1px solid ${theme.border}`,
                borderRadius: '0.5rem',
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              iconType="circle" 
              iconSize={10}
              formatter={(value) => <span style={{color: theme.text}}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
