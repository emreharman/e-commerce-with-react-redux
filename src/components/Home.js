import React from "react";
import LeftSide from "./LeftSide";
import PhoneList from "./PhoneList";

const Home = () => {
  return (
    <div
      className="container mt-5"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <LeftSide />
      <PhoneList />
    </div>
  );
};

export default Home;
