import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/brandsActions";
import { getPhones } from "../redux/actions/phonesActions";

const PriceFilter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const brandsState = state.brands;
  const phonesState = state.phones;
  const [priceFilter, setPriceFilter] = useState("");
  useEffect(() => {
    dispatch(getBrands);
    dispatch(getPhones);
    dispatch({ type: "PRICE_FILTER_UPDATE", payload: priceFilter });
  }, [priceFilter]);
  return (
    <div>
      <div className="card">
        <div
          className="card-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Price Sort</span>{" "}
          {priceFilter != "" ? (
            <span
              style={{
                fontSize: "12px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setPriceFilter("");
                document.getElementById("high").checked = false;
                document.getElementById("low").checked = false;
              }}
            >
              Remove Filter
            </span>
          ) : null}
        </div>
        <ul
          className="list-group list-group-flush"
          onChange={(e) => setPriceFilter(e.target.id)}
        >
          {brandsState.success && phonesState.success ? (
            <>
              <li className="list-group-item">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="low"
                />
                <label
                  className="form-check-label"
                  htmlFor="low"
                  style={{
                    display: "inline-block",
                    marginLeft: "1rem",
                  }}
                >
                  Low to High
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="high"
                />
                <label
                  className="form-check-label"
                  htmlFor="high"
                  style={{
                    display: "inline-block",
                    marginLeft: "1rem",
                  }}
                >
                  High to Low
                </label>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default PriceFilter;
