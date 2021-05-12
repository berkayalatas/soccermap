import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Age = ({ filters, setFilters }: any) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAge = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      ageParameters: {
        ...filters.ageParameters,
        age: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      {/* minutes / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='age-slider' gutterBottom className={classes.sliderTitle}>
          Age
        </Typography>
        <Slider
          value={filters.ageParameters.age}
          onChange={handleAge}
          valueLabelDisplay='auto'
          aria-labelledby='age-slider'
          min={10}
          max={100}
        />
      </div>
    </Fragment>
  );
};

export default Age;
