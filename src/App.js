import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
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
    <div>
      <h1 id="something-important">Adopt-me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
