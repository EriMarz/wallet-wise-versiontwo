import React from "react";
import { Button } from "../functional/Buttons.tsx";
import { it, expect, describe, vi , afterEach, afterAll} from "vitest";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
//In Vitest with React Testing Library, the preferred method to simulate a button click is using the userEvent library

const buttonProps = {
  className: "flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold",
  name: "Test Button",
  isActive: true,
  route: "/buttonTest",
  onClick: vi.fn(),
};

// cleaning up the DOM after each test
afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  //simple test to make sure vitest is working... tests to see if button renders on DOM
  it("renders Button on the DOM", () => {
    render(
    //we had to wrap Button in BrowserRouter to remove error...i think bc the Buttons in our app use Link from react router.
      <BrowserRouter>
        <Button {...buttonProps} />
      </BrowserRouter>
    );

    expect(Button).toBeDefined();
  });

  //tests if the correct text is rendered on the button
  it("renders the text on the Button", () => {
    render(
      <BrowserRouter>
        <Button {...buttonProps} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
  //tests if the onClick funct. is called when the button is clicked
  //Step 5 in this article v
//   https://s96viky.medium.com/unit-testing-in-a-vite-react-project-8531d684648e
    it("handles click events", async () => {
        const handleClick = vi.fn();
        render(
            <BrowserRouter>
                <Button {...buttonProps} onClick={handleClick}  />
            </BrowserRouter>
            // <button>Test Button</button>
        );
        await userEvent.click(screen.getByText("Test Button"));
        expect(handleClick).toHaveBeenCalled()
    })

});