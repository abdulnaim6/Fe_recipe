import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/paginate?page=${page}&limit=${limit}`
      );
      if (
        response.data &&
        response.data.result &&
        response.data.result.result &&
        Array.isArray(response.data.result.result.rows)
      ) {
        if (page === 1) {
          setRecipes(response.data.result.result.rows);
        } else {
          setRecipes(response.data.result.result.rows);
        }
      } else {
        console.error("Invalid response format: Data is not an array");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {recipes.map((recipeItem) => (
            <div key={recipeItem.recipe_id} className="col">
              <div className="card">
                <Link
                  to={`/detailrecipe/${recipeItem.recipe_id}`}
                  className="popular-recipe"
                >
                  <img
                    src={recipeItem.picture}
                    className="card-img"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-img-overlay">
                    <h5
                      className="card-title position-absolute bottom-0"
                      style={{ backgroundColor: "yellow" }}
                    >
                      {recipeItem.name_food}
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination" style={{ marginTop: 10 }}>
          <button
            className="btn btn-warning"
            onClick={handlePreviousPage}
            style={{ height: 40, width: 80, marginRight: 10 }}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-warning"
            onClick={handleNextPage}
            style={{ height: 40, width: 80 }}
          >
            Next
          </button>
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default RecipeList;
