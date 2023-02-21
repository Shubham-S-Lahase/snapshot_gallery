import React, { useEffect } from "react";
import { useState } from "react";

const Food = ({ api }) => {
  const [photos, setPhotos] = useState([]);
  const getImages = async () => {
    await fetch(`${api}`)
      .then(async (response) => await response.json())
      .then((images) => setPhotos(images.photos.photo));
  };

  useEffect(() => {
    getImages();
  }, []);

  // console.log(photos);

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
  </style>;

  return (
    <>
      {!photos.length ? (
        <div>Loading...</div>
      ) : (
        <div id="img">
          <h1 style={{display:"block", width:"100%", fontFamily: 'Acme', fontSize:"40px"}}>Food Pictures</h1>
          {photos.map((photo, i) => {
            let imgurl = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return (
              <div>
                <img key={i} src={imgurl} alt="Food Image" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Food;
