import React, { useState, useContext } from "react";
import {CardVehicles} from "./cardVehicles"
import "../../styles/character.css";
import { Context } from "../store/appContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Vehicles = () => {
    // Array de personajes
    const { store, actions } = useContext(Context)


    return (
        <div className="container-fluid py-4">
            <h1 className="text-warning bg-dark">Vehicles!</h1>
            <div id="carouselVehicles" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">
                           <CardVehicles/>
                           <CardVehicles/>
                           <CardVehicles/>
                           <CardVehicles/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards-wrapper">
                           <CardVehicles/>
                           <CardVehicles/>
                           <CardVehicles/>
                           <CardVehicles/> 
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselVehicles" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselVehicles" data-bs-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

