import React from "react";
import { SocialIcon } from "react-social-icons";

const AppContainer = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">VA</h1>
        <div className="video">
          <iframe
            className="player"
            width="400"
            height="200"
            src="https://www.youtube.com/embed/8KIcsZw2XNg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <a className="link" href="https://vasa.bandcamp.com" target="blank">
          BUY HEROICS ON VINYL/CD
        </a>
        <a
          className="link"
          href="https://vasa.bandcamp.com/merch"
          target="blank"
        >
          BUY MERCH
        </a>
        <a
          className="link"
          href="https://ripcordrecords.bandcamp.com/merch"
          target="blank"
        >
          TAPES AVAILABLE VIA RIPCORD RECORDS
        </a>
        <div className="social-container">
          <SocialIcon
            url="https://open.spotify.com/artist/0qb2PA9d6mQD2RwY5MdfW5?si=IKmkI6FFT9KZZg5BLsVn1Q"
            target="blank"
            network="spotify"
            bgColor="GoldenRod"
            className="icon"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://music.apple.com/us/artist/vasa/27755625"
            target="blank"
            network="itunes"
            bgColor="GoldenRod"
            className="icon"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://instagram.com/vasaband"
            target="blank"
            network="instagram"
            bgColor="GoldenRod"
            className="icon"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://www.facebook.com/vasaband"
            target="blank"
            network="facebook"
            bgColor="GoldenRod"
            className="icon"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://twitter.com/vasaband"
            target="blank"
            network="twitter"
            bgColor="GoldenRod"
            className="icon"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCsN2Etfsh0xBbzcSa4Tjksw"
            target="blank"
            network="youtube"
            bgColor="GoldenRod"
            className="icon"
            style={{ height: 50, width: 50 }}
          />
        </div>
      </div>
    </>
  );
};

export default AppContainer;
