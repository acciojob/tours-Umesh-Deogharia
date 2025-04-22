import React, { useState } from "react";
import "../styles/App.css";
import TourStructure from "./TourStructure";

export default function Tour({ data }) {
  const [tours, setTours] = useState(data);

  // console.log(deleteItem);
  function handleDelete(id) {
    let updatedData = tours.filter((items) => items.id != id);
    setTours(updatedData);
  }

  return (
    <div>
      {/* {console.log(data.id)} */}
      {tours.map((tour) => {
        return (
          <TourStructure
            tour={tour}
            handleDelete={handleDelete}
            key={tour.id}
          />
        );
      })}
      {tours.length == 0 && (
        <div>
          <p>No tours left</p>
          <button className="btn" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}
