import React, { useState } from "react";
import { Link } from "react-router-dom";
import BgLeft from "../../Components/BgLeft";
import "./style.css";
import Form from "../../Components/Form";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../config/redux/action/userAction";

const Login = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email_address: "",
    verify_password: "",
  });
  console.log(form);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("handleChange", e.target.name, value);
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const user = await dispatch(login(form));
      console.log("data user", user);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
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
            <section id="login">
              <div className="welcome">
                <h2>Welcome</h2>
                <p>Log in into your excisting account</p>
              </div>
              <form
                // onSubmit={handleLogin}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="wrapper-form">
                  <Form
                    label="Email"
                    name="email_address"
                    type="text"
                    placeholder="example@gmail.com"
                    value={form.email_address}
                    onChange={handleChange}
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Password"
                    name="verify_password"
                    type="password"
                    placeholder="password"
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
                <div className="button d-grid">
                  {loading}
                  <Button
                    // onClick={handleLogin}
                    buttonName="Log In"
                    type="submit"
                    href="#"
                    text="Log In"
                  />
                  <a className="forgot" href="">
                    Forgot Password ?
                  </a>
                </div>
              </form>
              <div className="sign-up">
                <p>
                  Dont Have an account?
                  <Link className="navLink" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
