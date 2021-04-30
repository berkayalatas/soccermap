import { Fragment, FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import AttributesFilters from './AttributesFilters';
import makeStyles from './makeStyles';
import Grid from '@material-ui/core/Grid';
import Papers from './Papers/SimplePaper';
import Typography from '@material-ui/core/Typography';
import AttributesTable from './AttributesTable';
import GeoMap from './GeoMap';
const Attributes: FunctionComponent = () => {
  const classes = makeStyles();
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <Fragment>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <Grid
          container
          style={{ justifyContent: 'center', color: ' #004E7C', margin: 5, padding: 5 }}
        >
          <Grid item>
            <Typography variant='h3' className={classes.title}>
              Player Attributes
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xl={8} lg={9}>
            <Grid container style={{ justifyContent: 'center', margin: 10 }}>
              <Grid item style={{ width: 600, height: 400 }}>
                <GeoMap />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={4} lg={3}>
            <Papers />
          </Grid>
        </Grid>

        <AttributesTable />
      </main>
      <FilterDrawer drawer={drawerOpen} setDrawer={setDrawerOpen} >
        <AttributesFilters/>
      </FilterDrawer>
    </Fragment>
  );
};

export default Attributes;
