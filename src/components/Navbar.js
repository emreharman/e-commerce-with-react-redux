import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const chartState = useSelector((state) => state.chart);
  return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-secondary mb-5">
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
              {chartState.items.length}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
