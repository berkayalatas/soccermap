import { Fragment, FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import SeasonStatsFilters from './SeasonStatsFilters';
import makeStyles from './makeStyles';

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
      </main>
      <FilterDrawer drawer={drawerOpen} setDrawer={setDrawerOpen}>
        <SeasonStatsFilters />
      </FilterDrawer>
    </Fragment>
  );
};

export default SeasonStats;
