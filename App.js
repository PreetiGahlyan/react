const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement(
      "h1",
      { id: "heading2" },
      "Hello World from React Again!"
    ),
  ])
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
