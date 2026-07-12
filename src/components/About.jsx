import './About.css';

const stats = [
  { label: 'degree', value: 'B.Tech, Computer Science' },
  { label: 'cgpa', value: '9.66 / 10' },
  { label: 'graduating', value: '2026' },
  { label: 'based_in', value: 'Mangalore, India' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-label">// About</span>
        <h2 className="section-title">
          Who's <span>behind the code</span>
        </h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a final-year Computer Science student at Srinivas University
              Institute of Engineering and Technology, building full-stack
              applications that solve real problems — from waste management
              platforms to AI-powered chatbots.
            </p>
            <p>
              My stack spans React and Flask on the web, with a growing
              interest in applying machine learning to everyday products.
              I've interned across full-stack Java development, AI/ML, and
              web development, picking up production habits along the way:
              clean APIs, secure auth, and deployable, maintainable code.
            </p>
            <p>
              When I'm not shipping projects, I'm sharpening core CS
              fundamentals — DBMS, OOPs, computer networks — the kind of
              groundwork that makes the flashy stuff actually hold up.
            </p>
          </div>

          <div className="about__card">
            <div className="about__card-header">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="about__card-title">profile.json</span>
            </div>
            <div className="about__card-body">
              <span className="about__brace">{'{'}</span>
              {stats.map((s, i) => (
                <div key={i} className="about__stat-row">
                  <span className="about__key">"{s.label}"</span>:{' '}
                  <span className="about__value">"{s.value}"</span>
                  {i < stats.length - 1 && ','}
                </div>
              ))}
              <span className="about__brace">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}