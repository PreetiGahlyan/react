import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => <h1 id="heading">Components</h1>

//React functional component
const HeadingComponent = () => (
  <>
    <Title />
    <h1>Namaste React using functional component</h1>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

//render the react element on browser as html element
root.render(<HeadingComponent />)
