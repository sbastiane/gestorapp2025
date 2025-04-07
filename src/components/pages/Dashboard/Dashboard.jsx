import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Calendar from "../../commons/Calendar/Calendar";
import { zones } from "../../../data/data";
import { useSearchParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const zoneId = searchParams.get("zone");
  const [selectedSpace, setSelectedSpace] = useState(null);

  useEffect(() => {
    if (zoneId) {
      const space = zones.find(zone => zone.id.toString() === zoneId);
      setSelectedSpace(space || null);
    } else {
      setSelectedSpace(null);
    }
  }, [zoneId]);

  return (
    <div className="dashboard-container">
      {selectedSpace ? (
        <div className="single-zone-view">
          <button 
            className="back-button"
            onClick={() => setSelectedSpace(null)}
          >
            <FiArrowLeft /> Volver a todas las zonas
          </button>
          <div className="zone-info">
            <h2>{selectedSpace.nombre}</h2>
            <p>{selectedSpace.descripcion}</p>
          </div>
          <Calendar 
            zoneId={selectedSpace.id} 
            zoneName={selectedSpace.nombre} 
          />
        </div>
      ) : (
        <div className="all-zones-view">
          <h2>Todas las zonas disponibles</h2>
          <div className="zones-list">
            {zones.map((space) => (
              <div key={space.id} className="zone-card">
                <div className="zone-header">
                  <h3>{space.nombre}</h3>
                  <p>{space.descripcion}</p>
                </div>
                <Calendar 
                  zoneId={space.id} 
                  zoneName={space.nombre} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;