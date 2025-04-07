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
        <h2 className="not-found-subtitle">¡Page not found!</h2>
        <p className="not-found-text">
        Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button 
          className="not-found-button"
          onClick={() => navigate("/")}
        >
          <FiHome className="button-icon" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;