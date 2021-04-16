import React, { useState, useEffect } from "react";
import "./AboutRace.css";
import Table from "./Table";

const races = {
  "/race/tourdefrance": {
    name: "Tour De France",
    country: "france",
    firstRace: "1999",
    lastWinner: "John",
    shirtColor: "yellow",
    recordWinner: "Tom",
  },
  "/race/vueltaaespana": {
    name: "Vuelta a espana",
    country: "spain",
    firstRace: "1999",
    lastWinner: "John",
    shirtColor: "yellow",
    recordWinner: "Tom",
  },
  "/race/giroditalia": {
    name: "Giro Di Italia",
    country: "italy",
    firstRace: "1999",
    lastWinner: "John",
    shirtColor: "yellow",
    recordWinner: "Tom",
  },
  "/race/tourdepologne": {
    name: "Tour De Pologne",
    country: "poland",
    firstRace: "1999",
    lastWinner: "John",
    shirtColor: "yellow",
    recordWinner: "Tom",
  },
  "/race/stradebianche": {
    name: "Strade Bianche",
    country: "italy",
    firstRace: "1999",
    lastWinner: "John",
    shirtColor: "yellow",
    recordWinner: "Tom",
  },
};

//path {window.location.pathname} === /race/NAME
function AboutRace(props) {
  const [existInDic, setExist] = useState(true);

  useEffect(() => {
    if (window.location.pathname in races) {
      console.log("exists");
      setExist(true);
    } else {
      setExist(false);
      console.log("do not exists");
    }
  });

  return (
    <>
      <div className="container">
        <b>
          {existInDic ? (
            <Table 
              name={races[window.location.pathname].name}
              country={races[window.location.pathname].country}
              firstRace={races[window.location.pathname].firstRace}
              lastWinner={races[window.location.pathname].lastWinner}
              shirtColor={races[window.location.pathname].shirtColor}
              recordWinner={races[window.location.pathname].recordWinner} />
          ) : (
            "no"
          )}
        </b>
      </div>
    </>
  );
}

export default AboutRace;
