import React from "react";
import styles from "./Support.module.css";
import "../../asset/css/bootstrap.css";

// Import local images
import supportHero from "../../asset/images/others/apple-support-hero.png";

export default function Support() {
  const supportTopics = [
    { id: 1, title: "Apple ID & iCloud", link: "#" },
    { id: 2, title: "iPhone & iPad", link: "#" },
    { id: 3, title: "Mac & MacBook", link: "#" },
    { id: 4, title: "Apple Watch", link: "#" },
    { id: 5, title: "Music & Media", link: "#" },
    { id: 6, title: "Apple Repair", link: "#" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} text-center`}>
        <div className="container">
          <h1 className={styles.title}>Apple Support</h1>
          <p className={styles.description}>
            Find answers, get help, and connect with Apple experts.
          </p>
          <div className={styles.links}>
            <a href="#">Contact Support</a>
            <a href="#">Find a Store</a>
          </div>
          <div className={styles.imageWrap}>
            <img src={supportHero} alt="Apple Support" />
          </div>
        </div>
      </section>

      {/* Support Topics Section */}
      <section className={`${styles.topics} text-center`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Popular Support Topics</h2>
          <div className="row">
            {supportTopics.map((topic) => (
              <div key={topic.id} className="col-md-4 mb-4">
                <div className={styles.topicCard}>
                  <a href={topic.link}>{topic.title}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
