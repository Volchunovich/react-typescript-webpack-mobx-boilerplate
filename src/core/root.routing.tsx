import * as React from 'react';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import About from './about';
import Dashboard from './main';
import { StaticContext } from 'react-router';

const { Suspense } = React;

class RootRouting extends React.Component<RouteComponentProps, StaticContext> {
  render() {
    return (
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about" component={About} />

          {/*<Redirect to='/dashboard' />*/}
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(RootRouting);
