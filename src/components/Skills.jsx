import { FiCode, FiLayout, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import './Skills.css';

const skillGroups = [
  {
    icon: <FiCode />,
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    icon: <FiLayout />,
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React.js'],
  },
  {
    icon: <FiServer />,
    title: 'Backend',
    items: ['Flask', 'Node.js', 'REST APIs', 'JSP', 'Servlets', 'JEE'],
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    items: ['SQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'JDBC'],
  },
  {
    icon: <FiTool />,
    title: 'Tools & Deploy',
    items: ['Git', 'GitHub', 'Render', 'Vercel', 'Netlify'],
  },
  {
    icon: <FiCode />,
    title: 'Core Subjects',
    items: ['OOPs', 'DBMS', 'Computer Networks'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">// Skills</span>
        <h2 className="section-title">
          Tools in the <span>toolbox</span>
        </h2>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div className="skills__card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skills__card-header">
                <span className="skills__icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skills__tags">
                {group.items.map((item, j) => (
                  <span className="skills__tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}