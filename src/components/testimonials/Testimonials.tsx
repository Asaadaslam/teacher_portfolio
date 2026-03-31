// "use client";
// import React from "react";
// import styles from "./Testimonials.module.css";
// import { caveat, inter } from "@/font";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import TestimonialCard from "./testimonial-card/testimonialCard";
// import Autoplay from 'embla-carousel-autoplay'

// function Testimonials() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})]);
//   return (
//     <>
//       <section id="testimonials" className={styles.testimonials}>
//         <h1 className={caveat.className}>
//           <span>W</span>hat <span>O</span>ther <span>P</span>eople{" "}
//           <span>S</span>ay{" "}
//         </h1>
//         <div className={styles.embla}>
//           <div className={styles.embla__viewport} ref={emblaRef}>
//             <div className={styles.embla__container}>
//               <TestimonialCard />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Testimonials;


// components/Experience/Testimonials.tsx
import React from 'react';
import styles from './Testimonials.module.css';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;        // Circle photo URL (placeholder bhi chalega)
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  image,
  rating,
  index,
}) => {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={styles.quoteIcon}>❞</div>
      
      <div className={styles.rating}>
        {'★'.repeat(rating)}
      </div>

      <p className={styles.quote}>{quote}</p>

      <div className={styles.person}>
        <img 
          src={image} 
          alt={name}
          className={styles.avatar}
        />
        <div>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Ms. Mitchell transformed the way I think about mathematics. Her innovative teaching methods made complex calculus concepts feel intuitive and exciting.",
      name: "Emily Johnson",
      role: "Former Student, Now at MIT",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "Both my children have thrived under Ms. Mitchell's guidance. She doesn't just teach subjects; she instills a genuine love for learning.",
      name: "David Chen",
      role: "Parent of Two Students",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "As a colleague, I've seen her dedication firsthand. Her ability to connect with students and explain difficult concepts is truly remarkable.",
      name: "Sarah Williams",
      role: "Mathematics Department Head",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },
    {
      quote: "Ms. Mitchell made me believe that I could actually understand math. Her patience and creative approach changed my entire academic journey.",
      name: "Ahmed Khan",
      role: "Grade 12 Student",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5
    },
    {
      quote: "The best math teacher our school has ever had. My daughter went from hating math to scoring 95% in her finals thanks to her.",
      name: "Mrs. Fatima Ali",
      role: "Parent",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 5
    },
    {
      quote: "Working with Ms. Mitchell has been inspiring. She brings new energy and modern teaching techniques to our department.",
      name: "Michael Rodriguez",
      role: "Colleague & Senior Teacher",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5
    }
  ];

  return (
    <section style={{ 
      padding: '110px 20px', 
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 700, 
          color: '#6b21a8', 
          margin: '0 0 12px 0',
          letterSpacing: '-1px'
        }}>
          What People Say
        </h1>
        <p style={{ 
          fontSize: '22px', 
          color: '#64748b', 
          maxWidth: '520px', 
          margin: '0 auto'
        }}>
          Testimonials from students, parents, and colleagues
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            rating={testimonial.rating}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;