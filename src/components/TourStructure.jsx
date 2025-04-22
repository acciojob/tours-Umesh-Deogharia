import React, { useState } from "react";

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
      <div className="items" key={id}>
        <span>{id}</span>
        <span>{name}</span>
        <img src={image} alt={name} width="200px" />
        <p>{price}</p>
        <p>
          {expand ? info : shortInfo}
          {info.length > 200 && (
            <button style={{marginLeft:"10px"}} onClick={toggle}>{expand ? "See less" : "See more"}</button>
          )}
        </p>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
}
