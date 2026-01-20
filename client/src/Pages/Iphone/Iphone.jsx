import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Iphone.module.css";

function Iphone() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2024/iphone")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <section className={`container-fluid ${styles.container}`}>
      <h1 className={styles.title}>iPhones</h1>
      <p className={styles.subtitle}>The best for the brightest.</p>

      {products.map((item, index) => (
        <div
          key={item.product_id}
          className={`row ${styles.productRow} ${
            index % 2 === 1 ? styles.reverse : ""
          }`}>
          {/* Text Section */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className={styles.productName}>{item.product_name}</h2>
            {item.product_brief_description && (
              <p className={styles.description}>
                {item.product_brief_description}
              </p>
            )}
            {item.starting_price && (
              <p className={styles.price}>Starting at {item.starting_price}</p>
            )}
            {item.price_range && (
              <p className={styles.price}>{item.price_range}</p>
            )}
            <div className={styles.actions}>
              <Link
                className={styles.learnMore}
                to={`/iphone/${item.product_id}`}>
                Learn more &#x276F;
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`col-md-6 d-flex justify-content-center align-items-center ${styles.imageWraper}`}>
            <img
              src={item.product_img}
              alt={item.product_name}
              className={styles.image}
              onError={(e) => (e.target.src = "/fallback.jpg")}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Iphone;
