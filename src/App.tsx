import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import {
  AboutUs,
  Analysis,
  Attributes,
  Features,
  HeaderComponent,
  Landing,
  Login,
  Pricing,
  Profile,
  Profiling,
  ProtectedRoute,
  Register,
  SeasonStats,
} from './components';
import { Toolbar } from '@material-ui/core';

const App: FunctionComponent = () => {
  const [app, setApp] = useState({
    isAuthenticated: true,
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      <BrowserRouter>
        <HeaderComponent />
        <Toolbar></Toolbar>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/features' component={Features} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/about-us' component={AboutUs} />
          <ProtectedRoute
            exact
            path='/login'
            component={Login}
            allow={!app.isAuthenticated}
            redirect={'/season-stats'}
          />
          <ProtectedRoute
            exact
            path='/register'
            component={Register}
            allow={!app.isAuthenticated}
            redirect={'/season-stats'}
          />
          <ProtectedRoute
            exact
            path='/season-stats'
            component={SeasonStats}
            allow={app.isAuthenticated}
            redirect={'/login'}
          />
          <ProtectedRoute
            exact
            path='/attributes'
            component={Attributes}
            allow={app.isAuthenticated}
            redirect={'/login'}
          />
          <ProtectedRoute
            exact
            path='/analysis'
            component={Analysis}
            allow={app.isAuthenticated}
            redirect={'/login'}
          />
          <ProtectedRoute
            exact
            path='/profiling'
            component={Profiling}
            allow={app.isAuthenticated}
            redirect={'/login'}
          />
          <ProtectedRoute
            exact
            path='/profile'
            component={Profile}
            allow={app.isAuthenticated}
            redirect={'/login'}
          />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;