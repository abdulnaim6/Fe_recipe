import React from "react";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import icon from "../../assets/addrecipe.svg";
import "./style.css";
import Button from "../../Components/Button";

const Addrecipe = () => {
  return (
    <>
      <MyNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <div className="image position-relative">
                <input
                  className="form-control opacity-0"
                  type="file"
                  id="image"
                  // onChange={handleImageChange}
                />
                <div id="icon">
                  <img
                    src={icon}
                    alt="icon"
                    style={{ width: 50, height: 50 }}
                  />
                  <div className="addimg">Add photo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <input
              style={{ width: "1300px" }}
              id="title"
              className="form-control"
              type="text"
              placeholder="Title"
              aria-label="form-control-lg example"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center text-start">
            <textarea
              style={{ width: "1300px" }}
              id="ingredients"
              className="form-control"
              name="ingredients"
              placeholder="Ingredients"
              // value={ingredients}
              // onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <input
              style={{ width: "1300px" }}
              id="Video"
              className="form-control"
              type="text"
              placeholder="Video"
              aria-label="form-control-lg example"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <Button href="#" text="Submit" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Addrecipe;
