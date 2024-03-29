/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaPlay } from "react-icons/fa";
import img1 from "../../assets/Ellipse 127 (1).svg";
import { Link, useParams } from "react-router-dom";

const DetailRecipe = () => {
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (recipe_id) {
          const response = await axios.get(
            `https://be-recipe-two.vercel.app/recipe/${recipe_id}`
          );
          console.log(response.data);
          setRecipe(response.data.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      }
    };
    fetchRecipe();
  }, [recipe_id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MyNavbar />

      <section key={recipe.recipe_id}>
        <div className="container-fluid justify-content-center">
          <div className="row">
            <h1 className="col-xl-12 text-center">{recipe.name_food}</h1>
          </div>
          <div className="image row justify-content-center">
            <div className="col-xl-12 d-grid justify-content-center">
              <img src={recipe.picture} alt="" />
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5" style={{ marginTop: "16em" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <p className="desk">{recipe.ingrediens}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container d-flex flex-column">
            <div className="row" style={{ marginBottom: "2.9069rem" }}>
              <div className="col-xl-12"></div>
              <Link to={`/detailvideo/${recipe.recipe_id}`}>
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  style={{ marginBottom: "20px", width: "500px" }}
                  // onClick={() => handleClick(recipe_id)}
                >
                  <FaPlay />
                </button>
              </Link>
            </div>
            <div className="container-fluid">
              <div className="container d-flex flex-column">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="d-grid col-6 mx-auto justify-content-center">
                    <div className="btn btn-warning" type="button">
                      Submit
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 my-4">
                    <h2>Comment</h2>
                  </div>
                  <div className="col-12">
                    <div className="ucomment d-flex">
                      <img src={img1} alt="" />
                      <div className="commentuser mx-4">
                        <p className="user">Ayudia</p>
                        <p className="cmnt">
                          Nice recipe. simple and delicious, thankyou
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailRecipe;
