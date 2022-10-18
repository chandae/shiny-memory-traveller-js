import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css"


const Navbar = () => {
  return (
    <>
      <nav className="navbar-cs">
        <h1 className="nav-header">
          <Link className="deco" to="/">Traveller!</Link>
        </h1>
        <div className="nav-menu">
          <ul className="nav-links">
            <Link className="nav-link" to="/">Products</Link>
            <Link className="nav-link" to="/">Contact Us</Link>
            <Link className="nav-link" to="/">About Us</Link>
          </ul>
        </div>
        <div className="sign-up">
          <button className="btn btn-dark text-light" type="submit">Sign Up</button>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar;
