import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/brandsActions";
import { getPhones } from "../redux/actions/phonesActions";

const PriceFilter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const brandsState = state.brands;
  const phonesState = state.phones;
  useEffect(() => {
    dispatch(getBrands);
    dispatch(getPhones);
  }, []);
  return (
    <div>
      <div className="card">
        <div className="card-header">Price Sort</div>
        <ul className="list-group list-group-flush">
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
