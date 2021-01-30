import React, { useEffect, useState } from "react";
import backgroundMobile from "./kiel-crew-mobile.JPG";
import backgroundTablet from "./kiel-crew-tablet.JPG";
import backgroundDesktop from "./kiel-crew.jpg";
import { useWindowSize } from "./helper/windowSizeHook";
import './App.css';

function App() {
  const [showImage, setShowImage] = useState(true);
  const [countDown, setCountdown] = useState(10);
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const getBackground = () => {
    let background = backgroundMobile;
    if (isTablet) {
      background = backgroundTablet;
    }
    if (isDesktop) {
      background = backgroundDesktop;
    }
    return background;
  };
  const background = getBackground();
  useEffect(() => {
    const id = setTimeout(() => {
      setShowImage(false);
    }, 10000);
    return () => { clearTimeout(id); };
  }, []);
  useEffect(() => {
    const id = setTimeout(() => {
      if (countDown > 0) {
        setCountdown(c => c - 1);
      }
    }, 1000);
    return () => { clearTimeout(id); };
  }, [countDown]);
  return (
    <div className="App">
      {showImage ?
        <div className="img" style={{ backgroundImage: `url(${background})` }}>
          <div className="spanWrapper">
            <div className="textWrapper">
              <p>Unser Meeting beginnt in:</p>
              <p>{countDown}</p>
            </div>
          </div>
        </div>
        :
        <iframe allow="camera; microphone; fullscreen; display-capture" src="https://meet.jit.si/kielcrew" style={{ "height": "100vh", "width": "100vw", "border": "0px" }}></iframe>
      }
      {showImage && (<footer>
        Mit <span>&hearts;</span> und &#127863; von Thobbe &#38; Yvi.
      </footer>)}
    </div>
  );
}

export default App;

