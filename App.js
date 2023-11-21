import React from "react"
import ReactDOM from "react-dom/client"

const title = React.createElement("h1", { id: "heading" }, "React element")

const SubComponent = () => {
  return <h2>This is a child component </h2>
}

//React functional component
const HeadingComponent = () => (
  <div id="container">
    {title}
    {/* below 3 are different ways to call a functional component */}
    <SubComponent />
    {SubComponent()}
    <SubComponent></SubComponent>
    <h1>Composition of functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

//render the react element on browser as html element
root.render(<HeadingComponent />)
