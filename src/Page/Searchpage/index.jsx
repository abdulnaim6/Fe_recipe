import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyNavbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetRecipe } from "../../config/redux/action/recipeAction";

const SearchPage = () => {
  const { loading, recipe } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");

  const handleSearch = () => {
    dispatch(GetRecipe({ sort, keyword: searchQuery }));
  };

  const handleSort = () => {
    setSort((prevSort) => (prevSort === "ASC" ? "DESC" : "ASC"));
  };

  useEffect(() => {
    dispatch(GetRecipe({ sort, keyword: searchQuery }));
  }, [dispatch, sort, searchQuery]);

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
            onClick={handleSort}
          >
            Sort by
          </button>
        </div>
      </div>

      <div className="container-fluid">
        {loading && <h3>Loading....</h3>}
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
