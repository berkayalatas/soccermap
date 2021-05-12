import { Slider, Typography } from '@material-ui/core';
import { Fragment } from 'react';
import makeStyles from '../makeStyles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Height = ({ filters, setFilters }: any) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleHeight = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      heightParameters: {
        ...filters.heightParameters,
        height: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      {/* minutes / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='minutes-slider' gutterBottom className={classes.sliderTitle}>
          Height
        </Typography>
        <Slider
          value={filters?.heightParameters?.height}
          onChange={handleHeight}
          valueLabelDisplay='auto'
          aria-labelledby='minutes-slider'
          min={150}
          max={250}
        />
      </div>
    </Fragment>
  );
};

export default Height;
