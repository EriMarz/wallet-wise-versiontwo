import React from "react";
import { Buttons } from "../functional/Buttons.tsx";
import {it, expect, describe} from 'vitest'
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

const buttonProps = {
    // className: "flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold",
    name: "Test Button",  
    isActive:true,
    route: "/buttontest"
}
//simple test to make sure vitest is working
it("renders Button on the DOM", () => {
    render(<Buttons {...buttonProps}/>);
    // screen.debug();
    // expect(1).toBe(1); //dummy test from Kim 
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    //should pass tho bc we have line nine above rendering the button with that name... at least I'd think so .. oh i see
    // expect(Buttons).toBeDefined();
});// kim  talks alot about props though... do we test props?

it("renders the text on the Button", () => {
    render(<Buttons {...buttonProps})
    expect(screen.getByText("Test Button")).toBeInTheDocument();
}