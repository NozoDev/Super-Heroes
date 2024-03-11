import React from "react";
import heroes from "../../array/heroes";
import "./home.css";

const Home = () => {

  const handleClick = () => {
    alert('me diste click')
  }
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
          <br />
          <div className="caja-descripcion">
          <p className="descripcion">Info: {hero.informacion}</p>
          <p className="descripcion">Ataque: {hero.ataque}</p>
          <div className="contenedor-btn">
          <button onClick={handleClick} className="btn-btn">Mas...</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
