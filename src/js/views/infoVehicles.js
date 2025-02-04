import React, { useState, useEffect } from "react";
import "../../styles/infocharacter.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const InfoVehicles = () => {

    const params = useParams()
    const [vehicleInfo, setVehicleInfo] = useState({})

    const infoTotalVehicles = async () => {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
        const data = await response.json()
        setVehicleInfo(data.result.properties)
    }

    useEffect(() => {
        infoTotalVehicles()
    }, [])

    return (
        <div>
            <div className="background-card container p-2">
                <div className="card-img">
                    <h1 className="card-title py-2">Explore the Star Wars Vehicle Gallery</h1>
                    <p className="card-info container">
                        Dive into the iconic Star Wars universe and discover the vehicles that have shaped the history of the galaxy. From the fast and powerful TIE Fighters to the mighty Millennium Falcon, our gallery lets you take a closer look at the ships and vehicles that have played key roles in the galaxy’s most epic battles. Whether you're a fan of the Rebellion or the Empire, each ship has its own unique story to tell. Take a visual journey through the stars and feel the thrill of these legendary vehicles!</p>

                </div>
            </div>
            <br />
            <div className="cardCharact container py-5">
                <div className="box row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} style={{ maxWidth: '70%', height: 'auto' }} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-white ">
                            <h4 className="name">{vehicleInfo.name}</h4>
                            <p className="card-text-p">Cargo capacity: {vehicleInfo.cargo_capacity} </p>
                            <p className="card-text-p">Consumables: {vehicleInfo.consumables} </p>
                            <p className="card-text-p">Gravity: {vehicleInfo.gravity} </p>
                            <p className="card-text-p">Model: {vehicleInfo.model} </p>
                            <p className="card-text-p">Passengers: {vehicleInfo.passengers} </p>
                            <p className="card-text-p">Class: {vehicleInfo.vehicle_class}</p>
                            <p className="card-text-p">Manufacturer: {vehicleInfo.manufacturer}</p>
                            <p className="card-text-p">Model: {vehicleInfo.model}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/"}><button className="btnReturn btn btn-warning text-center">Return to the homepage</button></Link>
        </div>
    );
};