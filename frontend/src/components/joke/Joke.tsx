import React, { ReactElement, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { jokeType, getARandomJoke } from './jokeApi';

export const Joke = (): ReactElement => {
  useEffect(() => {
    getARandom().then((response) => setJoke(response));
  }, []);
  const [joke, setJoke] = useState<jokeType>();
  const [loading, setLoading] = useState(false);

  const getARandom = async (): Promise<jokeType> => {
    setLoading(true);
    const data: jokeType = await getARandomJoke();
    setLoading(false);
    return data;
  };

  const handleRefresh = async (): Promise<void> => {
    const joke = await getARandom();
    setJoke(joke);
  };

  return (<div data-testid="jokeContainer">
    <div data-testid="jokeText">{joke?.value}</div>
    <Button data-testid="jokeButton" onClick={handleRefresh} disabled={loading}>Refresh</Button></div>);
};