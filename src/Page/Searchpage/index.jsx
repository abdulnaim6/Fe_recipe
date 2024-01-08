import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";
import MyNavbar from "../../Components/Navbar";

const SearchPage = () => {
  const [recipe, setRecipe] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");
  const { recipe_id } = useParams();
  // const location = useLocation();
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

      <div className="container mt-3">
        <div className="row" style={{ width: "100" }}>
          {recipe?.rows?.map((recipeItem) => (
            <div className="col-lg-4 mb-3" key={recipeItem.recipes_id}>
              <div
                // className={`bg-primary `}
                onClick={() => handleClick(recipeItem.recipes_id)}
              >
                <img
                  src={recipeItem.picture}
                  alt="myrecipe"
                  style={{ width: 200, height: 150 }}
                />
                <h1>{recipeItem.name_food}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
