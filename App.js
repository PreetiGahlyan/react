import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("h1", {}, "Hello from React again")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
