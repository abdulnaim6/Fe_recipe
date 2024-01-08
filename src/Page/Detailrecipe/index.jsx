import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import img1 from "../../assets/Popular For You.png";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const DetailRecipe = () => {
  const navigate = useNavigate();
  const { recipe_id } = useParams([]);
  const [recipe, setRecipe] = useState([]);

  const handleClick = (recipe_id) => {
    navigate(`/detailvideo/${recipe_id}`);
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/recipe/${recipe_id}`
        );
        console.log(response.data.message.rows);
        setRecipes(response.data.message.rows);
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <>
      <MyNavbar />
      {recipe.map((item) => (
        <section key={item.recipe_id}>
          <div className="container-fluid">
            <div className="row">
              <h1 className="col-xl-12 text-center">{item.name_food}</h1>
            </div>
            <div className="image row">
              <div className="col-xl-12 d-grid justify-content-center">
                <img src={item.picture} alt="" />
              </div>
            </div>
          </div>

          <div className="container-fluid mb-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <h2>Ingredients</h2>
                  <p className="desk">{item.ingrediens}</p>
                  {/* <p className="desk">- 60gr gula pasir</p>
                  <p className="desk">- 4 sdt baking powder</p>
                  <p className="desk">- 0.25 sdt soda kue</p>
                  <p className="desk">- 0.5 sdt garam</p>
                  <p className="desk">- 400ml susu segar</p>
                  <p className="desk">- 60gr mentega</p>
                  <p className="desk">- 2 sdt ekstrak vanila</p>
                  <p className="desk">- 1 telur</p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="container d-flex flex-column">
              <div className="row" style={{ marginBottom: "2.9069rem" }}>
                <div className="col-xl-12">
                  <h2>{item.video}</h2>
                </div>
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  style={{ marginBottom: "20px" }}
                  onClick={() => handleClick(recipe_id)}
                >
                  {/* <img src="./assets/play.svg" alt="" /> */}
                  <FaPlay />
                </button>
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
                        <img src="/assets/Ellipse 128 (1).svg" alt="" />
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
      ))}

      <Footer />
    </>
  );
};

export default DetailRecipe;
