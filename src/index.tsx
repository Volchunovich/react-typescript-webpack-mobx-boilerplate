import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RootRouting from './root.routing';
import GlobalStyles from './styled';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <RootRouting />
  </BrowserRouter>,
  document.getElementById('root'),
);
