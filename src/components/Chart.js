import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromChart, emptyChart } from "../redux/actions/chartActions";
import { Link } from "react-router-dom";

const Chart = () => {
  const chartState = useSelector((state) => state.chart);
  const dispatch = useDispatch();
  let total = 0;
  for (let i = 0; i < chartState.items.length; i++) {
    total += chartState.items[i].price;
  }
  //I should filter array here.

  return (
    <div
      className="container"
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70%",
          minHeight: "50vh",
          padding: "2rem",
        }}
      >
        <h1 className="text-center">Chart</h1>
        <div>
          {chartState.items.map((item, index) => {
            return (
              <div
                key={index}
                className="chart"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "70px",
                    justifyContent: "center",
                  }}
                >
                  <img src={item.images[0]} style={{ width: "50px" }} alt="" />
                </div>
                <p>{item.title}</p>
                <h3 style={{ color: "rgb(253, 188, 68)" }}>
                  ${item.price.toFixed(2)}
                </h3>
                <button
                  className="chart-delete-button"
                  onClick={() =>
                    dispatch((dispatch) => deleteFromChart(dispatch, item))
                  }
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          {chartState.items.length == 0 && (
            <p className="text-center">
              Chart is empty. <Link to="/">Click here</Link> for shopping{" "}
            </p>
          )}
        </div>

        <div>
          {chartState.items.length != 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "2rem",
                padding: "1rem",
              }}
            >
              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch(emptyChart)}
              >
                Empty Chart
              </button>
              <h1 style={{ color: "rgb(253, 188, 68)" }}>
                Total: ${total.toFixed(2)}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;
