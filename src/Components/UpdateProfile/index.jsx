/* eslint-disable react/no-unknown-property */
// /* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function UpdateProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUsers] = useState({
    name: "",
  });
  const [isError, setIsError] = useState(false);
  const [saveImage, setSaveImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const getId = localStorage.getItem("userId");
  console.log(getId);

  useEffect(() => {
    if (show) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/redis/${getId}`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((err) => {
          console.log(err.message);
          setIsError(true);
          setErrorMessage("Failed to fetch user data");
        });
    }
  }, [show]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUsers({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    if (uploader) {
      setSaveImage(uploader);
      console.log(uploader);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name.trim()) {
      setIsError(true);
      setErrorMessage("Name cannot be empty");
      return;
    }

    const userUpdate = new FormData();
    userUpdate.append("name", user.name);
    userUpdate.append("picture", saveImage);
    console.log("Form Data:", userUpdate);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/updateuser/${getId}`,
        userUpdate
      );
      console.log(response);
      handleClose();
    } catch (err) {
      console.log(err.message);
      setIsError(true);
      setErrorMessage("Data Error");
    }
  };

  return (
    <>
      <span variant="primary" onClick={handleShow}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20H21"
            stroke="#EFC81A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
            stroke="#EFC81A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Profile</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleUpload} />
            </Form.Group>
            <Form.Label>Name</Form.Label>
            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Edit Name"
                name="name"
                value={user.name}
                onChange={handleChange}
                aria-label=".form-control-lg example"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="warning"
              type="submit"
              name="submit"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}

export default UpdateProfile;
