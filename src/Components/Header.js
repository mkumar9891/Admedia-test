import React from "react";
import logo from "../images/Logo.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg shadow-sm">
          <div className="container">
            {/* LOGO (no active underline) */}
            <Link className="navbar-brand fw-bold" to="/">
              <img src={logo} className="img-fluid logo-w" alt="Logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu Items */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-white"
                        : "nav-link text-white"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-white"
                        : "nav-link text-white"
                    }
                  >
                    Featured products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/case-study"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-white"
                        : "nav-link text-white"
                    }
                  >
                    Why Choose us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/expertise"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-white"
                        : "nav-link text-white"
                    }
                  >
                    Newsletter
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-white"
                        : "nav-link text-white"
                    }
                  >
                    Career
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active text-white"
                        : "nav-link text-white"
                    }
                  >
                    Customer Testimonials
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
