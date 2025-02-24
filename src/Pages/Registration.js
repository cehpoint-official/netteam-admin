import React, { useState } from "react";
import { connect } from "react-redux";
import "../assets/css/authentication/form-2.css";

import { signupAdmin } from "../store/Admin/admin.action";

import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const isEmail = (value) => {
    const val = value === "" ? 0 : value;
    const validNumber =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
    return validNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !code || !newPassword  || !isEmail(email)) {
      let error = {};
      if (!email) error.email = "Email Is Required !";
      if (!password) error.password = "password is required !";
      if (!newPassword) error.newPassword = "new password is required !";
      if (newPassword !== password)
        error.newPassword = "New Password and Confirm Password doesn't match !";
      // if (!code) error.code = "purchase code is required !";
      return setError({ ...error });
    } else {
      let login = {
        email,
        newPassword,
        password,
        // code,
      };

      props.signupAdmin(login);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <div class="form-container outer">
        <div class="form-form">
          <div class="form-form-wrap">
            <div class="form-container">
              <div class="form-content" style={{ backgroundColor: "#312a44" }}>
                <div>
                   <img
                    src={logo}
                    style={{
                      width: "120px",
                      height: "120px",
                    }}
                    alt=""
                    className="mx-auto"
                    draggable="false"
                  />
                </div>
                <h2 class="fw-bold mt-3">Register in to NetTeam</h2>
                {/* <h6 className="text-muted">
                  Enter your email and password to access admin panel.
                </h6> */}

                <form class="text-left">
                  <div class="form">
                    <div id="username-field" class="field-wrapper input">
                      <label for="username" style={{ fontSize: "15px" }}>
                        Enter Email
                      </label>

                      <input
                        className="text-white"
                        id="username"
                        name="username"
                        type="Email"
                        class="form-control p-3"
                        placeholder="email"
                        onChange={(e) => {
                          setEmail(e.target.value);

                          if (!e.target.value) {
                            return setError({
                              ...error,
                              email: "Email is required !",
                            });
                          } else {
                            return setError({
                              ...error,
                              email: "",
                            });
                          }
                        }}
                        onKeyPress={handleKeyPress}
                      />
                      {error.email && (
                        <span className="text-danger">{error.email}</span>
                      )}
                    </div>

                    <div id="password-field" class="field-wrapper input mb-2">
                      <div class="d-flex justify-content-between">
                        <label for="password" style={{ fontSize: "15px" }}>
                          New Password
                        </label>
                      </div>

                      <input
                        className="text-white"
                        id="password"
                        name="password"
                        type="password"
                        class="form-control p-3"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);

                          if (!e.target.value) {
                            return setError({
                              ...error,
                              password: "password is required !",
                            });
                          } else {
                            return setError({
                              ...error,
                              password: "",
                            });
                          }
                        }}
                        onKeyPress={handleKeyPress}
                      />
                      {error.password && (
                        <span className="text-danger">{error.password}</span>
                      )}
                    </div>
                    <div id="password-field" class="field-wrapper input mb-2">
                      <div class="d-flex justify-content-between">
                        <label for="password" style={{ fontSize: "15px" }}>
                          Confirm Password
                        </label>
                      </div>

                      <input
                        className="text-white"
                        id="newPassword"
                        name="password"
                        type="password"
                        class="form-control p-3"
                        placeholder="Password"
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              newPassword: "newPassword is required !",
                            });
                          } else {
                            return setError({
                              ...error,
                              newPassword: "",
                            });
                          }
                        }}
                        onKeyPress={handleKeyPress}
                      />
                      {error.newPassword && (
                        <span className="text-danger">{error.newPassword}</span>
                      )}
                    </div>
                    {/* <div id="code-field" class="field-wrapper input mb-2">
                      <div class="d-flex justify-content-between">
                        <label for="code" style={{ fontSize: "15px" }}>
                          Purchase code
                        </label>
                      </div>

                      <input
                        className="text-white"
                        id="code"
                        name="code"
                        type="text"
                        class="form-control p-3"
                        placeholder="Purchase code"
                        onChange={(e) => {
                          setCode(e.target.value);
                          if (!e.target.value) {
                            return setError({
                              ...error,
                              code: "Purchase code is required !",
                            });
                          } else {
                            return setError({
                              ...error,
                              code: "",
                            });
                          }
                        }}
                        onKeyPress={handleKeyPress}
                      />
                      {error.code && (
                        <span className="text-danger">{error.code}</span>
                      )}
                    </div>  */}

                    <div class="d-sm-flex justify-content-between">
                      <div class="field-wrapper">
                        <button
                          type="button"
                          class="btn text-white btnSubmit"
                          onClick={handleSubmit}
                          value=""
                        >
                          sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { signupAdmin })(Registration);
