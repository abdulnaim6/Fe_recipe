import React from "react";
import { Link } from "react-router-dom";
import BgLeft from "../../Components/BgLeft";
import "./style.css";
import Form from "../../Components/Form";
import Button from "../../Components/Button";

const Login = () => {
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
              <form>
                <div className="wrapper-form">
                  <Form
                    label="Email"
                    name="email_address"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Password"
                    name="verify_password"
                    type="password"
                    placeholder="password"
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
                  <Link to="/">
                    <Button
                      buttonName="Log In"
                      type="submit"
                      href="#"
                      text="Log In"
                    />
                  </Link>
                  <a className="forgot" href="">
                    Forgot Password ?
                  </a>
                </div>
              </form>
              <div className="sign-up">
                <p>
                  Don't Have an account?
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
