import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    },
  })
})

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  )

  const recommendedItems = screen.getAllByTestId("foodItems")
  expect(recommendedItems.length).toBe(20)
})

it("Should Update Header cart items on click of Add button Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  )

  const addBtns = screen.getAllByRole("button", { name: "Add+" })
  fireEvent.click(addBtns[0])
  expect(screen.getByText("Cart (1)")).toBeInTheDocument()
})

it("Should update cart items on click of Add button ItemList Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  )

  const addBtns = screen.getAllByRole("button", { name: "Add+" })
  fireEvent.click(addBtns[0])

  //22 intital recommended items + 2 on click of add button (since ItemList component is reused)
  expect(screen.getAllByTestId("foodItems").length).toBe(22)
})

it("Should clear cart on click of ClearCart button in Cart Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  )

  const addBtns = screen.getAllByRole("button", { name: "Add+" })
  fireEvent.click(addBtns[0])
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" })
  fireEvent.click(clearCartBtn)
  expect(screen.getAllByTestId("foodItems").length).toBe(20)
})
