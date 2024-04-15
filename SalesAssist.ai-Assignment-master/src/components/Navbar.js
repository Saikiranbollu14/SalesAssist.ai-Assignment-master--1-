import React from "react";
import SearchIcon from "../assets/search.svg";
import UserIcon from "../assets/user.svg";
import SaveIcon from "../assets/save.svg";
import BagIcon from "../assets/bag.svg";
import "./styles.css";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-text'>
          <h3>T A N N T R I M</h3>
        </div>
        <div className='categories-group'>
          <p>Bags</p>
          <p>Travel</p>
          <p>Accesories</p>
          <p>Gifting</p>
          <p>Jewelery</p>
        </div>
        <div className='nav-icons'>
          <img src={SearchIcon} alt='search-icon' />
          <img src={UserIcon} alt='user-icon' />
          <img src={SaveIcon} alt='save-icon' />
          <img src={BagIcon} alt='bag-icon' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
