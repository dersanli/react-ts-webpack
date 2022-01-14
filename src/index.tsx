import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Heading } from './Heading';
import { Content } from './Content';
import { FizzBuzz } from './FizzBuzz';
import { LoginForm } from './LoginForm';

const noop = (e: any): void => console.log(e);

const App = (): ReactElement => (
  <>
    <Heading message={'A Sample React and TypeScript App'}/>
    <Content/>
    <LoginForm shouldRemember={true} onUsernameChange={noop} onPasswordChange={noop} onRememberChange={noop}
      onSubmit={noop}/>
    <FizzBuzz numberCount={50}/>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);