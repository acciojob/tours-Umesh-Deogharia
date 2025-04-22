import React, { useState } from "react";
import data from "./Data.json";
import Tour from "./Tour";
// import { useState } from "react";

const App = () => {
  
  return (
      <Tour data={data} />
    )
}
export default App;
