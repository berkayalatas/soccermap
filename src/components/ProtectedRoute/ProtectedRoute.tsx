import { FunctionComponent } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  component: any;
  redirect: string;
  allow: boolean;
}

const ProtectedRoute: FunctionComponent<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const { component: Component, allow, redirect, ...rest } = props;

  if (allow) {
    return <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />;
  } else {
    return (
      <Route
        {...rest}
        render={(routeProps) => (
          <Redirect
            to={{
              pathname: redirect,
              state: { from: routeProps.location },
            }}
          />
        )}
      />
    );
  }
};

export default ProtectedRoute;
