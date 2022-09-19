import React from "react";
import Form from "./form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h3>Log In</h3> <br />
        <form onSubmit={this.doSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Log In")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
