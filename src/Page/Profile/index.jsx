import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import MyNavbar from "../../Components/Navbar";
import "./style.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import MyRecipe from "../../Components/MyRecipe";
import UpdateProfile from "../../Components/Updaterecipe";

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
                      className="btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
                          stroke="#EFC81A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
