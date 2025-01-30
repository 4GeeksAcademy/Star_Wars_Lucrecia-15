import React, { useState, useContext } from "react";
import { CardCharacter } from "./cardCharacter";
import "../../styles/character.css";
import { Context } from "../store/appContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Characters = () => {
    const { store, actions } = useContext(Context)
    const { info, setInfo } = useState([])

    return (
        <div className="container-fluid">
            <h1 className="text-warning bg-dark">Characters!</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">
                            {info.map((Characters, index)=>(
                            <CardCharacter
                            key={index.id}
                            uid={Characters.id}
                            name={Characters.name}
                            gender={Characters.gender}
                            hair_color={Characters.hair_color} />))}
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards-wrapper">
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                        </div>
                    </div>
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

//<div className="controls flex justify-content-between">
//<button onClick={handlePrev} disabled={currentIndex === 0}>prev</button>
//<button onClick={handleNext} disabled={currentIndex + itemsForPage >= store.characters?.length}>next</button>
//</div>
//	const [currentIndex, setCurrentIndex] = useState(0);
//const itemsForPage = 2
// const handleNext = () => {
// if (currentIndex + itemsForPage < store.characters.length) {
// setCurrentIndex(currentIndex + itemsForPage)
// }
// }
// const handlePrev = () => {
// if (currentIndex - itemsForPage >= 0) {
// setCurrentIndex(currentIndex - itemsForPage)
// }
// }
// const currentItems = store.characters?.slice(currentIndex, currentIndex + itemsForPage)

// const goLeft = () => {
// setCurrentIndex((prevIndex) =>
// prevIndex === 0 ? characters.length - 1 : prevIndex - 1
// );
// };

// const goRight = () => {
// setCurrentIndex((prevIndex) =>
// prevIndex === characters.length - 1 ? 0 : prevIndex + 1
// );
// };