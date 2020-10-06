import React from "react";

import "./Cardlist.css";
import Card from "../Card/Card";

const cardlist = (props) => (
  <div className="cardlist">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default cardlist;
