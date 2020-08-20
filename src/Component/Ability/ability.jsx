import React from "react";

// IMAGES IMPORT ABILITY
import guarantee from "../../Assets/icon-images/guarantee.png";
import agent from "../../Assets/icon-images/agent.png";
import heart from "../../Assets/icon-images/heart.png";
import support from "../../Assets/icon-images/support.png";

const card_contains = [
  {
    id: "1",
    title: "Best Price Guarantee",
    desc: "A small river named Duren flows by their place and supplies ",
    images: guarantee,
  },
  {
    id: "2",
    title: "Travellers Love Us",
    desc: "A small river named Duren flows by their place and supplies ",
    images: agent,
  },
  {
    id: "3",
    title: "Best Travel Agent",
    desc: "A small river named Duren flows by their place and supplies ",
    images: heart,
  },
  {
    id: "4",
    title: "Our Dedicated Support",
    desc: "A small river named Duren flows by their place and supplies ",
    images: support,
  },
];
export default function Ability() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "1rem",
        justifyItems: "center",
      }}
    >
      {card_contains.map((card) => (
        <div className="box1">
          <img className="logo-position-1" src={card.images} alt="" />
          <div className="text-in-box-1">{card.title}</div>
          <div className="desc-in-box-1">{card.desc}</div>
        </div>
      ))}
    </div>
  );
}
