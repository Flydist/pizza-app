import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isMadeOrder, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isMadeOrder ?
        <Component {...props} />
        : <Redirect to="/signin" />
    )} />
  );
};

export default PrivateRoute;