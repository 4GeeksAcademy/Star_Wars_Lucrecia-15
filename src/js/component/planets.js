import React, { useState, useContext } from "react";
import { CardPlanets } from "./cardPlanets";
import "../../styles/character.css";
import { Context } from "../store/appContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Planets = () => {
    const { store, actions } = useContext(Context)

    const groupedPlanets = [];
    if (store.planets) {
        for (let i = 0; i < store.planets.length; i += 5) {
            groupedPlanets.push(store.planets.slice(i, i + 5));
        }
    }

    return (
        <div className="CarouselCard text-center pb-5" >
            <h1 className="text-warning">Planets!</h1>
            <div id="carouselExample2" className="carousel slide">
                <div className="carousel-inner">
                    {groupedPlanets.map((group, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className=" col-12 row d-flex justify-content-center m-auto">
                                {group.map((planet, index) => (
                                    <CardPlanets key={planet.id} planet={planet} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
