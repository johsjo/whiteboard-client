import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Test from '../pages/Test';
import RouteInfo from '../pages/RouteInfo';
import NotFound from '../pages/NotFound';
import Whiteboard from '../pages/Whiteboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/whiteboard/:id" component={Whiteboard} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/route-info/:id/:testInfo" component={RouteInfo} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
