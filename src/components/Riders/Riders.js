import React from 'react'
import RiderCard from './RiderCard';
import "./Riders.css";

function Riders() {
    return (
        <>
            <div className="cards">
                <h1>Check out these EPIC riders!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <RiderCard
                                src={require("../../images/user.png").default}
                                name="John Doe"
                                age="34"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <RiderCard
                                src={require("../../images/user.png").default}
                                name="John Doe"
                                age="34"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <RiderCard
                                src={require("../../images/user.png").default}
                                name="John Doe"
                                age="34"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </ul>
                        
                        <ul className="cards__items">
                            <RiderCard
                                src={require("../../images/user.png").default}
                                name="John Doe"
                                age="34"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <RiderCard
                                src={require("../../images/user.png").default}
                                name="John Doe"
                                age="34"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <RiderCard
                                src={require("../../images/user.png").default}
                                name="John Doe"
                                age="34"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Riders;
