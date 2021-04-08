import React, { useState } from "react";
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const [isHover, setIsHover] = useState(false);
  const unVisibleButton = { visibility: "hidden" };
  return (
    <div className="col mt-5">
      <div
        className="card p-2"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link to={{ pathname: `/phone-detail/${phone.id}`, phone: phone }}>
          <img src={phone.images[0]} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <Link
            to={{ pathname: `/phone-detail/${phone.id}`, phone: phone }}
            style={{
              textDecoration: "none",
              fontSize: "0.8rem",
            }}
          >
            {phone.title}
          </Link>
          <h4>${phone.price.toFixed(2)}</h4>
          <p
            className="card-text"
            style={{ fontSize: "0.7rem", marginBottom: "3rem" }}
          >
            {phone.description}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="#"
              className="btn btn-primary "
              style={isHover ? null : unVisibleButton}
            >
              Add to Chart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
