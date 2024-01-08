import React, { useState, useEffect } from "react";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import icon from "../../assets/addrecipe.svg";
import "./style.css";
import Button from "../../Components/Button";
import axios from "axios";
import Swal from "sweetalert2";

const Addrecipe = () => {
  const [data, setData] = React.useState({
    name_food: "",
    picture: "",
    ingrediens: "",
    video: "",
  });
  console.log(data);

  const [isError, setIsError] = React.useState(false);
  const [savePicture, setSaveImage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
    console.log(uploader);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name_food", data.name_food);
    productData.append("picture", savePicture);
    productData.append("ingrediens", data.ingrediens);
    productData.append("video", data.video);

    axios
      .post(`${import.meta.env.VITE_API_URL}/addrecipe`, productData)
      .then((response) => {
        console.log(response);

        Swal.fire({
          icon: "success",
          title: "Recipe Posted Successfully!",
          showConfirmButton: false,
          timer: 3000,
        });
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err.errorMessage);
        setIsError(true);
        setErrorMessage("Data Error");
      });
  }

  return (
    <React.Fragment>
      {isError ? (
        <h1>{errorMessage}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
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
                      onChange={handleUpload}
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
                  name="name_food"
                  aria-label="form-control-lg example"
                  value={data.name_food}
                  onChange={handleChange}
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
                  name="ingrediens"
                  placeholder="Ingredients"
                  value={data.ingrediens}
                  onChange={handleChange}
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
                  name="video"
                  value={data.video}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="container-fluid my-5">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <Button text="Post" type="button" />
              </div>
            </div>
          </div>
          <Footer />
        </form>
      )}
    </React.Fragment>
  );
};

export default Addrecipe;
