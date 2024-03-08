import React from "react";
import heroes from "../../array/heroes";
import "./home.css";

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
        </div>
      ))}
    </div>
  );
};

export default Home;
