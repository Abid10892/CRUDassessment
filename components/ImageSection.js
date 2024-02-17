import React from "react";
// import background from "./image/airplane.png";
import styles from "./page.module.css";
import Image from "next/image";

export default function ImageSection() {
  return (
    <div className={styles.imageSection}>
      <div className={styles.logoContainer}>
        <Image
          src={"/airplane.png"}
          width={35}
          height={25}
          alt="flight"
          className={styles.logo}
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.h1}>Altitude & Air</h1>
        <div className={styles.line}></div>
        <p>
          We promise to ensure that your well-being is taken care of while
          travelling with us. Boasting top in class fleet inventory and a 5 star
          approval for our in-flight experience, you know you're getting the
          best from Altitude with no attitude.
        </p>
      </div>
    </div>
  );
}
