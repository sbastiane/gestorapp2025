import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiFrown } from "react-icons/fi";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <FiFrown size={80} />
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">¡Página no encontrada!</h2>
        <p className="not-found-text">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <button 
          className="not-found-button"
          onClick={() => navigate("/")}
        >
          <FiHome className="button-icon" />
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;