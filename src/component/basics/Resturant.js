import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";

const Resturant = () => {
  const [Menudata, setMenudata] = useState(Menu);
  const filteritem = (category) => {
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenudata(updatedlist);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filteritem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteritem("lunch")}
          >
            lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteritem("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filteritem("dinner")}
          >
            Dinner
          </button>
        </div>
      </nav>
      <MenuCard Menudata={Menudata} />
    </>
  );
};

export default Resturant;
