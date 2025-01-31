import React, { useState, useContext, useEffect } from "react";
import "../../styles/character.css";
import { Context } from "../store/appContext"


export const CardPlanets = (props) => {
  const { store, actions } = useContext(Context);
  const { info, setInfo } = useState([])

  const infoPeople = async () => {
    fetch(`https://www.swapi.tech/api/planets/${props.id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  useEffect (()=>{
    infoPeople()
  })

  return (
    <div className="card">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name:{props.name}</h5>
        <p className="card-text">Model:{props.model}</p>
        <p className="card-text">Passengers:{props.passengers}</p>
        <div className="containerButton d-flex justify-content-between">
          <a href="#" className="btn btn-warning">Learn More</a>
          <button className="btn btn-warning p-2"><i class="fa-solid fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};
