import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            e-commerce
          </Link>
          <Link
            to="/chart"
            className="navbar-brand"
            style={{ position: "relative" }}
          >
            <i className="fas fa-shopping-cart"></i>
            <span
              className="badge bg-danger"
              style={{
                display: "inline-block",
                position: "absolute",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                fontSize: "10px",
                textAlign: "center",
                lineHeight: "12px",
              }}
            >
              0
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
