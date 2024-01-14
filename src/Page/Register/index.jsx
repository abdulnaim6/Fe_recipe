import React, { useState } from "react";
import BgLeft from "../../Components/BgLeft/index";
import Form from "../../Components/Form/index";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Regis } from "../../config/redux/action/userAction";
import Swal from "sweetalert2";
import "./style.css";

const Register = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email_address: "",
    phone: "",
    password: "",
    verify_password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("handleChange", e.target.name, value);
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  console.log(form);

  const handleRegister = async () => {
    try {
      const user = await dispatch(Regis(form));
      console.log("data user", user);
      Swal.fire({
        icon: "success",
        title: "Register Successful",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: error.data.message,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div id="left-section" className="col-sm-12 col-md-4 col-lg-6">
            <BgLeft />
          </div>
          <div id="right-section" className="col-sm-12 col-md-8 col-lg-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <section id="register">
                <div className="welcome">
                  <h2>Welcome</h2>
                  <p>Log in into your excisting account</p>
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="email_address"
                    name="email_address"
                    type="text"
                    placeholder="Enter email_address"
                    value={form.email_address}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="phone Number"
                    name="phone"
                    type="text"
                    placeholder="08xxxxxxx"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Create New Password"
                    name="password"
                    type="password"
                    placeholder="Create New Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Verify Password"
                    name="verify_password"
                    type="password"
                    placeholder="Verify Password"
                    value={form.verify_password}
                    onChange={handleChange}
                  />
                </div>
                <div className="check">
                  <input
                    className="checkInput"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="checkLabel" htmlFor="flexCheckDefault">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="d-grid">
                  {loading ? "loading..." : "Register"}
                  <Button href="#" text="Register Account" />
                </div>
                <div className="sign-up">
                  <p>
                    Already Have account?<Link to="/Login">Log In Here</Link>
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
