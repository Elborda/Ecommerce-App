import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.quantity);

  return (
    <nav className="navbar">
      <img
        className="logo--nav"
        src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
      />
      <div className="pages--container">
        <ul>
          <Link className="links" to="/">
            <li>Home</li>
          </Link>
          <Link className="links" to="/about">
            <li>About</li>
          </Link>
          <Link className="links" to="/products">
            <li>Products</li>
          </Link>
        </ul>
      </div>
      <div className="cart--container">
        <ul>
          <li className="cart--li">
            <Link className="links" to="/cart">
              Cart
              <BsFillCartFill className="cart-icon" />
            </Link>
            <span className="counter--cart">{quantity}</span>
          </li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
