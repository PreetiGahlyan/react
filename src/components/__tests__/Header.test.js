import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole("button")

  expect(loginButton).toBeInTheDocument()
})

it("Should load Header component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const cartItems = screen.getByText("Cart (0)")

  expect(cartItems).toBeInTheDocument()
})

it("Should change Login button to LogOut button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole("button", { name: "Login" })

  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", { name: "LogOut" })

  expect(logoutButton).toBeInTheDocument()
})

it("Should change LogOut button to LogIn button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const logInButton = screen.getByRole("button", { name: "Login" })
  fireEvent.click(logInButton)
  const logoutButton = screen.getByRole("button", { name: "LogOut" })
  fireEvent.click(logoutButton)
  const changedlogInButton = screen.getByRole("button", { name: "Login" })
  expect(changedlogInButton).toBeInTheDocument()
})
