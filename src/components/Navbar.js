import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-secondary">
        <div className="container">
          <a className="navbar-brand" href="#">
            e-commerce
          </a>
          <a href="#" className="navbar-brand" style={{ position: "relative" }}>
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
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
