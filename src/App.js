import React, { useEffect, useState } from "react";
import image from './kiel-crew.jpg';
import './App.css';

function App() {
  const [showImage, setShowImage] = useState(true);
  const [countDown, setCountdown] = useState(5);
  useEffect(() => {
    const id = setTimeout(() => {
      setShowImage(false);
    }, 5000);
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
      {showImage && (
        <div className="spanWrapper">
          <div className="textWrapper">
            <p>Unser Meeting beginnt in:</p>
            <p>{countDown}</p>
          </div>
        </div>
      )}
      {showImage ?
        <img src={image} alt="" />
        :
        <iframe allow="camera; microphone; fullscreen; display-capture" src="https://meet.jit.si/kielcrew" style={{ "height": "100vh", "width": "100vw", "border": "0px" }}></iframe>
      }
    </div>
  );
}

export default App;
