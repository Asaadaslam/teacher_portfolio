import React from 'react'
import styles from "./testimonialCard.module.css";
import { inter } from "@/font";
import Image from "next/image";
import { testimonialCards } from "@/constant/testimonialCards";

function testimonialCard() {
  return (
    <>
    {testimonialCards.map( (card, index)=>{return(
    <div className={`${styles.Card} ${inter.className}`} key={index}>
                <div className={styles.CardImage}>
                  <Image
                    src={card.src}
                    alt={"Testimonial"}
                    width={150}
                    height={150}
                  />
                </div>
                <p>{card.name}</p>
                <p><span>{card.title}</span></p>
                <p style={{marginBottom: "0px"}}>
                  {card.description}
                </p>
              </div>
    
    )})}
    </>
              
  )
}

export default testimonialCard