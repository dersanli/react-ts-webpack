import React, { ReactElement } from 'react';

type FizzBuzzProps = {
  numberCount: number
}

for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log('FizzBuzz');
  else if (i % 3 == 0) console.log('Fizz');
  else if (i % 5 == 0) console.log('Buzz');
  else console.log(i);
}

// TODO: write a test for this. Hint: look for `number: 15 - fizzbuzz`
export const FizzBuzz = ({ numberCount }: FizzBuzzProps): ReactElement => {
  const result: ReactElement[] = [];

  for (let i = 0; i < numberCount;)
    result.push(<div>{`number: ${++i} - ${(i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i}`}</div>);

  return (<div>{numberCount}{result}</div>);
};
