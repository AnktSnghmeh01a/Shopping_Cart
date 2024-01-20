import React from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">

      <div className="upper-header">
       
        <div className="logo-part">
          <h1>ShopIn</h1>
        </div>

        <div className="middle-div-navbar-portion">
          <select
            name="all-items"
            id="my-items-topdown"
            className="top-down-navbar-options-all"
          >
            <option value="0" label="All" select="selected">
              All
            </option>

            <option value="1" label="All Categories"></option>

            <option value="2" label="i-phone-15-pro"></option>

            <option value="2" label="i-phone-15-pro"></option>

            <option value="2" label="i-phone-15-pro"></option>

            <option value="4" label="amazon speaker"></option>

            <option value="5" label="Watch"></option>

            <option value="3" label="i-phone-15-pro"></option>

            <option value="6" label="Watch"></option>

            <option value="3" label="i-phone-15-pro"></option>

            <option value="7" label="Watch"></option>

            <option value="3" label="i-phone-15-pro"></option>

            <option value="8" label="Watch"></option>
          </select>

          <input
            type="text"
            placeholder="Search your products"
            className="input-bar-top-amazon-in"
          />

          <div className="search-icon-input-bar">
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>

        <div className="cart-portion">
          <AiOutlineShoppingCart className="cart-icon" />
        </div>
      </div>

     <div className="lower-header">
        <HashLink to={"/home"}>Home</HashLink>
        <HashLink to={"/cloths"}>Clothing</HashLink>
        <HashLink to={"/books"}>Books</HashLink>
        <HashLink to={"/electronics"}>Electronics</HashLink>
      </div>
    </header>
  );
};

export default Header;
