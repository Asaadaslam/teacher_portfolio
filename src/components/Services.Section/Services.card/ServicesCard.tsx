// 'use client'
// import React, { useRef } from "react";
// import Image from 'next/image'
// import { caveat, inter } from "@/font";
// import styles from "./ServicesCard.module.css";
// import { servicesCard } from "@/constant/servicesCard";
// import { ImInsertTemplate } from 'react-icons/im';
// import {motion, useMotionValue, useTransform} from "framer-motion"


// function ServicesCard() {
//   return (
//     <>
//    {servicesCard.map((item, index) => {
//     return (
//     <Card item={item} key={index}/>
//    );
//    })}
//     </>
//   );
// }


// // card component

// function Card({item}:{item:{src:string, title:string,description:string}}){
//   const cardRef = useRef<HTMLDivElement | null>(null)
//   const mouseX= useMotionValue(0)
//   const mouseY= useMotionValue(0)

//   const rotateX= useTransform(mouseY,[-100,100], [20, -20])
//   const rotateY= useTransform(mouseX,[-100,100], [-20, 20])

//   const handleMouseMove = (e:React.MouseEvent)=>{
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect()
//     const x = e.clientX - rect.left - rect.width/2
//     const y = e.clientY - rect.top - rect.height/2

//     mouseX.set(x)
//     mouseY.set(y)
//   }

//   const handleMouseLeave = ()=> {
//     mouseX.set(0)
//     mouseY.set(0)

//   }
  
//   return(
//     <motion.div className={`${styles.card} ${inter.className}`} 
//     ref = {cardRef} 
//     style={{perspective:1000, rotateX:rotateX, rotateY:rotateY}}
//     onMouseMove={handleMouseMove}
//     onMouseLeave={handleMouseLeave}> 
//             <div className={styles.cardImage}>
//               <Image
//                 src={item.src}
//                 alt="Branding"
//                 width={60}
//                 height={60}
//               ></Image>
//             </div>
//             <h1>{item.title}</h1>
//             <p>
//               {item.description}
//             </p>
//           </motion.div>
//   )
// }
// export default ServicesCard


"use client";

import React from "react";
import Image from "next/image";
import { inter } from "@/font";
import styles from "./ServicesCard.module.css";
import { servicesCard } from "@/constant/servicesCard";
import { motion } from "framer-motion";

function ServicesCard() {
  return (
    <>
      {servicesCard.map((item, index) => (
        <Card item={item} key={index} index={index} />
      ))}
    </>
  );
}

function Card({
  item,
  index,
}: {
  item: { src: string; title: string; description: string };
  index: number;
}) {
  const colors = ["#0EA5E9", "#22C55E", "#D946EF", "#F97316"];
  const accent = colors[index % colors.length];

return (
  <div className={`${styles.card} ${inter.className}`}>
    <div className={styles.iconRow}>
      <div className={styles.cardImage} style={{ backgroundColor: accent }}>
        <Image src={item.src} alt={item.title} width={55} height={55} />
      </div>

      <div className={styles.fadedIcon}>
        <Image src={item.src} alt="" width={120} height={120} />
      </div>
    </div>

    <h1 style={{ color: accent }}>{item.title}</h1>

    <p>{item.description}</p>
  </div>
);
}

export default ServicesCard;