import { FunctionComponent, useContext } from 'react';
import { Link, Grid, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { AppContext, AppContextType } from '../../context/AppContext';
import links from './links';
import ProfileButton from './ProfileButton';

const LargeScreenHeader: FunctionComponent = () => {
  const { app } = useContext(AppContext) as AppContextType;

  return (
    <Grid container direction='row' alignItems='center' justify='center' spacing={2}>
      <Grid item xl={10} lg={9} md={9} >
        {app.isAuthenticated ? (
          <Grid container direction='row' spacing={2} justify='center' alignItems='center'>
            {links.authenticated.map((link) => (
              <Grid item key={link.href}>
                <Link
                  component={NavLink}
                  color='inherit'
                  to={link.href}
                  className={'unselectable'}
                  activeClassName={'link-active'}
                  style={{margin:7}}
                >
                  {link.label}
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={5} direction='row' justify='center' alignItems='center'>
            {links.notAuthenticated.map((link) => (
              <Grid item key={link.href}>
                <Link
                  component={NavLink}
                  color='inherit'
                  to={link.href}
                  className={'unselectable'}
                  activeClassName={'link-active'}
                  
                >
                  {link.label}
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <Grid item xl={2} lg={3} md={3} >
        {app.isAuthenticated ? (
          <ProfileButton />
        ) : (
          <Grid container spacing={2} direction='row' justify='flex-end' alignItems='center'>
            <Grid item>
              <Button
                component={NavLink}
                to={'/login'}
                variant='contained'
                color='secondary'
                disableElevation
                size="small"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={NavLink}
                to={'/register'}
                variant='contained'
                color='secondary'
                disableElevation
                size="small"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default LargeScreenHeader;
