import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MoviesGhar
      </Link>
      <div className="navbar-nav">
        <NavLink className="nav-link active" to="/movies">
          Movies <span className="sr-only">(current)</span>
        </NavLink>
        <NavLink className="nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-link" to="/rentals">
          Rentals
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
