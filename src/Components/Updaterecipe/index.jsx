/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import axios from "axios";

function UpdateRecipe({ show, onHide, recipeId }) {
  const [recipe, setRecipe] = useState({
    name_food: "",
    ingrediens: "",
    picture: "",
    video: "",
    users_id: localStorage.getItem("userId"),
  });

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (show && recipeId) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/recipe/${recipeId}`)
        .then((response) => {
          setRecipe(response.data.data[0]);
        })
        .catch((err) => {
          console.log(err.message);
          setIsError(true);
          setErrorMessage("Failed to fetch recipe data");
        });
    }
  }, [show, recipeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setRecipe({
      ...recipe,
      picture: uploader,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeUpdate = new FormData();
    recipeUpdate.append("name_food", recipe.name_food);
    recipeUpdate.append("picture", recipe.picture);
    recipeUpdate.append("ingrediens", recipe.ingrediens);
    recipeUpdate.append("video", recipe.video);
    recipeUpdate.append("users_id", recipe.users_id);

    // // Validasi bahwa semua bidang telah diisi
    // if (!recipe.name_food || !recipe.ingrediens || !recipe.video) {
    //   setIsError(true);
    //   setErrorMessage("Please fill in all required fields");
    //   return;
    // }

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/updaterecipe/${recipeId}`,
        recipe
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Recipe has been updated successfully!",
      });
      onHide();
    } catch (err) {
      console.log(err.message);
      setIsError(true);
      setErrorMessage("Failed to update recipe!");
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {isError && <p>{errorMessage}</p>}
        <Form.Group controlId="formProfilePicture">
          <Form.Label>Recipe Picture</Form.Label>
          <Form.Control type="file" onChange={handleUpload} />
        </Form.Group>
        <Form.Label>Recipe</Form.Label>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Edit name food"
            name="name_food"
            onChange={handleChange}
            aria-label=".form-control-lg example"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Edit ingredients"
            name="ingrediens"
            onChange={handleChange}
            aria-label=".form-control-lg example"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Edit video"
            name="video"
            onChange={handleChange}
            aria-label=".form-control-lg example"
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="warning"
          name="submit"
          type="submit"
          onClick={handleSubmit}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateRecipe;
