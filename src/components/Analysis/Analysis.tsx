import { FunctionComponent, Fragment, useState } from 'react';
import clsx from 'clsx';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import makeStyles from './makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AnalysisFilters from './AnalysisFilters';
import Scatter1 from './Scatters/Scatter1';
import Scatter2 from './Scatters/Scatter2';
import Scatter3 from './Scatters/Scatter3';
import Scatter4 from './Scatters/Scatter4';
import Scatter5 from './Scatters/Scatter5';
import Scatter6 from './Scatters/Scatter6';
import Scatter7 from './Scatters/Scatter7';
import Scatter8 from './Scatters/Scatter8';
import Scatter9 from './Scatters/Scatter9';

const Analysis: FunctionComponent = () => {
  const classes = makeStyles();
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Fragment>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <Grid container style={{ justifyContent: 'center', color: '#004E7C', marginBottom: 10 }}>
          <Grid item>
            <Typography variant='h3' className={classes.title}>
              Comparative Analysis
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter1 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} >
            <Scatter2 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter3 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter4 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter5 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter6 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter7 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter8 />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Scatter9 />
          </Grid>
        </Grid>
      </main>
      <FilterDrawer drawer={drawerOpen} setDrawer={setDrawerOpen}>
        <AnalysisFilters />
      </FilterDrawer>
    </Fragment>
  );
};

export default Analysis;
