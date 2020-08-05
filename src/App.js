import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./Firebase";
import "./App.css";

// import logo from './logo.svg';
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    //BEM Convention
    <div className="app">
      {/* <h1> Hello Welcome to Tik Tok Clone App 🚀</h1> */}

      <div className="app_video">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}

        {
          //Hard Coded
          /* <Video
          url="https://v16m.tiktokcdn.com/e14958f027e54215914479990b6622a2/5f2d1932/video/tos/useast2a/tos-useast2a-ve-0068c003/5ae6c99267a4425381cd6924dd285eec/?a=1233&br=2988&bt=1494&cr=0&cs=0&dr=0&ds=3&er=&l=202008050904490101902180960D000FB4&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzloeXQzaDNrdjMzaTczM0ApZDw0OjU5Ojs6NzQ2aDo1Nmdwc2dpaWhva19fLS02MTZzczJiLV40Ml80Ly8zMGIxLjI6Yw%3D%3D&vl=&vr="
          channel="rafehqazi"
          description="yeahhhhhhhh"
          song="yp yo yo"
          likes={121}
          messages={444}
          shares={90}
        />
        <Video /> */
        }
      </div>
    </div>
  );
}

export default App;
