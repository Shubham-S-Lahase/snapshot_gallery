import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "./context";

const SearchImages = ({ api }) => {
  const [photos, setPhotos] = useState("");
  const { category } = useContext(CategoryContext);
  console.log(category);
  const getImages = async () => {
    await fetch(`${api}`)
      .then(async (response) => await response.json())
      .then((images) => setPhotos(images.photos.photo));
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(photos);

  return (
    <>
      {!photos.length ? (
        <div>Loading...</div>
      ) : (
        <div id="img">
          {photos.map((photo, i) => {
            let imgurl = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return (
              <div>
                <img key={i} src={imgurl} alt="searched image" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchImages;
