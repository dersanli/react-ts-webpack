import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';

import { Heading } from './Heading';
import { Content } from './Content';
import { FizzBuzz } from './FizzBuzz';
import { LoginForm } from './LoginForm';
import { Joke } from './components/joke/Joke';

const noop = (e: any): void => console.log(e);

const App = (): ReactElement => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <Heading message={'A Sample React and TypeScript App'}/>
      <Content/>
      <LoginForm shouldRemember={true} onUsernameChange={noop} onPasswordChange={noop} onRememberChange={noop}
        onSubmit={noop}/>
      <FizzBuzz numberCount={50}/>
      <Joke/>
    </Container>
  </Container>
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);