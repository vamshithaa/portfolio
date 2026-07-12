import { FiAward } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    date: 'January 2025',
  },
  {
    title: 'Introduction to Generative AI on Azure',
    issuer: 'Infosys Springboard',
    date: 'December 2024',
  },
  {
    title: 'API Literacy Program',
    issuer: 'IEEE WIE Bangalore, IEEE Mangalore & COSH NITK',
    date: 'December 2024',
  },
  {
    title: 'Python Programming',
    issuer: 'Ethnotech Academic Solutions',
    date: 'August 2023',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <span className="section-label">// Certifications</span>
        <h2 className="section-title">
          Verified <span>credentials</span>
        </h2>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <div className="certifications__card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="certifications__icon">
                <FiAward size={20} />
              </div>
              <div>
                <h3 className="certifications__title">{cert.title}</h3>
                <p className="certifications__issuer">{cert.issuer}</p>
                <span className="certifications__date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}