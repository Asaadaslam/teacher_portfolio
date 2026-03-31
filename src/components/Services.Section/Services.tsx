  // import React from "react";
  // import styles from "./Services.module.css";
  // import { caveat, inter } from "@/font";
  // import ServicesCard from "./Services.card/ServicesCard";


  // function Services() {
  //   return (
  //     <>
  //       <section id="services" className={styles.services}>
  //         <h1 className={`${styles.servicesHeading} ${caveat.className}`}>
  //           <span>S</span>ubject {" "}
  //           <span>E</span>xpertise{" "}
  //         </h1>
  //         <p className={inter.className}>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
  //           dolorum at, et, <br />
  //           assumenda repellat ad rem nesciunt autem officiis provident error
  //           sapiente sequi, molestias fugit ab soluta quasi repudiandae sint!
  //         </p>
  //         <div className={styles.servicesCardDiv}>
  //           <ServicesCard/>
  //         </div>
  //       </section>
  //     </>
  //   );
  // }

  // export default Services;

  import React from "react";
import styles from "./Services.module.css";
import { caveat, inter } from "@/font";
import ServicesCard from "./Services.card/ServicesCard";

function Services() {
  return (
    <section id="services" className={styles.services}>
      <h1 className={`${styles.servicesHeading} ${caveat.className}`}>
        <span>S</span>ubject <span>E</span>xpertise
      </h1>

      <p className={inter.className}>
        Specialized teaching across multiple disciplines
      </p>

      <div className={styles.servicesCardDiv}>
        <ServicesCard />
      </div>
    </section>
  );
}

export default Services;
