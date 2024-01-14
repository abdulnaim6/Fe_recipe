import { useState, useEffect } from "react";
import MyNavbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Detailvideo = () => {
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/recipe/${recipe_id}`
        );
        console.log(response.data);
        setRecipe(response.data.data[0]);
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      }
    };
    fetchRecipe();
  }, []);
  return (
    <>
      <MyNavbar />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="vidleft col-xxl-8 offset-lg-1 col-md-12">
              <div className="embed-responsive">
                <iframe
                  className="video embed-responsive-item"
                  src={recipe.video}
                  allowFullScreen
                  style={{ width: "1100px", height: "600px" }}
                ></iframe>
              </div>
              <h1 className="h1">{recipe.name_food}</h1>
              <p>3 Tahun lalu</p>
            </div>
            <div
              className="vidright col-xxl-3 col-md-12 d-flex flex-column align-items-start"
              style={{ marginLeft: "8em" }}
            >
              <h1 className="h2">Next</h1>
              <div className="right my-4">
                <div className="embed-responsive">
                  <iframe
                    className="video embed-responsive-item"
                    src="https://www.youtube.com/embed/nBKxxCEkY6w"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5>CHICKEN KATSU SAUS TERIYAKI</h5>
                <p>Eriska Nugrahani - 3 Bulan lalu</p>
              </div>
              <div className="fotok mb-4">
                <div className="embed-responsive">
                  <iframe
                    className="video embed-responsive-item"
                    src="https://www.youtube.com/embed/e1xrl5Kct5E"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5>OMELET</h5>
                <p>Arnold Poernomo - 4 Tahun lalu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailvideo;
