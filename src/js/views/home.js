import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/character";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";


export const Home = () => (
    <div className="container">
	<Characters />
	<br></br>
	<Planets/>
	<br></br>
	<Vehicles/>
	</div>
	);
