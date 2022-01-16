import React from 'react';
import { act, render, cleanup, screen, waitFor } from '@testing-library/react';
import { Joke } from '../Joke';

import { singularJoke, emptySingularStory } from '../Joke.fixture';
import { getARandomJoke } from '../jokeApi';
import { mocked } from 'jest-mock';

jest.mock('../jokeApi');
const mockedAxios = mocked(getARandomJoke);

describe('Joke Test Suite', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('Renders home correctly', async () => {
    await act(async () => {
      render(<Joke/>);
    });
    const jokeContainer = screen.getByTestId('jokeContainer');
    expect(jokeContainer).toBeInTheDocument();
  });

  test('Renders a joke correctly', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.resolve(singularJoke));

    await act(async () => {
      const { getByText } = render(<Joke/>);
      await waitFor(() => [
        expect(
          getByText(
            'Chuck Norris invented the internet so people could talk about how great Chuck Norris is.',
          ),
        ).toBeTruthy(),
      ]);
    });
  });

  test('Renders empty a joke correctly', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.resolve(emptySingularStory));

    await act(async () => {
      render(<Joke/>);
      await waitFor(() => [expect(screen.getByTestId('jokeText')).toHaveTextContent('')]);
    });
  });
});