import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiHardDrive } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    file: 'cleanify.jsx',
    title: 'CLEANIFY',
    subtitle: 'Waste Reporting & Collection Monitoring Platform',
    description:
      "An intelligent platform for reporting and tracking waste collection. Built scalable REST APIs with Flask and Gunicorn, deployed on Render, with the frontend on Vercel. Integrated Google Gemini 2.5 Flash for AI-based waste classification, and secured the app with JWT auth, SHA-256 hashing, and environment-based credentials.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Flask', 'PostgreSQL', 'Gemini API'],
    links: { type: 'none' }, // update once you have live/github links
  },
  {
    file: 'chatbuddy.jsx',
    title: 'ChatBuddy',
    subtitle: 'AI Chatbot with Real-Time API Integration',
    description:
      'An AI-powered chatbot built with React.js, integrated with real-time APIs for intelligent, human-like conversation. Focused on secure API handling, responsive UI/UX, smooth conversation flow, and performance optimization.',
    tags: ['React.js', 'HTML', 'CSS', 'JavaScript', 'REST API'],
    links: { type: 'none' },
  },
  {
    file: 'food-rush.java',
    title: 'Food Rush',
    subtitle: 'Food Delivery Application',
    description:
      'A full-stack food delivery application built on core Java web technologies — from menu browsing to order management — running on Apache Tomcat with a MySQL backend accessed via JDBC.',
    tags: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    links: { type: 'local' }, // no live/github link yet
  },
  {
    file: 'mental_health.py',
    title: 'Student Mental Health Analysis',
    subtitle: 'Predictive Modeling with Regression',
    description:
      "A predictive model analyzing and forecasting student mental health status from survey data. Covered data preprocessing, feature engineering, and exploratory analysis with Pandas, NumPy, Matplotlib, and Seaborn, evaluated in Jupyter Notebook.",
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Regression'],
    links: { type: 'none' },
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">// Projects</span>
        <h2 className="section-title">
          Things I've <span>built</span>
        </h2>

        <div className="projects__layout">
          {/* file tabs list */}
          <div className="projects__filelist">
            {projects.map((p, i) => (
              <button
                key={i}
                className={`projects__file ${active === i ? 'projects__file--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <FiFolder size={14} />
                {p.file}
              </button>
            ))}
          </div>

          {/* active project detail */}
          <div className="projects__detail">
            <div className="projects__detail-header">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="projects__detail-filename">{projects[active].file}</span>
            </div>

            <div className="projects__detail-body">
              <h3>{projects[active].title}</h3>
              <p className="projects__subtitle">{projects[active].subtitle}</p>
              <p className="projects__description">{projects[active].description}</p>

              <div className="projects__tags">
                {projects[active].tags.map((tag, j) => (
                  <span key={j} className="projects__tag">{tag}</span>
                ))}
              </div>

              <div className="projects__links">
                {projects[active].links.type === 'local' && (
                  <span className="projects__badge">
                    <FiHardDrive size={14} /> Running locally — not yet deployed
                  </span>
                )}
                {projects[active].links.type === 'none' && (
                  <span className="projects__badge">
                    <FiFolder size={14} /> Code available on request
                  </span>
                )}
                {projects[active].links.github && (
                  <a href={projects[active].links.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                    <FiGithub size={16} /> Code
                  </a>
                )}
                {projects[active].links.live && (
                  <a href={projects[active].links.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}