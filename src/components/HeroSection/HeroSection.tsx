// 'use client'
// import React from 'react'
// import styles from './HeroSection.module.css'
// import { inter } from '@/font'
// import Button from '../Button/Button'
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa"; 
// import { FaWhatsapp } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import Image from 'next/image';
// import {motion} from "framer-motion"
// import { Typewriter } from 'react-simple-typewriter'

// function HeroSection() {
//   return (
//     <>
//     <section className={`${styles.hero} ${inter.className}`}>
//         <h1>
//             Hello I am <span className={styles.name}>Megan B. Jessica</span>
//             {" "}
//             <motion.span style={{ fontSize: "3.125rem", display: "inline-block" }}
//             animate={{rotate: [0,15,-10,20,-10,0]}}
//             transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
//             >
//             🎓
//             </motion.span>  
//             <br />
//             <Typewriter
//             words={['Inspiring minds, shaping futures through innovative education']}
//             loop={Infinity}
//             cursor={true}
//             cursorStyle={"_"}
//             typeSpeed={80}
//             deleteSpeed={40}
//             delaySpeed={1500}/>
//         </h1>
//         <p>I can build user interface for web sites and applications with <span></span>
//         <br />I love the frontend development.</p>
//         <Button text={"Hire Me"}/>
        
//         <div className={styles.socialIconsDiv}>
//           <FaFacebookF size={30} color='black'/>
//           <FaXTwitter size={30} color='black'/>
//           <FaInstagram size={30} color='black'/>
//           <FaWhatsapp size={30} color='black'/>
//           <FaTelegramPlane size={30} color='black'/>
//         </div>

//         <div className={styles.bottomImageDiv}>
//           <Image src = {"/fiverr.png"} alt = {"Fiverr picture"} width = {156} height= {56}></Image>
//           <Image src = {"/upwork.png"} alt = {"upwork picture"} width = {156} height= {56}></Image>
          
//         </div>
//     </section>
//     </>
//   )
// }

// export default HeroSection