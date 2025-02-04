import React, { useState, useEffect } from "react";
import "../../styles/infocharacter.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const InfoCharacter = () => {

    const params = useParams()
    const [characterInfo, setCharacterInfo] = useState({})

    const infoTotalPersonaje = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${params.uid}`)
        const data = await response.json()
        setCharacterInfo(data.result.properties)
    }

    useEffect(() => {
        infoTotalPersonaje()
    }, [])

    return (
        <div>
            <div className="background-card container p-2">
                <div className="card-img">
                    <h1 className="card-title py-2">Explore the Star Wars Character Gallery</h1>
                    <p className="card-info">
                        Step into the vast Star Wars universe and meet the characters that have left an indelible mark on the history of the galaxy. From brave heroes like Luke Skywalker and Leia Organa to the fearsome villains like Darth Vader and Emperor Palpatine, our gallery invites you to explore the figures who have starred in some of the most epic stories in cinema. Each of these characters has a unique destiny that connects them to the balance of the Force. Come and relive their stories in this incredible collection!</p>
                </div>
            </div>
            <div className="cardCharact container py-5">
                <div className="box row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} style={{ maxWidth: '70%', height: 'auto' }} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-white ">
                            <h4 className="name">{characterInfo.name}</h4>
                            <p className="card-text-p">Birth Year: {characterInfo.birth_year} </p>
                            <p className="card-text-p">Hair color: {characterInfo.hair_color} </p>
                            <p className="card-text-p">Gender: {characterInfo.gender} </p>
                            <p className="card-text-p">Skin Color: {characterInfo.skin_color} </p>
                            <p className="card-text-p">Mass: {characterInfo.mass} </p>
                            <p className="card-text-p">Eye color: {characterInfo.eye_color}</p>
                            <p className="card-text-p">Starships: {characterInfo.starships}</p>
                            <p className="card-text-p">Films: {characterInfo.films}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/"}><button className="btnReturn btn btn-warning text-center">Return to the homepage</button></Link>
        </div>
    );
};