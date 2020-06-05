//your code is going to go here.For now
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "dog"),
        React.createElement("h2", {}, "havanese"),
    ]);
};
const App = () => {
    return React.createElement(
        "div",
        { id: "something-important" },
        [
            React.createElement("h1", {}, "Adopt-me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
};
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);