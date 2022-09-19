import Joi from "joi-browser";
import React from "react";
import Form from "./form";

class RegisterForm extends Form {
  state = {
    data: { email: "", username: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h3>New User? Why not register now!</h3>
        <br />
        <form onSubmit={this.doSubmit}>
          {this.renderInput("email", "Email ID")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}
export default RegisterForm;
