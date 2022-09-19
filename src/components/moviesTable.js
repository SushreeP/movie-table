import React from "react";
import { Link } from "react-router-dom";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import Like from "./like";

const MoviesTable = ({ movies, onLike, onDelete, sortColumn, raiseSort }) => {
  const columns = [
    {
      name: "Title",
      path: "title",
      content: (movie) => <Link to={`/movies/${movie.id}`}>{movie.title}</Link>,
    },
    { name: "Year", path: "year" },
    { name: "Genre", path: "genre" },
    {
      name: "",
      key: "like",
      content: (movie) => (
        <Like onClick={() => onLike(movie)} value={movie.liked} />
      ),
    },
    {
      name: "",
      key: "delete",
      content: (movie) => (
        <button className="btn btn-danger" onClick={() => onDelete(movie)}>
          Delete
        </button>
      ),
    },
  ];

  return (
    <table className="table table-hover">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        raiseSort={raiseSort}
      />
      <TableBody data={movies} columns={columns} />
    </table>
  );
};

export default MoviesTable;
