import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ExamplePage from './example';

const { Suspense } = React;

function RootRouting() {
  return (
    <Suspense fallback='loading...'>
      <Switch>
        <Route exact path='/' component={ExamplePage} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  );
}

export default RootRouting;
