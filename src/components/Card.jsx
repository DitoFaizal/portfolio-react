export default function Card({ title, desc, tech }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{desc}</p>
      <span>{tech}</span>
    </div>
  );
}
