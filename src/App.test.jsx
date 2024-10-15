import { expect, test } from "vitest";
import App from "./App";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test('App form submission', async () => {
  render(<App />)
  
  const emailInput=screen.getByTestId('emailInput')
  const submitButton = screen.getByTestId('submitButton')
  
  await userEvent.type(emailInput, 'haris@sigmaschool.co')//userEvent create dummy user
  
  expect(submitButton.disabled).toBe(false)
  
})
