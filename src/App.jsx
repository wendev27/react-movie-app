import React, { useState, useEffect, useRef } from "react";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <main>
        <div className="pattern"></div>

        <div className="wrapper">
          <header>
            <img src="./hero-image.png" alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
          </header>

          <Search
            searchTheTerm={searchTerm}
            setTheSearchTerm={setSearchTerm}
          ></Search>
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </main>
    </>
  );
}

export default App;
