import React from "react";
import "../index.css";
import { logo } from "./constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

function Header() {
  const cartItem = useSelector((store) => store.cart.items);

  
  return (
    <>
      <div className="flex justify-between shadow-lg h-30 w-full items-center bg-white">
        <div className="">
          <Link to="/">
          <img className=" p-2" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="items-center">
          <ul className="flex justify-between ">
            <li className="ml-4 text-lg font-normal">
              <Link to="/">Home</Link>
            </li>
      
            <li className="ml-4 text-lg">
              <Link to="/about">About us</Link>
            </li>
            <li className="ml-4 text-lg ">
              <Link to="/cart ">
                <span className="text-red-700 font-medium">{cartItem.length}</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 -mt-6 ml-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Login />
    
        </div>
      </div>
    </>
  );
}

export default Header;
