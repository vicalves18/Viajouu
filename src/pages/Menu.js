import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Passagens</h1>
      <Link to="/cliente">
        <button>Comprar </button>
        </Link>
      <div className="menuList">
        {MenuList.map((menuItem, key, Link) => {
          return (

            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price} />
              
          );
        })}
        
      </div>
    </div>
  );
}

export default Menu;
