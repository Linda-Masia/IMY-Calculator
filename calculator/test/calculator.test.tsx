import { render, screen, fireEvent } from "@testing-library/react"
import Calculator from "@/components/Calculator"

describe("Calculator", () => {
  it("adds two numbers correctly", () => {
    render(<Calculator />)

    fireEvent.change(screen.getByPlaceholderText("Number A"), {
      target: { value: "10" },
    })
    fireEvent.change(screen.getByPlaceholderText("Number B"), {
      target: { value: "5" },
    })
    fireEvent.click(screen.getByText("+"))

    const result = screen.getByTestId("result").textContent
    expect(result).toBe("Result: 15")
  })

  it("subtracts two numbers correctly", () => {
    render(<Calculator />)

    fireEvent.change(screen.getByPlaceholderText("Number A"), {
      target: { value: "10" },
    })
    fireEvent.change(screen.getByPlaceholderText("Number B"), {
      target: { value: "5" },
    })
    fireEvent.click(screen.getByText("-"))

    const result = screen.getByTestId("result").textContent
    expect(result).toBe("Result: 5")
  })

  it("multiplies two numbers correctly", () => {
    render(<Calculator />)

    fireEvent.change(screen.getByPlaceholderText("Number A"), {
      target: { value: "10" },
    })
    fireEvent.change(screen.getByPlaceholderText("Number B"), {
      target: { value: "5" },
    })
    fireEvent.click(screen.getByText("*"))

    const result = screen.getByTestId("result").textContent
    expect(result).toBe("Result: 50")
  })

  // Failing Test - To be fixed
  it("fails if no number is entered", () => {
    render(<Calculator />)

    fireEvent.change(screen.getByPlaceholderText("Number A"), {
      target: { value: "0" }, // Leaving Number A blank
    })
    fireEvent.change(screen.getByPlaceholderText("Number B"), {
      target: { value: "5" },
    })
    fireEvent.click(screen.getByText("+"))

    // This will fail because the result will not handle an empty input correctly.
    const result = screen.getByTestId("result").textContent
    expect(result).toBe("Result: 5") // This should not be 5, it should be an error or a warning message.
  })
})
