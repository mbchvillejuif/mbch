import React, { useState, useRef } from 'react';
import amenContent from '../assets/img/amen_inter/amen_inter-content.jpg';
import batimentContent from '../assets/img/batiment/batiment-content.png';
import video1 from '../assets/video/video1.mp4';
import video2 from '../assets/video/video2.mp4';
import video3 from '../assets/video/video3.mp4';
//import video4 from '../assets/video/video4.mp4'; // Nouvelle vidéo
//import video5 from '../assets/video/video5.mp4'; // Nouvelle vidéo

const handleButtonClick = () => {
  const element = document.getElementById('service');
  if (element) {
    const yCoordinate = element.offsetTop;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  }
};

const Content = () => {
  const videoList = [video1, video2, video3]; // Liste des vidéos

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videoList.length - 1 ? 0 : prevIndex + 1)); // Changer la vidéo
    videoRef.current.load(); // Charger la nouvelle vidéo
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Condition pour afficher la vidéo uniquement en mode PC */}
      <video
        ref={videoRef}
        src={videoList[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }} // Ajout de la propriété CSS object-fit
      />
      <div className="relative flex flex-col md:flex-row items-center justify-center m-30 mt-[295px]">
        {/* Afficher l'image amenContent en mode mobile */}
        <div className="w-full md:hidden h-[45%] md:h-auto mb-[10%] md:mb-65 order-1 md:order-1">
          <img src={amenContent} alt="Image1" className="w-full h-full" />
        </div>
        <div className="w-full md:w-[55%] flex flex-col items-center justify-center text-center order-2 md:order-2">
          <br />
          <h1 className="font-bold text-[#000] text-7xl">MBCH</h1>
          <br />
          <button onClick={handleButtonClick} className="mt-4 p-2 bg-[#049062] text-white solid ">Découvrir</button>
          <br />
        </div>
        {/* Afficher l'image batimentContent en mode mobile */}
        <div className="w-full md:hidden h-[45%] md:h-auto mt-[10%] md:mt-54 order-3 md:order-3">
          <img src={batimentContent} alt="Image2" className="w-full h-full" />
        </div>
        <br />
      </div>  
    </div>
  );
}

export default Content;
