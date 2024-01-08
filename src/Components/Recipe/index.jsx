import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const RecipeList = () => {
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
    <div className="container-fluid">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {recipe?.rows?.map((recipeItem) => (
            <div key={recipeItem.recipe_id} className="col">
              <div className="card">
                <a href="#" className="popular-recipe">
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;