import React from "react";
import "./Footer.css";
import image from "/img/WhatsApp Image 2025-02-24 at 20.28.37_f1c21dae.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section footer__about">
          <h3 className="footer__title">We are here for your convenience</h3>
          <p className="footer__text">
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            augue, luctus metus. Lorem ipsum dolor sit amet, consectetur eu
            vulputate magna eros eu erat.
          </p>
        </div>

        <div className="footer__section footer__products">
          <h3 className="footer__title">Top Rated Products</h3>
          <div className="footer__product">
            <img
              src={image}
              alt="Test Product"
              className="footer__product-image"
            />
            <div className="footer__product-info">
              <span className="footer__product-name">Test Product</span>
              <div className="footer__product-rating">★★★★★</div>
              <div className="footer__product-price">
                <span className="footer__product-price--old">£200.00</span>
                <span className="footer__product-price--new">£100.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__section footer__categories">
          <h3 className="footer__title">Categories</h3>
          <div className="footer__categories-list">
            <span className="footer__category">Programming</span>
            <span className="footer__category">Uncategorized</span>
            <span className="footer__category">Web Development</span>
            <span className="footer__category">Webdesign</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 Copyright by <span className="footer__brand">JSAH</span>. All
          rights reserved.
        </p>
        <nav className="footer__nav">
          <Link to={"/home"} className="footer__link">
            Home
          </Link>
          <Link to={"/dashboard"} className="footer__link">
            Dashboard
          </Link>
          <Link to={"/booking"} className="footer__link">
            Booking
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
