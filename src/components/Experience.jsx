import './Experience.css';

const experience = [
  {
    date: 'Dec 2025 — Present',
    role: 'Full Stack Java Development with AI Intern',
    company: 'TAP Academy, Bangalore',
    description:
      'Building hands-on experience in frontend technologies, database management, and core Java programming. Working on real-time projects, continuously sharpening problem-solving skills through daily coding practice.',
  },
  {
    date: 'May 2025 — Jun 2025',
    role: 'AI and ML Intern',
    company: 'Zephyr Technologies and Solutions Pvt. Ltd., Mangalore',
    description:
      'Applied core Python and ML concepts across data preprocessing, model training, and accuracy tuning. Built the Student Mental Health Analysis project using multiple regression techniques.',
  },
  {
    date: 'Dec 2023 — Jan 2024',
    role: 'Web Development Intern',
    company: 'NITK, Surathkal',
    description:
      'Developed a responsive college website with HTML, CSS, JavaScript, and React.js, collaborating with a team to gather requirements and ship user-focused features. Strengthened UI/UX design and debugging skills.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-label">// Experience</span>
        <h2 className="section-title">
          Commit <span>history</span>
        </h2>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <div className="experience__item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="experience__marker">
                <span className="experience__node" />
                {i < experience.length - 1 && <span className="experience__line" />}
              </div>
              <div className="experience__content">
                <span className="experience__date">{exp.date}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <p className="experience__company">{exp.company}</p>
                <p className="experience__description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}