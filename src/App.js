import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt-me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "dog",
  //     breed: "havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "bird",
  //     breed: "cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "cat", breed: "Mixed" }),
  // ]);
  //below usage of jsx
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt-me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
