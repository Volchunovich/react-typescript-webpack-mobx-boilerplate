import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styled';

const ExamplePage = lazy(() => import('./example'));

const RootRouter = () => {
  return (
    <Suspense fallback='Loading...'>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path='/' component={ExamplePage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Suspense>
  );
};
export default RootRouter;
