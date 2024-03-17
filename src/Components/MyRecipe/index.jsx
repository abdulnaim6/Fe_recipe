import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import DeleteRecipe from "../DeleteRecipe";
// import UpdateRecipe from "../Updaterecipe";
import { Link } from "react-router-dom";

const MyRecipe = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const userId = localStorage.getItem("userId");

  const handleSearch = async () => {
    try {
      const newData = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${userId}`
      );
      setRecipes(newData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  // const handleUpdateClick = (recipe_id) => {
  //   setSelectedRecipeId(recipe_id);
  //   setShowEditModal(true);
  // };

  const handleDeleteClick = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/deleterecipe/${selectedRecipeId}`
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Recipe has been deleted successfully!",
      });
      setRecipes(
        recipes.filter((recipe) => recipe.recipe_id !== selectedRecipeId)
      );
      setShowModal(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete recipe!",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Array.isArray(recipes) &&
            recipes.map((recipeItem) => (
              <div key={recipeItem.recipe_id} className="col">
                <div className="card">
                  <Link to="/profile" className="popular-recipe">
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

                      <div className="position-absolute top-0 end-0">
                        {/* Tombol Edit */}
                        {/* <button
                          style={{ width: "40px", height: "40px" }}
                          className="btn btn-outline-primary mx-2"
                          onClick={() =>
                            handleUpdateClick(recipeItem.recipe_id)
                          }
                        >
                          <FaEdit />
                        </button> */}

                        {/* Tombol Delete */}
                        <button
                          style={{ width: "40px", height: "40px" }}
                          className="btn btn-outline-danger"
                          onClick={() =>
                            handleDeleteClick(recipeItem.recipe_id)
                          }
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      <DeleteRecipe
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
      {/* <UpdateRecipe
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        recipeId={selectedRecipeId}
      /> */}
    </div>
  );
};

export default MyRecipe;
