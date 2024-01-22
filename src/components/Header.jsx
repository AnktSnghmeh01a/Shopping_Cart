import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuClick = () => {
    const allLinks = document.querySelector(".links-part");

    if (isMenuOpen) {
      allLinks.style.position = "relative";
    } else {
      allLinks.style.position = "absolute";
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick=()=>{
   

    const allLinks = document.querySelector(".links-part");  
      allLinks.style.position = "absolute";
  }

  return (
    <header className="header">

      <div className="upper-header">

        <div className="logo-part">
          <h1>ShopIn</h1>
        </div>

        <div className="right-portion-upper-header">
        
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

              <option value="2" label="Home"></option>

              <option value="2" label="Clothing"></option>

              <option value="2" label="Books"></option>

              <option value="4" label="Electronics"></option>
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

      
      </div>

      <div className="lower-header">
        <div className="links-part">
          <HashLink to={"/home"} onClick={handleClick}>Home</HashLink>
          <HashLink to={"/cloths"}onClick={handleClick}>Clothing</HashLink>
          <HashLink to={"/books"}onClick={handleClick}>Books</HashLink>
          <HashLink to={"/electronics"}onClick={handleClick}>Electronics</HashLink>
        </div>

        <div className="menu">
          <AiOutlineMenu className="menu-icon" onClick={handleMenuClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
