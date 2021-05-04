import { FunctionComponent, Fragment, useState } from 'react';
import clsx from 'clsx';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import makeStyles from './makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AnalysisFilters from './AnalysisFilters';

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
      </main>
      <FilterDrawer drawer={drawerOpen} setDrawer={setDrawerOpen}>
        <AnalysisFilters />
      </FilterDrawer>
    </Fragment>
  );
};

export default Analysis;
