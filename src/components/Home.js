import React from "react";
import LeftSide from "./LeftSide";
import PhoneList from "./PhoneList";

const Home = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "100px",
      }}
    >
      <LeftSide />
      <PhoneList />
    </div>
  );
};

export default Home;
