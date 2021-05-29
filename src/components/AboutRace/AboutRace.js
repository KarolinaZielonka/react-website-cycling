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
  const location = window.location.pathname;
  return (
    <>
      <div className="container">
        <b>
          {existInDic ? (
            <Table 
              name={races[location].name}
              country={races[location].country}
              firstRace={races[location].firstRace}
              lastWinner={races[location].lastWinner}
              shirtColor={races[location].shirtColor}
              recordWinner={races[location].recordWinner} />
          ) : (
            "none"
          )}
        </b>
      </div>
    </>
  );
}

export default AboutRace;
