import React, { useState, useEffect } from "react";
import styles from "./YoutubeVideos.module.css";

function YoutubesVideos() {
  const [YoutubeVideo, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD3_qZXWxS4NOXdL2r2NUw3a3dGbtCTGXQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&type=video&order=viewCount&maxResults=8"
    )
      .then((response) => response.json())
      .then((data) => {
        const YoutubeVideoData = data.items;
        setVideos(YoutubeVideoData);
      });
  }, []);
  console.log(YoutubeVideo);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Latest Apple Videos</h2>

      <div className={styles.grid}>
        {YoutubeVideo.map((SingleVideo, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/watch?v=${SingleVideo.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}>
            <div className={styles.card}>
              <img
                src={SingleVideo.snippet.thumbnails.high.url}
                alt={SingleVideo.snippet.title}
                className={styles.thumbnail}
              />
              <h3 className={styles.title}>{SingleVideo.snippet.title}</h3>
              <p className={styles.description}>
                {SingleVideo.snippet.description}
              </p>
              <p className={styles.date}>
                {new Date(SingleVideo.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default YoutubesVideos;
