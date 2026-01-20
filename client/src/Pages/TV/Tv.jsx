import React from "react";
import styles from "./Tv.module.css";
import "../../asset/css/bootstrap.css";

// Import local image for Apple TV product
import appleTVHero from "../../asset/images/others/Apple TV.jpg";

export default function TV() {
  return (
    <section className={styles.heroWrapper}>
      <div className="container text-center">
        {/* Product Title */}
        <h1 className={styles.title}>Apple TV 4K</h1>

        {/* Short Description */}
        <p className={styles.subTitle}>
          Cinematic experience in your living room.
        </p>

        {/* Price */}
        <p className={styles.price}>From $229</p>

        {/* Action Buttons */}
        <div className={styles.linksWrapper}>
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>

        {/* Product Image */}
        <div className={styles.imageWrap}>
          <img
            src={appleTVHero}
            alt="Apple TV 4K"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
