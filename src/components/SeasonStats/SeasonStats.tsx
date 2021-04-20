import { Fragment, FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import SeasonStatsFilters from './SeasonStatsFilters';
import makeStyles from './makeStyles';
import Grid from '@material-ui/core/Grid';
import DataPagination from './DataPagination'
// import ScatterPlot from './ScatterPlot'
import ScatterPlot1 from './ScatterPlot1'
import ScatterPlot2 from './ScatterPlot2'
import ScatterPlot3 from './ScatterPlot3'
import ScatterPlot4 from './ScatterPlot4'

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
        <h3>Edit components/SeasonStats/SeasonStats.tsx</h3>
        <Grid container>
          {/*<Grid item>
              <ScatterPlot /> 
          </Grid>*/}
          <Grid item className={classes.scatterPlots}>
            <ScatterPlot1 />
          </Grid>
          <Grid item className={classes.scatterPlots}>
            <ScatterPlot2 />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item className={classes.scatterPlots}>
            <ScatterPlot3 />
          </Grid>
          <Grid item className={classes.scatterPlots}>
            <ScatterPlot4 />
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
