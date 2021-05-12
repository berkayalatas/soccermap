import { Fragment, FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import SeasonStatsFilters from './SeasonStatsFilters';
import makeStyles from './makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DataPagination from './SeasonStatsTable';
// import ScatterPlot from './ScatterPlot'
import ScatterPlot1 from './scatterPlots/ScatterPlot1';
import ScatterPlot2 from './scatterPlots/ScatterPlot2';
import ScatterPlot3 from './scatterPlots/ScatterPlot3';
import ScatterPlot4 from './scatterPlots/ScatterPlot4';
import Papers from './Papers/SimplePaper';

const SeasonStats: FunctionComponent = () => {
  const classes = makeStyles();
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Fragment>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid item>
            <Typography
              variant='h3'
              className={classes.title}
              style={{ color: '#004E7C', marginBottom: 10 }}
            >
              Player Season Stats
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xl={8} lg={9}>
            <Grid container style={{ justifyContent: 'center' }}>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.scatterPlots}>
                <ScatterPlot1 />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.scatterPlots}>
                <ScatterPlot2 />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.scatterPlots}>
                <ScatterPlot3 />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.scatterPlots}>
                <ScatterPlot4 />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={4} lg={3}>
            <Papers />
          </Grid>
        </Grid>

        <DataPagination />
      </main>
      <FilterDrawer drawer={drawerOpen} setDrawer={setDrawerOpen}>
        <SeasonStatsFilters />
      </FilterDrawer>
    </Fragment>
  );
};

export default SeasonStats;
