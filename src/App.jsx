import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Custom cursor movement
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="custom-cursor"></div>

      <header className="header">
        <h1 className="hover-glow">Asmita Agre</h1>
        <p className="hover-glow">Full Stack Developer | Software Engineer | IT Enthusiast</p>

        <button className="theme-toggle hover-glow" onClick={toggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <a className="resume-button hover-glow" href="/Asmita_Agre_Resume.pdf" download>
          Download Resume
        </a>
      </header>

      <section className="animated-section">
        <h2 className="hover-glow">About Me</h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          I am an aspiring Software Engineer with a Bachelor's in Information Technology.
          My passion lies in building intelligent web applications, streamlining user experiences,
          and continuously learning new technologies to grow with the industry.
        </motion.p>
      </section>

      <section className="animated-section">
        <h2 className="hover-glow">Technical Skills</h2>
        <ul>
          <li className="hover-glow">Frontend: HTML, CSS, JavaScript, Svelte, Tailwind CSS</li>
          <li className="hover-glow">Backend: Node.js, SQL, MySQL</li>
          <li className="hover-glow">Languages: Java, C/C++, Python</li>
          <li className="hover-glow">Version Control: Git, GitHub</li>
        </ul>
      </section>

      <section className="animated-section">
        <h2 className="hover-glow">Projects</h2>
        <motion.div className="card hover-card" whileHover={{ scale: 1.05 }}>
          <h3>Movie Recommendation App</h3>
          <p>
            Built using Python Flask and machine learning, offering personalized suggestions
            with collaborative and content-based filtering.
          </p>
        </motion.div>
        <motion.div className="card hover-card" whileHover={{ scale: 1.05 }}>
          <h3>Airline Management System</h3>
          <p>
            Java GUI app with MySQL backend. Allows booking, cancelling, and checking flights.
          </p>
        </motion.div>
        <motion.div className="card hover-card" whileHover={{ scale: 1.05 }}>
          <h3>Dice Game & Drum Kit</h3>
          <p>
            Fun games using HTML, CSS, JS, and Node.js. Boosts interactive web UI skills.
          </p>
        </motion.div>
      </section>

      <section className="animated-section">
        <h2 className="hover-glow">Experience</h2>
        <motion.div className="card hover-card" whileHover={{ scale: 1.05 }}>
          <h3>Intern at Meta CraftLab Pvt. Ltd.</h3>
          <p>
            Worked on Document Generator using Tailwind, SvelteKit, GitHub, Prisma during 2024 internship.
          </p>
        </motion.div>
      </section>

      <section className="animated-section">
        <h2 className="hover-glow">Certifications</h2>
        <ul>
          <li className="hover-glow">Postman API Fundamentals Student Expert</li>
        </ul>
      </section>

      <section className="animated-section">
        <h2 className="hover-glow">Activities</h2>
        <ul>
          <li className="hover-glow">NSS Member</li>
          <li className="hover-glow">Volunteer at Cloud fests & Marathi Vangmay Mandal</li>
        </ul>
      </section>

      <section className="animated-section">
        <h2 className="hover-glow">Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required className="hover-glow" />
          <input type="email" placeholder="Your Email" required className="hover-glow" />
          <textarea placeholder="Your Message" required className="hover-glow"></textarea>
          <button type="submit" className="hover-glow">Send</button>
        </form>
        <div className="social-links">
          <a className="hover-glow" href="mailto:agreasmita46@gmail.com">Email</a>
          <a className="hover-glow" href="https://www.linkedin.com/in/AsmitaAgre/">LinkedIn</a>
          <a className="hover-glow" href="https://github.com/Asmitaagre46">GitHub</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Asmita Agre. Designed with ❤️ and code.</p>
      </footer>
    </div>
  );
}

export default App;
