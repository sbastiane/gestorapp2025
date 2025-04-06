import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import Calendar from "../../commons/Calendar/Calendar";
import { zones } from "../../../data/data";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const zoneId = searchParams.get('zone');
  const selectedZone = zones.find(zone => zone.id === Number(zoneId));

  if (!selectedZone) {
    return <div className="dashboard-error">Zona no encontrada</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img 
          src={selectedZone.imagen} 
          alt={`Imagen de ${selectedZone.nombre}`} 
          className="dashboard-image"
        />
        <div className="dashboard-info">
          <h1 className="dashboard-title">{selectedZone.nombre}</h1>
          <p className="dashboard-description">{selectedZone.descripcion}</p>
          <div className="dashboard-details">
            <p><strong>Capacidad:</strong> {selectedZone.capacidad} personas</p>
            <p><strong>Reservas activas:</strong> {selectedZone.reservas?.length || 0}</p>
          </div>
        </div>
      </div>
      
      <h2 className="calendar-title">Calendario de reservas</h2>
      <Calendar zoneId={zoneId} zoneName={selectedZone.nombre} />
    </div>
  );
};

export default Dashboard;