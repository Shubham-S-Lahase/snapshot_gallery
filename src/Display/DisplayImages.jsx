import "./DisplayImages.css";
import { useContext } from "react";
import { CategoryContext } from "../context";
import Home from "../types/Home";

const DisplayImages = () => {
  const { category } = useContext(CategoryContext);
  console.log(category);

  return (
    <div className="imagescontainer">
        {category == "Home" && (
            <>
                <Home api="https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=686e8872e630c25f29294e8ba3545d57&gallery_id=72157721498159408&format=json&nojsoncallback=1"/>
            </>
        ) || category == "Mountain" && (
            <>
                <p>Mountain</p>
            </>
        ) || category == "Beaches" && (
            <>
                <p>Beaches</p>
            </>
        ) || category == "Birds" && (
            <>
                <p>Birds</p>
            </>
        ) || category == "Food" && (
            <>
                <p>Food</p>
            </>
        )}
    </div>
  );
};

export default DisplayImages;

