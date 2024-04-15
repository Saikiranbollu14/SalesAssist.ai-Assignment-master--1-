import React from "react";
import { data } from "./bagsData";
import "./styles.css";

const Header = () => {
  return (
    <ul className='header-items'>
      {data.map((item) => (
        <li key={item.id}>
          <img src={item.icon} alt={item.name} />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Header;
