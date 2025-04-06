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
          <img className="booking-zones_image" src={zone.imagen} alt={`Image of ${zone.nombre}`} />
          <h2 className="booking-zones_tittle">{zone.nombre}</h2>
          <p className="booking-zones_description">{zone.descripcion}</p>
          <p className="booking-zones_capacity">Capacidad: {zone.capacidad}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => handleReserveClick(zone.id)}
          >
            Reservar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Booking;