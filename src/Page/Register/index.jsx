// import React from "react";

// const Register = () => {
//   return <div>Register</div>;
// };

// export default Register;
import React from "react";
import BgLeft from "../../Components/BgLeft/index";
import Form from "../../Components/Form/index";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import "./style.css";

const Register = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div id="left-section" className="col-sm-12 col-md-4 col-lg-6">
            <BgLeft />
          </div>
          <div id="right-section" className="col-sm-12 col-md-8 col-lg-6">
            <form>
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
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="email_address"
                    name="email_address"
                    type="text"
                    placeholder="Enter email_address"
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="phone Number"
                    name="phone_number"
                    type="text"
                    placeholder="08xxxxxxx"
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Create New Password"
                    name="create_new_password"
                    type="password"
                    placeholder="Create New Password"
                  />
                </div>
                <div className="wrapper-form">
                  <Form
                    label="Verify Password"
                    name="verify_password"
                    type="password"
                    placeholder="Verify Password"
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
                  <Link to="/login">
                    <Button href="#" text="Register Account" />
                  </Link>
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
