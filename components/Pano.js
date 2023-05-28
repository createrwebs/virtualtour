import * as PANOLENS from "panolens";
import { useState,useEffect } from "react";
import ReactPlayer from "react-player";

const panorama = new PANOLENS.ImagePanorama("../../assets/pano3.jpg");

const viewer = new PANOLENS.Viewer({
  container: document.querySelector("#coucou")
});

viewer.add(panorama);
const Pano = () => {

    const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
       {
        hasWindow && 
         <div id="coucou" >
        {}
      </div>
      
    } 
     
    </>
  );
};

export default Pano;
