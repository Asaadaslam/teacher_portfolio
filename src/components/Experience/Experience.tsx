// import React from 'react'
// import styles from './Portfolio.module.css'
// import { caveat } from '@/font'
// import { inter } from '@/font'
// import Image from 'next/image'
// import PortfolioCard from './PortfolioCard/PortfolioCard'


// function Portfolio() {
//   return (
//     <>
//     <section id='portfolio' className = {styles.portfolio}>
//         <h1 className={caveat.className}> 
//         <span>M</span>y {" "}
//         <span>L</span>ast {" "}
//         <span>W</span>ork</h1>
//         <p className={inter.className}>bjsdjksdn kajnjasnfas hdjsfnkjsd  ohsd iuhfdsjnb hsdiofnkb hsdji
//             <br />fhds hbdh hyyd yyd yy is uygds gis <br />
//             jsdhnjnsd hjnd ijhid ii dis jnjdn ojnsd ijhisd iidd 
//         </p>
//         <div className={styles.myWork}>
//             <PortfolioCard />

//             </div>
//         </section>

//     </>
//   )
// }

// export default Portfolio

// components/Experience/Experience.tsx
import React from 'react';
import styles from './Experience.module.css';

interface ExperienceCardProps {
  date: string;
  title: string;
  institution: string;
  description: string;
  achievements: string[];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  date,
  title,
  institution,
  description,
  achievements,
  index,
}) => {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={styles.accentBar} />
      
      <div className={styles.contentWrapper}>
        <div className={styles.dateBadge}>{date}</div>
        
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.institution}>{institution}</h4>
        
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.achievements}>
          {achievements.map((achievement, i) => (
            <li 
              key={i} 
              className={styles.achievement}
              style={{ animationDelay: `${i * 80 + 300}ms` }}
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "2020 - Present",
      title: "Senior Mathematics Teacher",
      institution: "Riverside High School",
      description: "Leading the mathematics department and developing innovative curriculum",
      achievements: [
        "Increased student pass rate by 25%",
        "Implemented digital learning tools",
        "Mentored 5 junior teachers"
      ]
    },
    {
      date: "2015 - 2020",
      title: "Mathematics Teacher",
      institution: "Lincoln High School",
      description: "Delivered comprehensive mathematics instruction to grades 9-12",
      achievements: [
        "Boosted average test scores by 18%",
        "Led after-school tutoring program serving 80+ students",
        "Developed cross-curricular STEM projects"
      ]
    },
    {
      date: "2010 - 2015",
      title: "Assistant Mathematics Teacher",
      institution: "Brookfield Academy",
      description: "Supported lead teachers in lesson planning and student assessment",
      achievements: [
        "Assisted in curriculum development for algebra and geometry",
        "Facilitated 20+ student workshops and math clubs",
        "Received 'Excellence in Teaching' award (2014)"
      ]
    }
  ];

  return (
    <section style={{ 
      padding: '100px 20px', 
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 700, 
          color: '#6b21a8', 
          margin: '0 0 12px 0',
          letterSpacing: '-1px'
        }}>
          Teaching Journey
        </h1>
        <p style={{ 
          fontSize: '22px', 
          color: '#64748b', 
          maxWidth: '480px', 
          margin: '0 auto'
        }}>
          A decade of dedication to educational excellence
        </p>
      </div>

      <div style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',
  width: '100%',
  maxWidth: '860px',     // ← Ye line add kar do
  margin: '0 auto'
}}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            title={exp.title}
            institution={exp.institution}
            description={exp.description}
            achievements={exp.achievements}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;