import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-blue-500 py-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5170/5170054.png"
              alt="Logo"
              className="w-12 ml-4"
            />
          </Link>
          <Link to="/create">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10024/10024172.png"
              alt="Logo"
              className="w-12 mr-4"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
