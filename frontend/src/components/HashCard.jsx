export default function HashCard({ title, value, onSelect }) {
  return (
    <button className="hash-card" onClick={() => onSelect(title)}>
      {title}
    </button>
  );
}
