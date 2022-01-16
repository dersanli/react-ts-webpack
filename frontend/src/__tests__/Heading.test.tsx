import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '../Heading';

it('Header contains correct text', () => {
  render(<Heading message={'My React and TypeScript App'} />);
  const text = screen.getByText('My React and TypeScript App');
  expect(text).toBeInTheDocument();
});