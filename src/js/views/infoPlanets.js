import React, { useState, useEffect   } from "react";
import "../../styles/infocharacter.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const InfoPlanets = () => {

    const params = useParams()    
    const [planetInfo, setPlanetInfo] = useState({})

    const infoTotalPlanets =  async () => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
    const data = await response.json()
    setPlanetInfo(data.result.properties)
    }
    
    useEffect(() => {
        infoTotalPlanets()
    }, [])

    return (
        <div>
            <div className="background-card container p-2">
                <div className="card-img">
                    <h1 className="card-title py-2">Explore the Star Wars Planet Gallery</h1>
                    <p className="card-info container">
                    Travel through the vast corners of the Star Wars galaxy and discover the planets that have been the backdrop for some of the most legendary adventures. From the barren landscapes of Tatooine to the floating cities of Coruscant, our gallery offers a unique view of the worlds that have brought the saga to life. Each planet has its own atmosphere, culture, and secrets to uncover. Join us on an intergalactic tour of the planets that are at the heart of this epic universe.</p>
                </div>
            </div>
            <br />
            <div className="cardCharact container py-5">
                <div className="box row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} style={{ maxWidth: '70%', height: 'auto' }} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-white ">
                            <h4 className="name">{planetInfo.name}</h4> 
                            <p className="card-text-p">Climate: {planetInfo.climate} </p>
                            <p className="card-text-p">Diameter: {planetInfo.diameter} </p>
                            <p className="card-text-p">Gravity: {planetInfo.gravity} </p>
                            <p className="card-text-p">Orbital period: {planetInfo.orbital_period} </p>
                            <p className="card-text-p">Population: {planetInfo.population} </p>
                            <p className="card-text-p">Rotation period: {planetInfo.rotation_period}</p>
                            <p className="card-text-p">Surface waters: {planetInfo.surface_waters}</p>
                            <p className="card-text-p">Terrain: {planetInfo.terrain}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/"}><button className="btnReturn btn btn-warning text-center">Return to the homepage</button></Link>
        </div>
    );
};