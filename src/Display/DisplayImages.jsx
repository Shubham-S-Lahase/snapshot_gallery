import React, { useEffect, useState } from "react";
import "./DisplayImages.css";

const DisplayImages = () => {
    const [photos, setPhotos] = useState([]);
   useEffect(() => {
    fetch(
        `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721497868204&format=json&nojsoncallback=1`)
        .then((response) => response.json())
        .then((res) => {
          const images = res;
        //   console.log(res);
          setPhotos(images.photos.photo);
        });
   }, [])

  return (
    <>
      <div className="imagescontainer">
        {photos.map((photo, i) => {
            // console.log(photo);
          let url = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          console.log(url);
           return <img src={url} alt="img" />
        })}
      </div>
    </>
  );
};

export default DisplayImages;

//686e8872e630c25f29294e8ba3545d57
//snapshot galllery id - 72157721497868204
