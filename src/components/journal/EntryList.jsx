// src/components/journal/EntryList.jsx
import EntryCard from './EntryCard';

export default function EntryList({ entries }) {
  return (
    <div className="space-y-4">
      {entries.map(entry => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}