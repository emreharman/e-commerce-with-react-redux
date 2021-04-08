import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/brandsActions";
import { getPhones } from "../redux/actions/phonesActions";

const Brands = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const brandsState = state.brands;
  const phonesState = state.phones;
  useEffect(() => {
    dispatch(getBrands);
    dispatch(getPhones);
  }, []);
  return (
    <div className="mb-5">
      <div className="card">
        <div className="card-header">Brands</div>
        <ul className="list-group list-group-flush">
          {brandsState.success && phonesState.success ? (
            <>
              {brandsState.brands.map((brand) => {
                const brandHasPhones = phonesState.phones.filter((phone) => {
                  if (phone.brandId === brand.id) {
                    return true;
                  }
                });
                return (
                  <li className="list-group-item" key={brand.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={brand.id}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                      style={{
                        display: "inline-block",
                        marginLeft: "1rem",
                      }}
                    >
                      {brand.name[0].toUpperCase() + brand.name.substring(1)} (
                      {brandHasPhones.length})
                    </label>
                  </li>
                );
              })}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
