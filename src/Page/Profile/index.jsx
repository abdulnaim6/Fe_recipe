import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import MyNavbar from "../../Components/Navbar";
import "./style.css";
import MyRecipe from "../../Components/MyRecipe";
// import { MdModeEdit } from "react-icons/md";
import UpdateProfile from "../../Components/UpdateProfile";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/redis/${userId}`
        );
        console.log(response.data.data[0]);
        setUser(response.data.data[0]);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <React.Fragment>
      <div>
        <MyNavbar />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg d-flex flex-column align-items-center">
                <div className="fotoprofile position-relative">
                  <div className="col-12 text-center" id="display-picture">
                    <img
                      src={user.picture}
                      style={{ width: 170, height: 170, borderRadius: 80 }}
                      className="img-fluid circle-image"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-center" id="dropdown">
                    <UpdateProfile />
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Change Photo Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="nameprofile">{user.name}</h1>
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
                  {/* <a
                    className="btn"
                    data-bs-toggle="collapse"
                    href="#SavedRecipe"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SavedRecipe"
                  >
                    Saved Recipe
                  </a> */}
                  {/* <a
                    className="btn"
                    data-bs-toggle="collapse"
                    href="#LikedRecipe"
                    role="button"
                    aria-expanded="false"
                    aria-controls="LikedRecipe"
                  >
                    Liked Recipe
                  </a> */}
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
