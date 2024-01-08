import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="container-fluid text-center d-flex justify-items-center align-items-center flex-column mt-5 p-5"
          style={{ background: "#EFC81A", width: "100vw" }}
        >
          <div className="row">
            <div className="col-12">
              <h1 className="foth1">Eat,Cook,Repeat</h1>
              <p
                style={{
                  color: "#707070",
                  fontFamily: "Airbnb Cereal App",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Share your best recipe by uploading here!
              </p>
              <span className="foot">
                <a href="#" className="foot my-3 mx-3">
                  Product
                </a>
                <a href="#" className="foot my-3 mx-3">
                  Company
                </a>
                <a href="#" className="foot my-3 mx-3">
                  Learn More
                </a>
                <a href="#" className="foot my-3 mx-3">
                  Get in Touch
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
