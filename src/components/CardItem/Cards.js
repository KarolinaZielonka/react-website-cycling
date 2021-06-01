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
              src={require("../../images/Tour-de-France.jpg").default}
              text=" "
              label="Tour de France"
              path="/race/tourdefrance"
            />
            <CardItem
              src={require("../../images/Vuelta.jpg").default}
              text=" "
              label="Vuelta a España"
              path="/race/vueltaaespana"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../../images/giro-italia.jpg").default}
              text=" "
              label="Giro d'italia"
              path="/race/giroditalia"
            />
            <CardItem
              src={require("../../images/unnamed.png").default}
              text=" "
              label="Tour de Polonge"
              path="/race/tourdepologne"
            />
            <CardItem
              src={require("../../images/strade.jpg").default}
              text=" "
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
