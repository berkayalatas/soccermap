import { FunctionComponent, useState, useContext } from 'react';
import { IconButton, Menu, MenuItem, Grid } from '@material-ui/core';
// import { AccountCircle } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { AppContext, AppContextType } from '../../context/AppContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

const ProfileButton: FunctionComponent = () => {
  const { app, setApp } = useContext(AppContext) as AppContextType;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setApp({
      ...app,
      isAuthenticated: false,
    });
    handleClose();
  };

  return (
    <Grid container spacing={2} direction='row' justify='flex-end' alignItems='center'>
      <Grid item>
        <IconButton
          aria-label='Profile Menu'
          aria-controls='profile-menu'
          aria-haspopup='true'
          color='inherit'
          onClick={handleClick}
        >
          <img
            src='https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png'
            alt='Profile LOGO'
            style={{width:40}}
          />
        </IconButton>
        <Menu
          id='profile-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{ zIndex: 1700 }}
        >
          <MenuItem onClick={handleLogout}>
          <ExitToAppIcon style={{marginRight:10}}/> Logout
          </MenuItem>
          <MenuItem component={NavLink} to={'/profile'} onClick={handleClose}>
            <PersonIcon style={{marginRight:10}}/> Profile
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default ProfileButton;
