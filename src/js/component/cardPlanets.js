import React, { useContext, useState } from "react";
import "../../styles/character.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = ({ planet }) => {
  const { store, actions } = useContext(Context)

  const handleFavorite = (name) => {
    actions.handleFavorites(name)
  }

  const isFavorites = () => {
    return store.favorites.includes(planet.name)
  }


  return (
    <div className="card col-2 p-0 position-relative mx-3" key={planet.uid || idx}>
      <div className="img-container">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img" alt={planet.name} />
      </div>
      <div className="card-body mb-4">
        <h5 className="title pb-3 mt-2">{planet.name}</h5>
        <Link to={`/planets/${planet.uid}`} className="btn btn-warning position-absolute bottom-0 start-0 mt-2">Read More</Link>
        <button onClick={() => handleFavorite(planet.name)} className="btn btn-warning position-absolute bottom-0 end-0"><i class={`fa-solid fa-heart ${isFavorites() ? "text-danger" : ""}`}></i></button>
      </div>
    </div>
  );
};
