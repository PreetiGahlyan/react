import { fireEvent, render, screen } from "@testing-library/react"
import Main from "../Main"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    },
  })
})

it("Should search Res List with Burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        {" "}
        <Main />
      </BrowserRouter>
    )
  })

  const searchButton = screen.getByRole("button", { name: "Search" })

  const searchInput = screen.getByTestId("searchInput")
  fireEvent.change(searchInput, { target: { value: "burger" } })
  fireEvent.click(searchButton)
  const cards = screen.getAllByTestId("resCard")
  //verify in mock data json
  expect(cards.length).toBe(2)
})

it("Should filter top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        {" "}
        <Main />
      </BrowserRouter>
    )
  })

  const cardsBeforeFilter = screen.getAllByTestId("resCard")
  expect(cardsBeforeFilter.length).toBe(9)
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  })
  fireEvent.click(topRatedBtn)

  const cardsAfterFilter = screen.getAllByTestId("resCard")

  //verify in mock data json
  expect(cardsAfterFilter.length).toBe(4)
})
