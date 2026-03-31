import React from "react";
import styles from "./Stats.module.css";
import { inter } from "@/font";
import { FaUserGraduate, FaAward, FaBook, FaChartLine } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserGraduate />,
    number: "500+",
    label: "Students Taught",
  },
  {
    icon: <FaAward />,
    number: "15",
    label: "Awards Won",
  },
  {
    icon: <FaBook />,
    number: "20+",
    label: "Courses Designed",
  },
  {
    icon: <FaChartLine />,
    number: "95%",
    label: "Success Rate",
  },
];

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statsContainer}>
        {statsData.map((item, index) => (
          <div key={index} className={`${styles.card} ${inter.className}`}>
            
            <div className={styles.iconBox}>
              {item.icon}
            </div>

            <h2>{item.number}</h2>
            <p>{item.label}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;