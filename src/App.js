import React from "react";
import "./App.css";
import Movies from "./movies";
import MovieForm from "./routecomponents/movieform";
import Customers from "./routecomponents/customers";
import Rentals from "./routecomponents/rentals";
import NotFound from "./routecomponents/notfound";
import NavBar from "./routecomponents/NavBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavBar />

      {/* Body start */}
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
