import React, { useState, useEffect } from "react";
import "./AboutRace.css";
import Table from "../CardItem/Table";

const races = {
  "/race/tourdefrance": {
    name: "Tour De France",
    country: "france",
    firstRace: "1903",
    lastWinner: "Tadej Pogačar",
    shirtColor: "yellow",
    recordWinner: "Jacques Anquetil",
  },
  "/race/vueltaaespana": {
    name: "Vuelta a espana",
    country: "spain",
    firstRace: "1935",
    lastWinner: "Primož Roglič",
    shirtColor: "red",
    recordWinner: "Tony Rominger",
  },
  "/race/giroditalia": {
    name: "Giro Di Italia",
    country: "italy",
    firstRace: "1909",
    lastWinner: "Tao Geoghegan Hart",
    shirtColor: "pink",
    recordWinner: "Eddy Merckx",
  },
  "/race/tourdepologne": {
    name: "Tour De Pologne",
    country: "poland",
    firstRace: "1928",
    lastWinner: "Remco Evenepoel",
    shirtColor: "yellow",
    recordWinner: "Marian Więckowski",
  },
  "/race/stradebianche": {
    name: "Strade Bianche",
    country: "italy",
    firstRace: "2007",
    lastWinner: "Mathieu van der Poel",
    shirtColor: "-",
    recordWinner: "-",
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
