import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard, { withTopRatingLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />)

  const name = screen.getByText("Aslii Zaika")

  expect(name).toBeInTheDocument()
})

it("Should render RestaurantCard component with promoted label", () => {
  const TopRatedRestaurant = withTopRatingLabel(RestaurantCard)
  render(<TopRatedRestaurant resData={MOCK_DATA} />)

  const label = screen.getByText("Top rated restaurant")

  expect(label).toBeInTheDocument()
})
