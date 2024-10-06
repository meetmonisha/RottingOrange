import React from "react";
import "./StyleSheets/Header.css";
import orange from "../images/orange.png";


const Header = () => {
  
  return (
    <div class="flex-container">
      <div class="flex-child magenta">
        <div >
          <img class="orangewalk" src={orange} alt="Orange"/>
        </div>
      </div>

      <div class="flex-child green">
        <div class="header">
            <h1>LeetCode Problem Series - Rotting Orange </h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
