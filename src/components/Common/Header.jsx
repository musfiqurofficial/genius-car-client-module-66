import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ShoppingLottie from "./login/lottie/ShoppingLottie";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, serOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://genius-car-server-module-66.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => serOrders(data));
  }, [user?.email]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 py-2 shadow-md sticky top-0 z-10">
      <div className="navbar lg:w-10/12 w-11/12 mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden px-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost hover:bg-white justify-start px-0"
          >
            <img className="w-8/12" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <ShoppingLottie></ShoppingLottie>
                <span className="badge badge-sm indicator-item bg-red-600 border-none">
                  {orders.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{orders.length} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/orders" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://placeimg.com/80/80/people"
                    }
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="text-xs font-light">{user.email}</span>
                </li>
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <NavLink onClick={handleLogOut} to="/login">
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn border-none bg-red-600 hover:bg-red-400 ml-5"
            >
              Appointment
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
