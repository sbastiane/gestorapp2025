import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import { zones } from "../../../data/data";

const Booking = () => {
  const [residentialZones, setResidentialZones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setResidentialZones(zones);
  }, [zones]);

  const handleReserveClick = (zoneId) => {
    navigate(`/dashboard?zone=${zoneId}`);
  };

  return (
    <div className="booking-zones">
      {residentialZones.map((zone) => (
        <div className="booking-zones_zone" key={zone.id}>
          <img className="booking-zones_image" src={zone.image} alt={`Image of ${zone.name}`} />
          <h2 className="booking-zones_tittle">{zone.name}</h2>
          <p className="booking-zones_description">{zone.description}</p>
          <p className="booking-zones_capacity">Capacity: {zone.capacity}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => handleReserveClick(zone.id)}
          >
            Booking
          </button>
        </div>
      ))}
    </div>
  );
};

export default Booking;