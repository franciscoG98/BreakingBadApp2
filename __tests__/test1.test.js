// import { screen, render, shallow } from "@testing-library/react";
import {
  // getByLabelText,
  // getByText,
  getByTestId,
  // queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  // waitFor,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom'
// import { Header } from "../src/components/ui/Header.js";
// import { Search } from "../src/components/ui/Search";
// import App from '../src/App';


it('renders welcome message', () => {
  // const header = queryByTestId('required-header')
  // expect(header.queryByText(/Breaking Bad Character Search/i)).toBeInTheDocument();
  expect(getByTestId('required-header')).toBeRequired()
});
