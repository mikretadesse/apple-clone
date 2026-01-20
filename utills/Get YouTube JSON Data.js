/*
✅ CLEAR STEPS TO GET JSON DATA FROM YOUTUBE 
=============================
 Get YouTube JSON Data Steps
=============================
To get JSON data from YouTube (like video titles, thumbnails, upload date, etc.), we must use the YouTube Data API v3.
1️⃣ Enable YouTube Data API v3
   - Go to Google Cloud Console
   - Enable "YouTube Data API v3"

2️⃣ Create an API Key
   - Cloud Console → Credentials → Create API Key
   - Copy your API key

3️⃣ Choose a YouTube Channel
   - Example: Apple → Channel ID = UCE_M8A5yxnLfW0KghEeajjw

4️⃣ Create the API Request URL
   - Example:
     https://www.googleapis.com/youtube/v3/search
     ?key=YOUR_API_KEY
     &channelId=UCE_M8A5yxnLfW0KghEeajjw
     &part=snippet
     &type=video
     &order=date
     &maxResults=9
- Example:https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&type=video&order=date&maxResults=10

- The above request returns JSON data of the latest 10 videos from Apple’s YouTube channel.

5️⃣ Use JavaScript Fetch API to get JSON data
   Example code below:
*/
// ===============================
// YouTube API Fetch Code Example
// ===============================

const API_KEY = "YOUR_API_KEY";
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=9`;
    
const API_URL = https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=9




fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log("YouTube JSON Data:", data.items);

    // You can loop the list of videos:
    data.items.forEach((video) => {
      console.log("Title:", video.snippet.title);
      console.log("Thumbnail:", video.snippet.thumbnails.high.url);
      console.log("Video ID:", video.id.videoId);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

/*
=========================
What you get from this code
=========================
✔ Video title
✔ Video thumbnail
✔ Video ID
✔ Upload date & channel info

=========================
Important Security Notes
=========================
✔ Never expose API key publicly
✔ Restrict API key to your domain (www.yourwebsite.com)
✔ If key is leaked → Delete and create a new one

=========================Personal data =========================
1️⃣ API key 2 = AIzaSyCQyP1kkLy9UwIzYAlA8yGG78ic35LIImg
2️⃣ APPLE_CHANNEL_ID = UCE_M8A5yxnLfW0KghEeajjwg
3️⃣ Link to get my APIs & Services from google cloud.
  -https://console.cloud.google.com/apis/credentials?project=magnificent-pen-477416-r4
*/

https://www.googleapis.com/youtube/v3/search?key=AIzaSyCQyP1kkLy9UwIzYAlA8yGG78ic35LIlmg&channelId=UCE_M8A5yxnLfW0KghEeajjwg&part=snippet&type=video&order=date&maxResults=9

https://www.googleapis.com/youtube/v3/search?key=AIzaSyCQyP1kkLy9UwIzYAlA8yGG78ic35LIImg&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&type=video&order=date&maxResults=8