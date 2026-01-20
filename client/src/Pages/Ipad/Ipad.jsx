import React from "react";
import styles from "./Ipad.module.css";
import "../../asset/css/bootstrap.css";

// Import local image
import ipadHero from "../../asset/images/others/iPad Pro (2022).jpg";

export default function Ipad() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} text-center`}>
        <div className="container">
          <h1 className={styles.title}>iPad Pro </h1>

          {/* Short Description */}
          <p className={styles.description}>Powerful. Portable. Magical.</p>

          <p className={styles.price}>From $449</p>

          <div className={styles.links}>
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>

          <div className={styles.imageWrap}>
            <img src={ipadHero} alt="iPad Pro 2022" />
          </div>
        </div>
      </section>
    </>
  );
}
