import "./DisplayImages.css";
import { useContext } from "react";
import { CategoryContext } from "../context";
import Home from "../types/Home";
import Mountain from "../types/Mountain";
import Beaches from "../types/Beaches";
import Birds from "../types/Birds";
import Food from "../types/Food";
import SearchImages from "../SearchImages";

const DisplayImages = () => {
  const { category } = useContext(CategoryContext);
  console.log(category);
  const cats = ["Home", "Mountain", "Beaches", "Birds", "Food"];

  return (
    <div className="imagescontainer">
        {category == "Home" && (
            <>
                <Home api="https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721498159408&format=json&nojsoncallback=1"/>
            </>
        ) || category == "Mountain" && (
            <>
                <Mountain api="https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721497868204&format=json&nojsoncallback=1"/>
            </>
        ) || category == "Beaches" && (
            <>
                <Beaches api="https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721498680473&format=json&nojsoncallback=1"/>
            </>
        ) || category == "Birds" && (
            <>
                <Birds api="https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721498719578&format=json&nojsoncallback=1" />
            </>
        ) || category == "Food" && (
            <>
                <Food api=" https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721511530237&format=json&nojsoncallback=1" />
            </>
        ) || !cats.includes(category) && (
            <>
                <SearchImages api={`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=686e8872e630c25f29294e8ba3545d57&text=${category}&format=json&nojsoncallback=1`} />
            </>
        )}
    </div>
  );
};

export default DisplayImages;

