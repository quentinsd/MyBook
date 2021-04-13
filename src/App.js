import "./App.css";
import React, { useState } from "react";
import Home from "./Home";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      {page === 1 && <Home page={setPage} />}
      {page === 2 && <p>ok</p>}
    </div>
  );
}

export default App;
