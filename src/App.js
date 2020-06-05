//your code is going to go here.For now
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};
const App = () => {
    return React.createElement(
        "div",
        { id: "something-important" },
        [
            React.createElement("h1", {}, "Adopt-me!"),
            React.createElement(Pet, { name: "Luna", animal: "dog", breed: "havanese" }),
            React.createElement(Pet, { name: "Pepper", animal: "bird", breed: "cockatiel" }),
            React.createElement(Pet, { name: "Doink", animal: "cat", breed: "Mixed" })
        ]
    );
};
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);