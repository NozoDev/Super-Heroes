import React from "react";
import heroes from "../../array/heroes";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="contenedor-imagenes">
      {heroes.map((hero, index) => (
        <div className="card" key={hero.id}>
          <h2 className="title">{hero.title}</h2>
          <img
            className="imagen"
            src={hero.image}
            alt={`imagen ${index}`}
            key={index}
          />
          <div className="caja-descripcion">
            <p className="descripcion">Info: {hero.informacion}</p>
            <p className="descripcion">Ataque: {hero.ataque}</p>
            <Link to={'./informacion'}>Mas...</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
