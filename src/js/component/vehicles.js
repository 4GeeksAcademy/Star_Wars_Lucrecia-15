import React, { useState, useContext } from "react";
import { CardVehicles } from "./cardVehicles";
import "../../styles/character.css";
import { Context } from "../store/appContext";


export const Vehicles = () => {
    const { store, actions } = useContext(Context)

    const groupedVehicles = [];
    if (store.vehicles) {
        for (let i = 0; i < store.vehicles.length; i += 5) {
            groupedVehicles.push(store.vehicles.slice(i, i + 5));
        }
    }

    return (
        <div className="CarouselCard text-center pb-5" >
            <h1 className="text-warning">Vehicles!</h1>
            <div id="carouselExample1" className="carousel slide">
                <div className="carousel-inner">
                    {groupedVehicles.map((group, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className=" col-12 row d-flex justify-content-center m-auto">
                                {group.map((vehicle, index) => (
                                    <CardVehicles key={vehicle.uid} vehicle={vehicle} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
