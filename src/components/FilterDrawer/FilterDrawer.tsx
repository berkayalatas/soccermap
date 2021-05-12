import { Dispatch, Fragment, FunctionComponent, SetStateAction } from 'react';
import { Drawer, Button, Toolbar } from '@material-ui/core';
import { Close, ArrowRight } from '@material-ui/icons';
import makeStyles from './makeStyles';

interface Props {
  drawer: boolean;
  setDrawer: Dispatch<SetStateAction<boolean>>;
}

const FilterDrawer: FunctionComponent<Props> = ({ children, drawer, setDrawer }) => {
  const classes = makeStyles();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        anchor={'left'}
        variant='persistent'
        open={drawer}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <Button disableElevation onClick={toggleDrawer}
          style={{color: '#fff', backgroundColor:"#979797"}}
        >
          <Close fontSize='large' />
          Filters
        </Button>
        {children}
      </Drawer>
      <div className={classes.openFilter}>
        <Toolbar />
        <Button className={classes.openFilterButton} onClick={toggleDrawer}>
          Filters
          <ArrowRight />
        </Button>
      </div>
    </Fragment>
  );
};

export default FilterDrawer;
