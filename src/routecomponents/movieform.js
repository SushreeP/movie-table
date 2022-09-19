import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: {
      title: this.props.match.params.title,
      genre: this.props.match.params.genre,
      year: this.props.match.params.year,
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required(),
    gener: Joi.string().required(),
    year: Joi.number().integer().min(1960).max(2020),
  };

  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h3>Movieform {match.params.id}</h3>
        <br />
        {this.renderInput("title", "Name of the Movie")}
        {this.renderInput("genre", "Genre")}
        {this.renderInput("year", "Release Year")}
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}
export default MovieForm;
