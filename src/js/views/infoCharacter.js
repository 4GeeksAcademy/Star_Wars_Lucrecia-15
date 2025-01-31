import React, {  useContext  } from "react";
import { Context } from "../store/appContext";
import "../../styles/infocharacter.css";

export const InfoCharacter = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="background-card text-warning bg-dark">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h1 className="card-title py-3">Characters</h1>
                    <p className="card-text">
                        Welcome to our brief exploration of the Star Wars universe, a galaxy full of heroes, villains, and legendary creatures. Today, we will introduce you to some of the most iconic characters from this saga, who have made a deep impact on popular culture.</p>
                    <h3 className="card-text">{ }</h3> aquí iria el nombre del personaje
                </div>
            </div>
            <br />
            <div className="card mb-3">/la foto se debe modificar automaticamente/
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20071214134433" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Birth Year: </p>
                            <p className="card-text">Species: </p>
                            <p className="card-text">Gender: </p>
                            <p className="card-text">Skin Color: </p>
                            <p className="card-text">Homeworld: </p>
                            <p className="card-text">Vehicles:</p>
                            <p className="card-text">Planets:</p>
                            <p className="card-text">Films:</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-warning">Return to the homepage</button>
        </div>
    );
};