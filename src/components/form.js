import React from "react";
import Joi from "joi-browser";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const error = {};
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    result.error.details.map((item) => (error[item.path[0]] = item.message));

    return error;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema_local = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema_local);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ errors: error });
    this.state.doSubmit();
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    return (
      <div className="form-group">
        <input
          className="form-control w-50"
          id={name}
          name={name}
          type={type}
          value={this.state.data[name]}
          placeholder={label}
          onChange={this.handleChange}
        />
        <small className="text-danger">{this.state.errors[name]}</small>
      </div>
    );
  };
}

export default Form;
