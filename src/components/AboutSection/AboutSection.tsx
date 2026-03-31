'use client'
import React from 'react'
import styles from './AboutSection.module.css'
import { caveat, inter } from '@/font'
import Button from '../Button/Button'
import Image from 'next/image'
import {motion} from 'framer-motion'

const AboutSection = () => {
  return (
    <section id='about' className={styles.about}>
      <motion.div className={styles.aboutleftdiv}
      initial={{opacity:0, x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, type:"spring",}}
      >
     <h1>
            Hello I am 
              <motion.span style={{ fontSize: "3.125rem", display: "inline-block" }}
            animate={{rotate: [0,15,-10,20,-10,0]}}
            transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
            >
            🎓
            </motion.span> <br /> 
            <span className={styles.name}>Megan B. Jessica</span>
            {" "}
            
        </h1> 
        <p className={caveat.className}>Educator & Mentor</p>
        <h2 className={`${styles.detailsText} ${inter.className}`}>With over 10 years of experience in secondary education, I specialize in making complex concepts accessible and engaging for all learners.</h2>
        <Button text={"Contact Me"}/> 
      </motion.div>
      <motion.div className={styles.aboutrightdiv}
      initial= {{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, type:"spring",}}
      >
        <Image src= {"/profile-new.png"} alt = {"Profile Picture"} width={350} height={350}></Image>
      </motion.div>
    </section>
  )
}

export default AboutSection