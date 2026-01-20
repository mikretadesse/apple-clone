import React from "react";
import styles from "./Watch.module.css";
import "../../asset/css/bootstrap.css";

// Import local images
import watchSeries8 from "../../asset/images/others/Apple Watch Series 8.jpg";
import watchUltra from "../../asset/images/others/Apple Watch Ultra.jpg";

function Watch() {
  return (
    <>
      {/* Section 1 — Apple Watch Series 8 */}
      <section className={`${styles.hero} text-center`}>
        <div className="container">
          <p className={styles.new}>New</p>
          <h1 className={styles.title}>Apple Watch Series 8</h1>
          <p className={styles.tagline}>A healthy leap ahead.</p>
          <div className={styles.links}>
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>

          <div className={styles.imageWrap}>
            <img src={watchSeries8} />
          </div>
        </div>
      </section>

      {/* Section 2 — Apple Watch SE */}
      <section className={`${styles.sectionDark} text-center`}>
        <div className="container">
          <h2 className={styles.subTitle}>Apple Watch Ultra</h2>
          <p className={styles.description}>
            Heavy on features. Light on price.
          </p>

          <div className={styles.links}>
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>

          <img className={styles.sectionImage} src={watchUltra} />
        </div>
      </section>
    </>
  );
}

export default Watch;
