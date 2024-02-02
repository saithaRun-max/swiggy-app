import React from "react";
import "./header.css";
import { logo } from "./constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItem = useSelector((store) => store.cart.items);

  console.log(cartItem);
  const [isLoggedin, setLoggedIn] = useState(false);
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/cart ">Cart</Link>
            </li>
          </ul>
        </div>
        <div>
          {!isLoggedin ? (
            <button onClick={() => setLoggedIn(true)}>Log In </button>
          ) : (
            <button onClick={() => setLoggedIn(false)}>Log Out </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
