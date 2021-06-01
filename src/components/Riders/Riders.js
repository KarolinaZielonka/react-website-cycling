import React from 'react'
import RiderCard from './RiderCard';
import "./Riders.css";

function Riders() {
    const ridersData = [
        {
            src: require("../../images/riders/froome.jpg").default,
            name: "Chris Froome",
            age: "May 20, 1985",
            team: "Israel Start-Up Nation",
            wins: "Tour de france",
        },
        {
            src: require("../../images/riders/kwiat.jpg").default,
            name: "Michał Kwiatkowski",
            age: "June 2, 1990",
            team: "Team Sky",
            wins: "Tour de pologne",
        },
        {
            src: require("../../images/riders/sagan.jpg").default,
            name: "Peter Sagan",
            age: "January 26, 1990",
            team: "Bora-Hansgrohe",
            wins: "Giro de italia",
        }
    ]
    const xx = ridersData.map((rider, index)=>(
            
                <RiderCard
                src={rider.src}
                name={rider.name}
                age={rider.age}
                team={rider.team}
                wins={rider.wins}/>
            
    ));

    return (
        <>
            <div className="cards">
                <h1>Check out these AWESOME riders!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {xx}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Riders;
