import React from 'react';
import {render, screen} from '@testing-library/react'

import { Background } from "../src/";

test("Background", () => {
  const content = "Hello World";
  render(<Background>{content}</Background>);
  expect(screen.getByText(content)).toBeInTheDocument();
})