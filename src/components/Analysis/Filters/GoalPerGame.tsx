import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

const GoalPerGame: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGoal = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      goalParameters: {
        ...filters.minutesParameters,
        goalPerGame: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      {/* Goal Per Game / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='minutes-slider' gutterBottom className={classes.sliderTitle}>
         Goal Per Game
        </Typography>
        <Slider
          value={filters.goalParameters.goalPerGame}
          onChange={handleGoal}
          valueLabelDisplay='auto'
          aria-labelledby='minutes-slider'
          min={0}
          max={10}
        />
      </div>
    </Fragment>
  );
};

export default GoalPerGame;
