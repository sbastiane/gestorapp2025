import React from "react";
import "./SpecialOffers.css";

const offers = [
  {
    id: 1,
    title: "New Adventures",
    description:
      "Maecenas turpis turpis, vehicula sed metus nec placerat congue turpis. In fringilla porttitor nist id sagittis ante ullamcorper et Phasellus auctor",
    image: "WhatsApp Image 2025-02-24 at 20.23.39_5c0a2e33.jpg",
  },
  {
    id: 2,
    title: "Grill Party with Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante elit, euismod in sollicitudin in, convallis varius turpis.",
    image: "WhatsApp Image 2025-02-24 at 20.25.27_8f0532b8.jpg",
  },
  {
    id: 3,
    title: "Diving for Half Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante elit, euismod in sollicitudin in, convallis varius turpis.",
    image: "WhatsApp Image 2025-02-24 at 20.28.37_f1c21dae.jpg",
  },
];

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h2 className="special-offers__title">Special Offers</h2>
      <div className="special-offers__list">
        {offers.map((offer) => (
          <div key={offer.id} className="special-offers__item">
            <img
              src={`img/${offer.image}`}
              alt={offer.title}
              className="special-offers__image"
            />
            <h3 className="special-offers__subtitle">{offer.title}</h3>
            <p className="special-offers__description">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
