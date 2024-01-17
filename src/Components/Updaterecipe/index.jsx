import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Update } from "../../config/redux/action/recipeAction";

function UpdateRecipe({ show, onHide, recipeId }) {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    name_food: "",
    ingrediens: "",
    picture: "",
    video: "",
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  // if (show) {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/recipe/${recipeId}`)
  //     .then((response) => {
  //       setRecipe(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setIsError(true);
  //       setErrorMessage("Failed to fetch recipe data");
  //     });
  // }
  // }, [show, recipeId]);

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

    try {
      await dispatch(Update(recipeId));
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
            value={recipe.name_food}
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
            value={recipe.ingrediens}
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
            value={recipe.video}
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
