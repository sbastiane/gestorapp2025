import React, { useRef } from "react";
import "./Home.css";
import PlacesToReleax from "../../commons/PlacesToReleax/PlacesToReleax";
import SpecialOffers from "../../commons/SpecialOffers/SpecialOffers";

const Home = () => {
  const placesToRelaxRef = useRef(null);

  const scrollToPlaces = () => {
    placesToRelaxRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    
    // Añade la clase para la animación
    setTimeout(() => {
      placesToRelaxRef.current?.classList.add('in-view');
    }, 100);
  };

  return (
    <>
      <div className="home">
        <div className="home__gradient-overlay"></div>
        <div className="home__content">
          <div className="home__text-container">
            <h1 className="home__title">
              <span className="home__title-line">THE BEST FOR YOUR</span>
              <span className="home__title-line home__title-line--highlight">REST</span>
            </h1>
            <p className="home__subtitle">
              <span className="home__subtitle-underline">Bungalow on the beach - Rangiroa Polynesia.</span>
            </p>
            <button className="home__button" onClick={scrollToPlaces}>
              <span>More information</span>
              <span className="home__button-icon">→</span>
            </button>
          </div>
        </div>
      </div>
      <PlacesToReleax ref={placesToRelaxRef} />
      <SpecialOffers />
    </>
  );
};

export default Home;