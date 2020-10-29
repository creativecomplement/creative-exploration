// src/components/NasaPhoto.js

//Sync'd this evening 10/23/2020 to home, not able to run the NASA image
//First, needed to create the .env file with the key because I .gitignore that
//Then it still does not work. I went to api.nasa.gov and tested both the 
// my key then the demo_key. They are trying to return data/image for 
// 10/24/2020. That is on the API end of things.
//**** I need to add a null check and return a default value *****/
import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

var date = new Date();

const theDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${theDate}`
      );
      const data = await res.json();
      setPhotoData(data);
      //console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="nasa-photo pl-3">
      <p></p>
      {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
      <div>" "</div>
    </div>
  );
}

export default NasaPhoto;