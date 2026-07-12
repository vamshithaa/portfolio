import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const lines = [
  { prompt: 'whoami', output: 'Vamshitha R Poojary' },
  { prompt: 'cat role.txt', output: 'Full Stack Developer · AI Enthusiast' },
  { prompt: 'echo $LOCATION', output: 'Mangalore, India' },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState('typing-prompt'); // typing-prompt -> typing-output -> done
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];
    const target = phase === 'typing-prompt' ? current.prompt : current.output;

    if (charIndex < target.length) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, phase === 'typing-prompt' ? 45 : 25);
      return () => clearTimeout(timeout);
    }

    // finished current phase
    const pause = setTimeout(() => {
      if (phase === 'typing-prompt') {
        setPhase('typing-output');
        setCharIndex(0);
      } else {
        setDisplayedLines((prev) => [...prev, current]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setPhase('typing-prompt');
      }
    }, phase === 'typing-prompt' ? 300 : 500);
    return () => clearTimeout(pause);
  }, [charIndex, phase, lineIndex]);

  const current = lines[lineIndex];

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__terminal">
          <div className="hero__terminal-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="hero__terminal-title">vamshitha@portfolio: ~</span>
          </div>
          <div className="hero__terminal-body">
            {displayedLines.map((line, i) => (
              <div key={i} className="hero__line">
                <div className="hero__prompt-row">
                  <span className="hero__prompt-symbol">$</span> {line.prompt}
                </div>
                <div className="hero__output">{line.output}</div>
              </div>
            ))}

            {current && (
              <div className="hero__line">
                <div className="hero__prompt-row">
                  <span className="hero__prompt-symbol">$</span>{' '}
                  {phase === 'typing-prompt'
                    ? current.prompt.slice(0, charIndex)
                    : current.prompt}
                  {phase === 'typing-prompt' && <span className="hero__cursor" />}
                </div>
                {phase === 'typing-output' && (
                  <div className="hero__output">
                    {current.output.slice(0, charIndex)}
                    <span className="hero__cursor" />
                  </div>
                )}
              </div>
            )}

            {lineIndex >= lines.length && (
              <div className="hero__prompt-row">
                <span className="hero__prompt-symbol">$</span>
                <span className="hero__cursor hero__cursor--blink" />
              </div>
            )}
          </div>
        </div>

        <h1 className="hero__headline">
          Building things for the <span>web</span>,<br />
          one <span>commit</span> at a time.
        </h1>

        <p className="hero__subtext">
          B.Tech CS student & full-stack developer crafting clean,
          functional web apps with React, Flask, and a bit of AI on the side.
        </p>

        <div className="hero__cta">
          <Link to="projects" smooth duration={500} offset={-70} className="btn btn--primary">
            View Projects
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} className="btn btn--ghost">
            Get In Touch
          </Link>
        </div>

        <div className="hero__socials">
          <a href="https://github.com/vamshithaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/vamshithaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:vamshitharp@gmail.com" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
      </div>

      <Link to="about" smooth duration={500} offset={-70} className="hero__scroll-hint" aria-label="Scroll down">
        <FiArrowDown size={18} />
      </Link>
    </section>
  );
}