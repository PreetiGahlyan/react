import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact Us Page test Cases", () => {
  it("Should load heading in contact us component", () => {
    //render
    render(<Contact />)
    //query
    const heading = screen.getByRole("heading")
    //assert
    expect(heading).toBeInTheDocument()
  })

  it("Should load button in contact us component", () => {
    render(<Contact />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("Should load name input in contact us component", () => {
    render(<Contact />)
    const nameInputBox = screen.getByPlaceholderText("name")
    expect(nameInputBox).toBeInTheDocument()
  })

  it("Should load two input boxes in contact us component", () => {
    render(<Contact />)
    const inputBoxes = screen.getAllByRole("textbox")
    expect(inputBoxes.length).toBe(2)
  })
})
