export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects">
        <div className="card">
          <h3>Attendance System</h3>
          <p>Face recognition attendance app using React & backend integration.</p>
          <span>React • API • MySQL</span>
        </div>

        <div className="card">
          <h3>Ship Repair Estimation</h3>
          <p>Cost estimation system with Excel export and hierarchy logic.</p>
          <span>PHP • Excel • SQL</span>
        </div>

        <div className="card">
          <h3>Inventory Dashboard</h3>
          <p>Internal dashboard for tracking materials and reports.</p>
          <span>React • Charts</span>
        </div>
      </div>
    </section>
  );
}
