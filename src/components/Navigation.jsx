import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1><span className="creative-complement-text">Creative Complement</span></h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  <span className="creative-complement-text">Home</span>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                <span className="creative-complement-text">About</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/nasa" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/nasa">
                <span className="creative-complement-text">Nasa</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/sheets" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/sheets">
                <span className="creative-complement-text">Sheets</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                <span className="creative-complement-text">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);