'use client'
import React from 'react'
import styles from './Header.module.css'
import { caveat, inter } from '@/font'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import { animate, AnimatePresence, motion } from 'framer-motion'
import { MdOpacity } from 'react-icons/md'
import Image from 'next/image'

function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
    <header className = {styles.header}>
<nav className={styles.nav}>

  {/* 🔥 NEW WRAPPER FOR LOGO + NAME */}
  <div className={styles.brand}>
    <Image 
      className={styles.logo} 
      src={"/jessica-logo.png"} 
      alt={"logo"} 
      width={100} 
      height={100}
    />
    <h1 className={caveat.variable}>Megan B. Jessica</h1>
  </div>
      <AnimatePresence>
      
      {isOpen ? (    
        <motion.ul className={`${inter.className} ${styles.navUl} ${styles.active}`}
        key={"active"}
        initial= {{opacity:0, width:0}}
        animate= {{opacity:1, width:"40%"}}
        exit={{opacity:0, width:0}}
        transition={{duration:2 , type: "spring"}}>
        <CgCloseR size= {30} className={styles.close} onClick={()=>setIsOpen(false)}/>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#experience">Experience</Link></li>
        <li><Link href="/#subject">Subject</Link></li>
        <li><Link href="/#testimonials">Testimonials</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </motion.ul>
      ) 
      : 
      ( 
           <ul className={`${inter.className} ${styles.navUl}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#experience">Experience</Link></li>
        <li><Link href="/#subject">Subject</Link></li>
        <li><Link href="/#testimonials">Testimonials</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
      )}
      </AnimatePresence>
  
      <TiThMenu size={30} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>
    </nav>
    </header>
        </>
  )
}

export default Header