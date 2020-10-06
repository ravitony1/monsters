import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="Card">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2`}
    />

    <h2>{props.monster.name}</h2>
    <p>{props.monster.emaail}</p>
  </div>
);

export default Card;
