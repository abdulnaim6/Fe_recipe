import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import icon from "../../assets/addrecipe.svg";
import "./style.css";
import Button from "../../Components/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { InputRecipe } from "../../config/redux/action/recipeAction";

const Addrecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name_food: "",
    picture: "",
    ingrediens: "",
    video: "",
    users_id: localStorage.getItem("userId"),
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setData({
      ...data,
      picture: uploader,
    });
  };

  const handleSubmit = async (e) => {
    if (!data.users_id) {
      setIsError(true);
      setErrorMessage("User ID is missing");
      return;
    }
    e.preventDefault();
    const productData = new FormData();
    productData.append("name_food", data.name_food);
    productData.append("picture", data.picture);
    productData.append("ingrediens", data.ingrediens);
    productData.append("video", data.video);
    productData.append("users_id", data.users_id);

    try {
      await dispatch(InputRecipe(productData));
      Swal.fire({
        icon: "success",
        title: "Recipe Posted Successfully!",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage("Data Error");
      Swal.fire({
        icon: "error",
        title: "Add Recipe Failed",
      });
    }
  };

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
                  placeholder="Link Video Youtube"
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
                <Button text="Post" type="submit" />
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
