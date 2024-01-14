import React from "react";
import Footer from "../../Components/Footer";
import MyNavbar from "../../Components/Navbar";
import "./style.css";
import MyRecipe from "../../Components/MyRecipe";
import { MdModeEdit } from "react-icons/md";

const Profile = () => {
  return (
    <React.Fragment>
      <div>
        <MyNavbar />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg d-flex flex-column align-items-center">
                <div className="fotoprofile position-relative">
                  <div className="dropdown-center" id="dropdown">
                    <button
                      style={{ width: "20px", height: "25px" }}
                      className="btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdModeEdit />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Change Photo Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="nameprofile">Garneta Sharina</h1>
              </div>
            </div>
          </div>

          <div
            className="drop container-fluid"
            style={{ marginBottom: "40em" }}
          >
            <div className="row">
              <div className="col-lg">
                <p className="d-inline-flex gap-1" id="dro">
                  <a
                    className="btn"
                    data-bs-toggle="collapse"
                    href="#MyRecipe"
                    role="button"
                    aria-expanded="false"
                    aria-controls="MyRecipe"
                  >
                    My Recipe
                  </a>
                  <a
                    className="btn"
                    data-bs-toggle="collapse"
                    href="#SavedRecipe"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SavedRecipe"
                  >
                    Saved Recipe
                  </a>
                  <a
                    className="btn"
                    data-bs-toggle="collapse"
                    href="#LikedRecipe"
                    role="button"
                    aria-expanded="false"
                    aria-controls="LikedRecipe"
                  >
                    Liked Recipe
                  </a>
                </p>
                <div className="collapse" id="MyRecipe">
                  <div className="card card-body d-flex flex-row">
                    <MyRecipe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Profile;
