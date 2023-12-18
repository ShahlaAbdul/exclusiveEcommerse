import React from "react";
import "./style.scss";

function Navbar() {
  return (
    <section>
      <div className="header">
        <div className="headerContect">
          <div className="headerContectleft">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span> Shop Now!</span>
            </p>
          </div>
          <div className="headerContectRight">
            <select name="" id="">
              <option value="">English</option>
              <option value="">Ru</option>
            </select>
          </div>
        </div>
      </div>
      <nav>
        <div className="navbarContent">
          <div className="navbarLogo">
            <h2>Exclusive</h2>
          </div>
          <div className="navbarPages">
            <ul className="pagesElement">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Sign UP</li>
            </ul>
          </div>
          <div className="navbarSearch">
            <div className="searchInp">
              <input type="text" placeholder="what are you looking for" />
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            <div className="searchIcons">
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
