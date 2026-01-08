export default function Projects() {
    return (
      <section>
        <h2>Projects</h2>
  
        <div className="projects">
          {/* Project 1 */}
          <div className="card">
            <img src="/projects/absensi.png" alt="Attendance System" />
            <h3>Employee Attendance System</h3>
            <p>
              Web-based attendance system with face recognition and reporting
              features for employees.
            </p>
            <span>React • PHP • MySQL</span>
          </div>
  
          {/* Project 2 */}
          <div className="card">
            <img src="/projects/inventory.png" alt="Inventory System" />
            <h3>Inventory Management System</h3>
            <p>
              Inventory tracking system with stock monitoring and transaction
              reports.
            </p>
            <span>JavaScript • PHP • MySQL</span>
          </div>
  
          {/* Project 3 */}
          <div className="card">
            <img src="/projects/portfolio.png" alt="Portfolio Website" />
            <h3>Personal Portfolio Website</h3>
            <p>
              Modern personal portfolio built with React and GSAP animations.
            </p>
            <span>React • GSAP</span>
          </div>
        </div>
      </section>
    );
  }
  