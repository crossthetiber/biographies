import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/" className=" home">
          Home
        </Link>
        <Link to="/search" className="">
          All Biographies
        </Link>
        <Link to="/about" className="">
          About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
