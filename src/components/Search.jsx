import React from "react";

function Search({ searchTheTerm, setTheSearchTerm }) {
  // function Search(props) {
  //   const person = {
  //     name: "Bruce Wayne",
  //     age: 36,
  //     location: "Gotham City",
  //   };
  //   const { name, age, location } = person;
  //  OLD WAY

  return (
    <>
      <div className="search">
        <div>
          <img src="search.svg" alt="search" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search through thousands of movies"
            value={searchTheTerm}
            onChange={(e) => {
              setTheSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
