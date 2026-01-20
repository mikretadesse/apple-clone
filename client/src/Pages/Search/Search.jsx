import React from "react";
import styles from "./Search.module.css";
import "../../asset/css/bootstrap.css";

export default function Search() {
  return (
    <section className={styles.heroWrapper}>
      <div className="container text-center">
        {/* Product Title */}
        <h1 className={styles.title}>Apple Search</h1>

        {/* Short Description */}
        <p className={styles.subTitle}>
          Find your favorite Apple products and services easily.
        </p>

        {/* Search Input */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for products, apps, and more..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>

        {/* Action Buttons */}
        <div className={styles.linksWrapper}>
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
