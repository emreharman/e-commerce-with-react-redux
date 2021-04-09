import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Chart = () => {
  const chartState = useSelector((state) => state.chart);
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
          {chartState.items.map((item) => {
            return (
              <div
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
                <h3>${item.price.toFixed(2)}</h3>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chart;
