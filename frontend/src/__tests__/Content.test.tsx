import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from '../Content';

test('Content contains var image', () => {
  render(<Content altText={'Car'} />);
  const car = screen.getByAltText('Car');
  expect(car).toBeInTheDocument();
});