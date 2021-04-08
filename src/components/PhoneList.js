import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhones } from "../redux/actions/phonesActions";
import Phone from "./Phone";

const PhoneList = () => {
  const phonesState = useSelector((state) => state.phones);
  const dispatch = useDispatch();
  const [columnCount, setColumnCount] = useState(3);
  const layoutClassName = `row row-cols-${columnCount}`;
  let phones = phonesState.phones;
  const color = { color: "#1E90FF" };
  useEffect(() => {
    dispatch(getPhones);
  }, []);
  return (
    <div style={{ width: "75%" }}>
      <div
        className="alert alert-secondary"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <div>
          <span>Change Layout: </span>
          <span
            className="layout-button"
            style={columnCount == 3 ? color : { color: "gray" }}
            onClick={() => setColumnCount(3)}
          >
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
          </span>
          <span
            className="layout-button"
            style={columnCount == 4 ? color : { color: "gray" }}
            onClick={() => setColumnCount(4)}
          >
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
            <i className="fas fa-square"></i>
          </span>
        </div>
      </div>
      <div>
        <div className={layoutClassName}>
          {phonesState.success ? (
            <>
              {phones.map((phone) => {
                return <Phone phone={phone} />;
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PhoneList;
