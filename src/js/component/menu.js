import React from "react";
import "../../styles/home.css";

export const Menu = () => (
	<div className="container py-10">
    <div className="menu-container">
		<hr/>
	<h3>BROWSE DATABANK</h3>
		<hr/>
		
      <h5>Browse</h5>
      <ul className="list-group g-dark text-white ">
        <li className="bg-dark text-white "><a href="#intro">ALL</a></li>
        <li className="bg-dark text-white"><a href="#start">CHARACTERS</a></li>
        <li className="bg-dark text-white"><a href="#base">CREATURES</a></li>
        <li className="bg-dark text-white"><a href="#rate">DROIDAS</a></li>
        <li className="bg-dark text-white"><a href="#rate-slowing">LOCATIONS</a></li>
        <li className="bg-dark text-white"><a href="#auth">ORGANIZATIONS</a></li>
        <li className="bg-dark text-white"><a href="#schema">SPECIES</a></li>
        <li className="bg-dark text-white"><a href="#search">VEHICLES</a></li>
		    <li className="bg-dark text-white"><a href="#schema">WEAPONS+TECH</a></li>
        <li className="bg-dark text-white"><a href="#search">MORE</a></li>
      </ul>
    </div>
  </div>
);

