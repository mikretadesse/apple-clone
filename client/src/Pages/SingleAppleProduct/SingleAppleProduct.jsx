import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./SingleAppleProduct.module.css";

function SingleAppleProduct() {
  const { pid } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:2024/iphone/${pid}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [pid]);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
  if (!product) return <h2 className="text-center mt-5">Product not found</h2>;

  return (
    <section className="container">
      <h1 className={styles.title}>{product.product_name}</h1>
      <p className={styles.subtitle}>{product.product_brief_description}</p>
      <div className={styles.content}>
        <img
          src={product.product_img}
          alt={product.product_name}
          className={styles.image}
        />
        <div className={styles.details}>
          <p className={styles.price}>Starting at {product.starting_price}</p>
          {product.price_range && (
            <p className={styles.priceRange}>{product.price_range}</p>
          )}
          <p className={styles.description}>{product.product_description}</p>
          <Link to="/iphone" className={styles.backLink}>
            &larr; Back to iPhones
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SingleAppleProduct;
