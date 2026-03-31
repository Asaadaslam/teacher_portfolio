// import React from 'react'
// import styles from './Footer.module.css'
// import { caveat } from '@/font';

// function Footer() {
//   return (
//     <>
//     <footer className={styles.footer}>
//         <h1 className={caveat.className}>© 2026 Muhammad Asaad all rights reserved</h1>

//     </footer>
//     </>
//   )
// }

// export default Footer


// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left - Brand Section */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            🎓
          </div>
          <div>
            <h2>Megan B. Jessica</h2>
            <p>Passionate educator dedicated to inspiring and<br />empowering the next generation of learners.</p>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social Links */}
        <div className={styles.connect}>
          <h3>Connect With Me</h3>
          <p>Let&apos;s stay connected! Follow me on social media for<br />educational insights and updates.</p>
          
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialBtn} aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>Made with ❤️ for education</p>
        <p>© 2026 Megan B. Jessica. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;