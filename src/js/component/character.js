import React, { useState, useContext } from "react";
import { CardCharacter } from "./cardCharacter";
import "../../styles/character.css";
import { Context } from "../store/appContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Characters = () => {
    const { store, actions } = useContext(Context)

    const groupedCharacters = [];
    if (store.characters) {
        for (let i = 0; i < store.characters.length; i += 5) {
            groupedCharacters.push(store.characters.slice(i, i + 5));
        }
    }

    return (
        <div className="CarouselCard text-center pb-5" >
            <h1 className="text-warning">Characters!</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {groupedCharacters.map((group, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className=" col-12 row d-flex justify-content-center m-auto">
                                {group.map((character, index) => (
                                    <CardCharacter key={character.uid} character={character} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    );
};
