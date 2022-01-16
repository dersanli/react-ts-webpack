import React, { ReactElement } from 'react';

type FizzBuzzProps = {
  numberCount: number
}

let message: string = '';

for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) message = 'FizzBuzz';
  else if (i % 3 == 0) message = 'Fizz';
  else if (i % 5 == 0) message = 'Buzz';
  else message = i.toString();
}

console.log(message);

export const FizzBuzz = ({ numberCount }: FizzBuzzProps): ReactElement => {
  const result: ReactElement[] = [];

  for (let i = 0; i < numberCount;)
    result.push(<div key={`div-${++i}`} data-testid={`fizzBuzz-${i}`}>{`number: ${i} - ${(i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i}`}</div>);

  return (<div>{numberCount}{result}</div>);
};
