import React from "react";
import { screen, render, shallow } from "@testing-library/react";
import {
  // getByLabelText,
  // getByText,
  getByTestId,
  queryByText,
  // queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  // waitFor,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom'
import { Header } from "../src/components/ui/Header.js";
import { Search } from "../src/components/ui/Search";
// import App from '../src/App';


describe("BreakingBadApp2", () => {
  it('the header should be render', () => {
    expect(getByTestId('required-header')).toBeRequired()
  });
  
  it('the header should include a Breaking Bad App 2', () => {
    expect(screen.queryByText("Breaking Bad App 2")).toBeInTheDocument();
  });
  
  
  it('Header should exist', () => {
    // render(<Header />);
    expect(screen.queryByText(/Breaking Bad App 2/i)).toBeInTheDocument();
  });
})

it("Has the correct title in the header", () => {
  // const { getByTestId } = render(<Header title="Breaking Bad App 2" />);
  const eins = getByTestId("required-header");
  expect(eins.children[0]).toEqual("Breaking Bad App 2");
});

