const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const h1 = React.createElement("h1", {}, "I am a h1 tag");

const h2 = React.createElement("h2", {}, "This is an h2 tag");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [h1, h2]),
  React.createElement("div", { id: "child2" }, [h1, h2]),
]);

console.log(parent); // This is an object not an html element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // This method is responsible to take the React Element object and convert it to a html element and place it inside the root element
