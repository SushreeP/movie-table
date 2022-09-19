import React, { useState, useEffect } from "react";
import Pagination from "./components/pagination";
import MoviesTable from "./components/moviesTable";
import ListGroup from "./components/listGroup";
import movies from "./components/movies";
import { paginate } from "./utils/paginate";
import genres from "./components/genres";
import _ from "lodash";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movieList, setmovieList] = useState([]);
  const [pageSize, setpageSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setselectedGenre] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  useEffect(() => {
    setGenre(genres);
    setmovieList(movies.movielist);
    setpageSize(5);
    setCurrentPage(1);
  }, []);

  const handleLike = (movie) => {
    const movies = [...movieList];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    setmovieList(movies);
  };

  const handleDelete = (movie) => {
    const movies = movieList.filter((m) => m !== movie);
    setmovieList(movies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectGenre = (genre) => {
    setselectedGenre(genre);
  };

  const handleSort = (sorting) => {
    setSortColumn(sorting);
  };

  const getPagedData = () => {
    const filtered = selectedGenre
      ? movieList.filter((m) => m.genre === selectedGenre)
      : movieList;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movielist = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: sorted.length,
      data: movielist,
    };
  };

  const { totalCount, data } = getPagedData();

  return (
    <div className="row">
      {/* Side nav */}
      <div className="col-2">
        <ListGroup
          genres={genre}
          onItemSelect={handleSelectGenre}
          selectedGenre={selectedGenre}
        />
      </div>
      <div className="col">
        <Link to="/movies/new" className="btn btn-primary mb-2">
          New Movie
        </Link>
        <p className="mb-4">Showing {totalCount} movies.</p>
        <MoviesTable
          movies={data}
          onDelete={handleDelete}
          onLike={handleLike}
          raiseSort={handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
