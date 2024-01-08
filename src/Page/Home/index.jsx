import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import img1 from "../../assets/Rectangle 313 (1).png";
import Cards from "../../Components/Card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import axios from "axios";
import RecipeList from "../../Components/Recipe";

const Home = () => {
  // const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  // const getRecipe = () => {
  //   axios.get(`${import.meta.env.VITE_API_URL}/recipe`).then((res) => {
  //     console.log(res.data);
  //     setRecipe(res.data);
  //   });
  // };
  // useEffect(() => {
  //   getRecipe();
  // }, []);

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
                  <Link style={{ marginRight: "20px" }} to="/">
                    Home
                  </Link>
                  <Link style={{ marginRight: "20px" }} to="/addRecipe">
                    Add recipes
                  </Link>
                  <Link style={{ marginLeft: "20px" }} to="/profile">
                    Profile
                  </Link>
                </Nav>
                <div className="login" style={{ marginLeft: "40em" }}>
                  <Link to="/login">
                    <span style={{ marginLeft: "0.5em" }}>Login</span>
                  </Link>
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
                <div className="button-search" style={{ height: "30px" }}>
                  <input
                    className=""
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                    onClick={handleSearchClick}
                  />
                  <datalist list id="datalistOptions">
                    <option value="Chicken Kare" />
                    <option value="Bomb Chicken" />
                    <option value="Banana Smothie Pop" />
                    <option value="Cofee Lava Cake" />
                    <option value="Sugar Salmon" />
                    <option value="Indian Salad" />
                  </datalist>
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
