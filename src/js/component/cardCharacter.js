import React, { useState, useContext, useEffect } from "react";
import "../../styles/character.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const CardCharacter = ({props}) => {
  const { store, actions } = useContext(Context);
  const { info, setInfo } = useState([])
  const {likes, setLikes} = useState([])

  const addToLike = (item) => {
    if (!favoritos.includes(item)) {
      setLikes([...likes, item]);
    }
  }; //boton de favoritos (tendría que poner el .id en el onclick?)

  const infoPeople = async () => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${props.id}`);
      const data = await response.json();
      setInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    infoPeople()
  }, [])

  return (
    <div className="card">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="card-img-top" alt= {props.name} />
      <div className="card-body">
        <h5 className="card-title">Name:{props.name}</h5>
        <p className="card-text">Gender:{props.gender}</p>
        <p className="card-text">Heair color:{props.hair_color}</p>
        <div className="containerButton d-flex justify-content-between">
        <Link to="/info/:id"><a href="#" className="btn btn-warning">Learn More</a></Link>
          <button onClick={()=> addToLike } className="btn btn-warning p-2"><i className="fa-solid fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};
