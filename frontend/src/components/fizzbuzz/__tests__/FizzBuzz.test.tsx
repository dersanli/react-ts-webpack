import React from 'react';
import { render } from '@testing-library/react';
import { FizzBuzz } from '../FizzBuzz';

describe('FizzBuzz Test Suite', () => {
  test('Loops through correct number of numbers', () => {
    const testNumber: number = 49;
    const testId: string = `fizzBuzz-${testNumber}`;

    const { getByText, getByTestId } = render(<FizzBuzz numberCount={testNumber}/>);
    expect(
      getByText(
        `number: ${testNumber} - ${testNumber}`,
      ),
    ).toBeTruthy();

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  test('Displays a correct message on 3rd', () => {
    const testNumber: number = 3;

    const { getByText } = render(<FizzBuzz numberCount={testNumber}/>);
    expect(
      getByText(
        'number: 3 - fizz',
      ),
    ).toBeTruthy();
  });

  test('Displays a correct message on 5th', () => {
    const testNumber: number = 5;

    const { getByText } = render(<FizzBuzz numberCount={testNumber}/>);
    expect(
      getByText(
        'number: 5 - buzz',
      ),
    ).toBeTruthy();
  });

  test('Displays a correct message on 15th', () => {
    const testNumber: number = 15;

    const { getByText } = render(<FizzBuzz numberCount={testNumber}/>);
    expect(
      getByText(
        'number: 15 - fizzbuzz',
      ),
    ).toBeTruthy();
  });
});