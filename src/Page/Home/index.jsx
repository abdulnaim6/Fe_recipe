import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import img1 from "../../assets/Rectangle 313 (1).png";
import Cards from "../../Components/Card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import RecipeList from "../../Components/Recipe";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleSearchClick = () => {
    navigate("/searchpage");
  };

  return (
    <div>
      <header>
        <Navbar expand="lg" bg="transparent" className="d-flex my-5">
          <div className="container-fluid">
            <div
              className="bgc"
              style={{
                backgroundColor: "yellow",
                width: "25%",
                height: "150vh",
                position: "absolute",
                right: 0,
                zIndex: -1,
              }}
            ></div>
            <div className="container d-flex flex-row ml-">
              <Navbar.Toggle
                className="navbar-toggler bg-secondary"
                aria-controls="navbarNavAltMarkup"
              />
              <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className="navbar-nav my-custom-navbar-nav">
                  <Link
                    style={{ marginRight: "20px", textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    style={{ marginRight: "20px", textDecoration: "none" }}
                    to="/addRecipe"
                  >
                    Add recipes
                  </Link>
                  <Link
                    style={{ marginLeft: "20px", textDecoration: "none" }}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </Nav>
                <div className="login" style={{ marginLeft: "40em" }}>
                  {isLoggedIn ? (
                    <span
                      style={{ marginLeft: "0.5em", cursor: "pointer" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </span>
                  ) : (
                    <Link style={{ textDecoration: "none" }} to="/login">
                      <span style={{ marginLeft: "0.5em" }}>Login</span>
                    </Link>
                  )}
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>

        <div className="container-fluid my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 ">
                <h1 className="awal">Discover Recipe & Delicious Food</h1>
                <div className="container mt-5 d-flex justify-content-between">
                  <div className="input-group flex-grow-1 me-2 w-50">
                    <input
                      type="text"
                      className="form-control form-control-md"
                      placeholder="Search Restaurant Food"
                      aria-label=".form-control-lg example"
                      name="searchQuery"
                      onClick={handleSearchClick}
                    />
                    <span className="input-group-text px-3">
                      <AiOutlineSearch />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Cards />
      <RecipeList />
      <Footer />
    </div>
  );
};

export default Home;
