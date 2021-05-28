import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
        <p className="footer-heading">
          This website was made by Karolina Zielonka.
        </p>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              BIKE
            </Link>
          </div>
          <small class="website-rights">BIKE © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
