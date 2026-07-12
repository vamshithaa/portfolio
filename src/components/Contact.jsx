import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

// 🔑 Replace these 3 values with your own EmailJS credentials
const SERVICE_ID = 'service_q14d69f';
const TEMPLATE_ID = 'template_b81yh3r';
const PUBLIC_KEY = 'sZ-gjMpcEpdh_gupA';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-label">// Contact</span>
        <h2 className="section-title">
          Let's <span>connect</span>
        </h2>
        <p className="contact__intro">
          Have a project in mind, an opportunity to discuss, or just want to say hi?
          My inbox is always open.
        </p>

        <div className="contact__layout">
          <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
            <div className="contact__field">
              <label htmlFor="name">name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>

            <div className="contact__field">
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>

            <div className="contact__field">
              <label htmlFor="message">message</label>
              <textarea id="message" name="message" required rows="5" placeholder="Tell me about your project or just say hello..." />
            </div>

            <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <FiSend size={16} /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="contact__status contact__status--success">
                <FiCheckCircle size={16} /> Message sent — I'll get back to you soon!
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">
                <FiAlertCircle size={16} /> Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>

          <div className="contact__side">
            <div className="contact__side-item">
              <FiMail size={18} />
              <a href="mailto:vamshitharp@gmail.com">vamshitharp@gmail.com</a>
            </div>
            <div className="contact__side-item">
              <FiGithub size={18} />
              <a href="https://github.com/vamshithaa" target="_blank" rel="noopener noreferrer">github.com/vamshithaa</a>
            </div>
            <div className="contact__side-item">
              <FiLinkedin size={18} />
              <a href="https://linkedin.com/in/vamshithaa" target="_blank" rel="noopener noreferrer">linkedin.com/in/vamshithaa</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}