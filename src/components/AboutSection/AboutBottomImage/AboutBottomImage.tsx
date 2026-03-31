'use client'
import React from 'react'
import styles from './AboutBottomImage.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'

// parent
const containerVariants = {
    hidden: {},
    show: {transition: { 
      staggerChildren: 0.5,
    } },
  };

// child
const itemVariants = {
    hidden: {opacity:0, y:20},
    show: {opacity:1, y:0},
  };


function AboutBottomImage() {
  return (
    <>
    <motion.section className={styles.aboutBottomImage}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    >
      <motion.div variants={itemVariants}><Image src = {"/linkedin.png"} alt = {"facebook picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={itemVariants}> <Image src = {"/facebook.png"} alt = {"node picture"} width={110} height={110}></Image></motion.div>
      <motion.div variants={itemVariants}><Image src = {"/udemy-new.png"} alt = {"next picture"} width={130} height={80}></Image></motion.div>
      <motion.div variants={itemVariants}><Image src = {"/corsera.png"} alt = {"next picture"} width={80} height={80}></Image></motion.div>
        
    </motion.section></>
  )
}

export default AboutBottomImage