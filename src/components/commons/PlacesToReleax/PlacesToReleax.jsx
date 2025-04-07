import React, { forwardRef } from "react";
import "./PlacesToReleax.css";

const PlacesToReleax = forwardRef((props, ref) => {
  return (
    <div className="place-to-relax" ref={ref}>
      <h2 className="place-to-relax__tittle">Places to Relax</h2>
      <div className="place-to-relax__gallery-container">
        <div className="place-to-relax__image">
          <div className="place-to-relax__image-banner-footer">
            Small a Sheder
          </div>
        </div>
        <div className="place-to-relax__image --with-playground">
          <div className="place-to-relax__image-banner-footer">
            With Playground
          </div>
        </div>
        <div className="place-to-relax__image --big-tent">
          <div className="place-to-relax__image-banner-footer">Big Tent</div>
        </div>
        <div className="place-to-relax__image --bungalow-on-the-beach">
          <div className="place-to-relax__image-banner-footer">
            Bungalow on the Beach
          </div>
        </div>
        <div className="place-to-relax__image --close-to-the-beach">
          <div className="place-to-relax__image-banner-footer">
            Close to the Beach
          </div>
        </div>
        <div className="place-to-relax__image --tent-city">
          <div className="place-to-relax__image-banner-footer">Tent City</div>
        </div>
      </div>
    </div>
  );
});

export default PlacesToReleax;