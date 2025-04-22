import React, { useState } from "react";
import style from "../styles/App.module.css";
export default function TourStructure({ tour, handleDelete }) {
  // console.log(tour);
  const { id, name, image, price, info } = tour;
  const [expand, setExpand] = useState(false);

  let toggle = () => {
    setExpand(!expand);
  };

  // console.log(typeof info);

  let shortInfo = info.length > 200 ? `${info.substring(0, 200)}` : null;
  return (
    <>
      <div className={style.items} id="main" key={id}>
        <span>{id}</span>
        <span>{name}</span>
        <img src={image} alt={name} width="200px" />
        <p>{price}</p>
        <p id="tour-item-para-rec6d6T3q5EBIdCfD">
          {expand ? info : shortInfo}
          {info.length > 200 && (
            <button
              style={{ marginLeft: "10px" }}
              onClick={toggle}
              id="see-more-rec6d6T3q5EBIdCfD"
            >
              {expand ? "Show less" : "Show More"}
            </button>
          )}
        </p>
        <button
          className={style.deletebtn}
          id="delete-btn-rec6d6T3q5EBIdCfD"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
