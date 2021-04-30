import { Fragment, FunctionComponent } from 'react';
import { AppBar, Toolbar, Link, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './header.css';
import Logo from '../../assets/images/logo-white.png';
import LargeScreenHeader from './LargeScreen';
import SmallScreenHeader from './SmallScreen';

const Header: FunctionComponent = () => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Fragment>
      <AppBar position='fixed' style={{ zIndex: 1500,}} className="appbar" >
        <Toolbar>
          <Grid container spacing={3} direction='row' alignItems='center' justify='space-between'>
            <Grid item md={2} xs={9}>
              <Link component={NavLink} color='inherit' variant='h4' to={'/'} activeClassName={''}>
                <img src={Logo} alt='Soccermap' className={'logo'} />
              </Link>
            </Grid>
            <Grid item md={10} xs={3}>
              {largeScreen ? <LargeScreenHeader /> : <SmallScreenHeader />}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
