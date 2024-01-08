import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const SearchPage = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");
  const { recipe_id } = useParams();
  const navigate = useNavigate();

  const handleSearch = async () => {
    // navigate(`/search?keyword=${searchQuery}&sort=${sort}`);
    try {
      const newData = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/search?sort=${sort}&keyword=${searchQuery}`
      );
      setRecipe(newData.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSort = (e) => {
    e.preventDefault();
    setSort(sort === "ASC" ? "DESC" : "ASC");
    handleSearch();
  };

  const handleClick = (recipe_id) => {
    console.log("Clicked on recipe with ID:", recipe_id);
    navigate(`/detailrecipe/${recipe_id}`);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <React.Fragment>
      <MyNavbar />
      <div className="container mt-5 d-flex justify-content-between">
        <div className="input-group flex-grow-1 me-2 w-50">
          <input
            type="text"
            className="form-control form-control-md"
            placeholder="Search Restaurant Food"
            aria-label=".form-control-lg example"
            name="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="input-group-text px-3" onClick={handleSearch}>
            <AiOutlineSearch />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="form-select form-select-md"
            aria-label="Default select example"
            onClick={(e) => handleSort(e, "name_food")}
          >
            Sort by
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {recipe?.rows?.map((recipeItem) => (
              <div key={recipeItem.recipe_id} className="col">
                <div className="card">
                  <Link
                    to={`/detailrecipe/${recipeItem.recipe_id}`}
                    className="popular-recipe"
                    // onClick={() => handleClick(recipeItem.recipe_id)}
                  >
                    <img
                      src={recipeItem.picture}
                      className="card-img"
                      alt="..."
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title position-absolute bottom-0">
                        {recipeItem.name_food}
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default SearchPage;
