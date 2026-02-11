import React from "react";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container custom-navbar">
          {/* Logo */}
          <a className="navbar-brand logo" href="#">
            AdMedia<span>.</span>
          </a>
          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navmenu"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Featured products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Why Choose us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Newsletter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {" "}
                  Customer Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header2;
