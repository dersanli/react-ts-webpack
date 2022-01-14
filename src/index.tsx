import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Heading } from './Heading';
import { Content } from './Content';

const App = (): ReactElement => (
  <>
    <Heading message={'A Sample React and TypeScript App'}/>
    <Content/>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);