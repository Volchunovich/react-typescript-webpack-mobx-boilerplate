import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './global.styled';
import RootRouting from './root.routing';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <RootRouting />
  </BrowserRouter>,
  document.getElementById('root'),
);
