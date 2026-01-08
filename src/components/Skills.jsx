export default function Skills() {
    const skills = [
      "HTML", "CSS", "JavaScript", "React",
      "PHP", "MySQL", "REST API", "Git"
    ];
  
    return (
      <section>
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </section>
    );
   see
  }
  