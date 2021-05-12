import { FunctionComponent, Fragment, useContext, useState } from 'react';
import {
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Toolbar,
} from '@material-ui/core';
import { AppContext, AppContextType } from '../../context/AppContext';
import { Menu } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import links from './links';

const SmallScreenHeader: FunctionComponent = () => {
  const { app, setApp } = useContext(AppContext) as AppContextType;
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleLogout = () => {
    setApp({
      ...app,
      isAuthenticated: false,
    });
    toggleDrawer();
  };

  return (
    <Fragment>
      <Grid container direction='row' alignItems='center' justify='flex-end'>
        <Grid item>
          <IconButton
            aria-label='Navigation Menu'
            aria-controls='navigation-menu'
            aria-haspopup='true'
            color='inherit'
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
        </Grid>
      </Grid>
      <Drawer anchor={'right'} open={drawer} onClose={toggleDrawer}>
        <Toolbar />
        {app.isAuthenticated ? (
          <List>
            {links.authenticated.map((link) => (
              <ListItem
                button
                onClick={toggleDrawer}
                component={NavLink}
                to={link.href}
                key={link.label}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <Divider />
            <ListItem
              button
              component={NavLink}
              onClick={toggleDrawer}
              to={'/profile'}
              key={'Profile'}
            >
              <ListItemText primary={'Profile'} />
            </ListItem>
            <ListItem button onClick={handleLogout} key={'Logout'}>
              <ListItemText primary={'Logout'} />
            </ListItem>
          </List>
        ) : (
          <List>
            {links.notAuthenticated.map((link) => (
              <ListItem
                button
                onClick={toggleDrawer}
                component={NavLink}
                to={link.href}
                key={link.label}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <Divider />
            <ListItem button component={NavLink} onClick={toggleDrawer} to={'/login'} key={'Login'}>
              <ListItemText primary={'Login'} />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              onClick={toggleDrawer}
              to={'/register'}
              key={'Register'}
            >
              <ListItemText primary={'Register'} />
            </ListItem>
          </List>
        )}
      </Drawer>
    </Fragment>
  );
};

export default SmallScreenHeader;
