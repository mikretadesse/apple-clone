import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.message}>Page Not Found</h2>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button className={styles.button} onClick={goHome}>
        Go Back Home
      </button>
    </div>
  );
}
