import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/Popular For You.png";
import img2 from "../../assets/Rectangle 327.png";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [recipe, setRecipe] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const getRecipe = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/recipe`).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
    });
  };
  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <section>
      <Container fluid className="my-5">
        <Container>
          <Row>
            <Col>
              <h2 className="pop">Popular For You !</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="container-fluid my-5">
        <div className="container">
          <div className="d-flex">
            <div className="col-md-12 col-lg-4 offset-lg-1">
              <img src={img1} alt="" style={{ height: 450, width: 450 }} />
            </div>
            <div className="col-md-12 col-lg-5 offset-lg-1">
              <h1 className="h1">Healthy Sandwich (Quick & Easy)</h1>
              <p className="p1">Quick + Easy Sandwich. Very yummy.</p>
              <button className="btn btn-warning">
                <a href="detailrecipe.html">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="pop">New Recipe</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-4 offset-lg-1 order-lg-first">
              <img src={img2} alt="" style={{ height: 450, width: 450 }} />
            </div>
            <div className="col-lg-5 offset-lg-1 text-left">
              <h1 className="h1">Healthy Donut (Quick & Easy)</h1>
              <p className="p1">
                Quick + Easy Donut - Healthy Donut in a hurry? That’s right!
              </p>
              <button className="btn btn-warning">
                <a href="#">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Container fluid className="my-5">
        <Container>
          <Row>
            <Col>
              <h2 className="pop">Popular Recipe</h2>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              {recipe?.rows?.map((item) => (
                <div className="card" key={item.recipe_id}>
                  <Link to="/detailrecipe" className="popular-recipe">
                    <img src={item.picture} alt="..." className="card-img " />
                    <div className="card-overlay">
                      <h5 className="card-title position-absolute bottom-0">
                        {item.name_food}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
