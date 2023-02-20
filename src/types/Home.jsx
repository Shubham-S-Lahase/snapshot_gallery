import React, { useEffect } from "react";
import { useState } from "react";

const Home = ({ api }) => {
  const [photos, setPhotos] = useState([]);
  const getImages = async () => {
    await fetch(`${api}`)
      .then( async (response) => await response.json())
      .then((images) => setPhotos(images.photos.photo));
  };

  useEffect(() => {
    getImages();
  }, []);

  // console.log(photos);

  return(
  <>
    {!photos.length ?
        <div>Loading...</div>
        :
        <div id="img">
            {
                photos.map((photo, i) => {
                    let imgurl = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                    return <div>
                        <img key={i} src={imgurl} alt="Random Images" />
                    </div>
                })
            }
        </div>

    }
  </>
  )
};

export default Home;