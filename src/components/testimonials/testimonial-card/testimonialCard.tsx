// // import React from 'react'
// // import styles from "./testimonialCard.module.css";
// // import { inter } from "@/font";
// // import Image from "next/image";
// // import { testimonialCards } from "@/constant/testimonialCards";

// // function testimonialCard() {
// //   return (
// //     <>
// //     {testimonialCards.map( (card, index)=>{return(
// //     <div className={`${styles.Card} ${inter.className}`} key={index}>
// //                 <div className={styles.CardImage}>
// //                   <Image
// //                     src={card.src}
// //                     alt={"Testimonial"}
// //                     width={150}
// //                     height={150}
// //                   />
// //                 </div>
// //                 <p>{card.name}</p>
// //                 <p><span>{card.title}</span></p>
// //                 <p style={{marginBottom: "0px"}}>
// //                   {card.description}
// //                 </p>
// //               </div>
    
// //     )})}
// //     </>
              
// //   )
// // }

// // export default testimonialCard

// testimonialCard.tsx
import React from 'react';
import styles from "./testimonialCard.module.css";
import { inter } from "@/font";
import Image from "next/image";
import { testimonialCards } from "@/constant/testimonialCards";

function TestimonialCard() {
  return (
    <div className={styles.testimonialContainer}>
      {testimonialCards.map((card, index) => (
        <div className={styles.Card} key={index}>
          <div className={styles.CardImage}>
            <Image
              src={card.src}
              alt={card.name}
              width={100}
              height={100}
              priority
            />
          </div>

          <div className={styles.stars}>★★★★★</div>

          {/* Yeh line important hai - text cut hone se rokne ke liye */}
          <p className={styles.description}>
            {card.description}
          </p>

          <div>
            <p className={styles.name}>{card.name}</p>
            <p className={styles.title}>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;