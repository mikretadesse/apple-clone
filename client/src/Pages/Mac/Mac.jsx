import React from "react";
import styles from "./Mac.module.css";
import "../../asset/css/bootstrap.css";
import { macProducts } from "./macProducts"; // import the data

export default function Mac() {
  return (
    <>
      {macProducts.map((product) => (
        <section key={product.id} className={styles.heroSection}>
          <div className="container text-center">
            {product.new && <p className={styles.new}>New</p>}
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
            <div className={styles.links}>
              <a href={product.link}>Learn more</a>
              <a href={product.link}>Buy</a>
            </div>
            <div className={styles.imageWrap}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
