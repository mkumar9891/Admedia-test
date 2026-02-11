import React from "react";

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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Featured products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why Choose us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Newsletter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customer Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header2;
