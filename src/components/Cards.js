import React from "react";
import CardItem from "./CardItem";
import "./CardItem.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC race!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-9.jpg").default}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              label="Tour de France"
              path="/race/tourdefrance"
            />
            <CardItem
              src={require("../images/img-9.jpg").default}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              label="Vuelta a España"
              path="/race/vueltaaespana"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-9.jpg").default}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              label="Giro d'italia"
              path="/race/giroditalia"
            />
            <CardItem
              src={require("../images/img-9.jpg").default}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              label="Tour de Polonge"
              path="/race/tourdepologne"
            />
            <CardItem
              src={require("../images/img-9.jpg").default}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              label="Strade Bianche"
              path="/race/stradebianche"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
