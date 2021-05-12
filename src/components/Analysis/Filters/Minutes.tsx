import { Slider, Typography } from '@material-ui/core';
import { Fragment } from 'react';
import makeStyles from '../makeStyles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Minutes = ({ filters, setFilters }: any) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMinutes = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      minutesParameters: {
        ...filters.minutesParameters,
        minutes: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      {/* minutes / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='minutes-slider' gutterBottom className={classes.sliderTitle}>
          Minutes
        </Typography>
        <Slider
          value={filters.minutesParameters.minutes}
          onChange={handleMinutes}
          valueLabelDisplay='auto'
          aria-labelledby='minutes-slider'
          min={0}
          max={90}
        />
      </div>
    </Fragment>
  );
};

export default Minutes;
