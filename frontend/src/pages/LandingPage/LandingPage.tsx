import React from "react";
import { Link } from "react-router-dom";
import TypeWriter, { TypewriterClass } from "typewriter-effect";
import { Header } from "../../components/Header/Header";

import './LandingPage.css';

export const LandingPage: React.FC<any> = (): JSX.Element => {

    const mql: MediaQueryList = window.matchMedia("(max-width: 600px)");
    let phoneView:boolean = mql.matches;

    return(
        <div className="landingPage">
            <header>
                <Header />
            </header>

            <div className="landingPage___container">
                <h1 id="typewriter">

                    {
                        phoneView ? <TypeWriter onInit={(typewriter: TypewriterClass) => {
                            typewriter.typeString("Two Bro's Pizza & Dessert.")
                                .pauseFor(2000)
                                .start();
                        }} /> : <TypeWriter onInit={(typewriter: TypewriterClass) => {
                            typewriter.typeString("Welcome to Two Bro's Pizza & Dessert.")
                                .pauseFor(2000)
                                .start();
                        }} />
                    }
                </h1>

                <Link id="nav-links" to="/menu">
                    View Menus
                </Link>
    
            </div>
        </div>
    );
}