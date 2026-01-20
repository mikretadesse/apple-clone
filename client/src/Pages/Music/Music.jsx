import React from "react";
import styles from "./Music.module.css";
import "../../asset/css/bootstrap.css";

// Local images for featured playlists
import playlist1 from "../../asset/images/others/playlist1.jpg";
import playlist2 from "../../asset/images/others/playlist2.jpg";
import playlist3 from "../../asset/images/others/playlist3.jpg";

export default function Music() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroWrapper}>
        <div className="container text-center">
          <h1 className={styles.title}>Apple Music</h1>
          <p className={styles.subTitle}>
            Stream 100 million songs ad-free. Discover playlists, albums, and
            live radio shows.
          </p>
          <div className={styles.linksWrapper}>
            <ul>
              <li>
                <a href="#">Try it free</a>
              </li>
              <li>
                <a href="#">Learn more</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Playlists Section */}
      <section className={styles.playlistsSection}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>Featured Playlists</h2>
          <div className="row">
            {[playlist1, playlist2, playlist3].map((img, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className={styles.playlistCard}>
                  <img src={img} alt={`Playlist ${idx + 1}`} />
                  <div className={styles.playlistTitle}>Playlist {idx + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple One / Subscription Highlight */}
      <section className={styles.subscriptionSection}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>Apple One</h2>
          <p className={styles.subTitle}>
            All your favorite Apple services in one subscription, including
            Apple Music.
          </p>
          <div className={styles.linksWrapper}>
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Subscribe</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
