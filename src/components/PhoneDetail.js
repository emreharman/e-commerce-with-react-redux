import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/brandsActions";

const PhoneDetail = (props) => {
  const brandsState = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  const phone = props.location.phone;
  const [activeImg, setActiveImg] = useState(phone.images[0]);
  let brandName;
  if (brandsState.success) {
    const findBrand = brandsState.brands.find((brand) => {
      if (brand.id === phone.brandId) {
        return true;
      }
    });
    brandName = findBrand.name;
    brandName = brandName[0].toUpperCase() + brandName.substring(1);
  }
  useEffect(() => {
    dispatch(getBrands);
  }, []);
  return (
    <div
      className="container"
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="images">
        <div className="big-image">
          <img src={activeImg} alt="" />
        </div>
        <div
          className="small-images"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {phone.images.map((img) => {
            return (
              <img
                src={img}
                alt=""
                style={{
                  width: "30px",
                  border: "1px solid rgba(197, 197, 197, 0.74)",
                  cursor: "pointer",
                }}
                onClick={(e) => setActiveImg(e.target.src)}
              />
            );
          })}
        </div>
      </div>
      <div className="phone-content" style={{ marginLeft: "40px" }}>
        <h3>{phone.title}</h3>
        <h3 style={{ color: "rgb(253, 188, 68)" }}>
          ${phone.price.toFixed(2)}
        </h3>
        <div>
          <p style={{ margin: "0" }}>
            <b>Description</b>
          </p>
          <p style={{ margin: "0" }}>{phone.description}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Brand</b>
          </p>
          <p style={{ margin: "0" }}>{brandName}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Camera</b>
          </p>
          <p style={{ margin: "0" }}>{phone.camera}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>CPU</b>
          </p>
          <p style={{ margin: "0" }}>{phone.cpu}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Memory</b>
          </p>
          <p style={{ margin: "0" }}>{phone.memory}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Display</b>
          </p>
          <p style={{ margin: "0" }}>{phone.display}</p>
        </div>
        <div>
          <p style={{ margin: "0" }}>
            <b>Battery</b>
          </p>
          <p style={{ margin: "0" }}>{phone.battery}</p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="btn btn-outline-primary">Add to Chart</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
