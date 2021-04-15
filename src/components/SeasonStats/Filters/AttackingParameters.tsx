import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

const AttackingParameters: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGoalChange = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        goal: newValue as [number, number],
      },
    });
  };

  const handleAssistsChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        assist: newValue as [number, number],
      },
    });
  };

  const handleDribblesAttChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        dribbleAttempts: newValue as [number, number],
      },
    });
  };

  const handleDribblesSuccChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        dribbleSuccess: newValue as [number, number],
      },
    });
  };

  const handleDribblesPastChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        dribblePast: newValue as [number, number],
      },
    });
  };

  const handleShotsTotalChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        shotTotal: newValue as [number, number],
      },
    });
  };

  const handleShotsOnTargetChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        shotOnTarget: newValue as [number, number],
      }
    })
  }

  return (
    <Fragment>
      {/* Goal / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='goal-game-slider' gutterBottom>
          Goal / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.goal}
          onChange={handleGoalChange}
          valueLabelDisplay='auto'
          aria-labelledby='goal-game-slider'
          min={0}
          max={10}
        />
      </div>
      {/* Assists / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='assists-game-slider' gutterBottom>
          Assists / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.assist}
          onChange={handleAssistsChange}
          valueLabelDisplay='auto'
          aria-labelledby='assists-game-slider'
          min={0}
          max={10}
        />
      </div>
      {/* Dribbles Att */}
      <div className={classes.sliderContainer}>
        <Typography id='dribblesAtt-game-slider' gutterBottom>
          Dribbles Att / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.dribbleAttempts}
          onChange={handleDribblesAttChange}
          valueLabelDisplay='auto'
          aria-labelledby='dribblesAtt-game-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Dribbles Success */}
      <div className={classes.sliderContainer}>
        <Typography id='dribbleSucc-game-slider' gutterBottom>
          Dribbles Succ / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.dribbleSuccess}
          onChange={handleDribblesSuccChange}
          valueLabelDisplay='auto'
          aria-labelledby='dribbleSucc-game-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Dribbles Past */}
      <div className={classes.sliderContainer}>
        <Typography id='dribblePast-game-slider' gutterBottom>
          Dribbles Past / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.dribblePast}
          onChange={handleDribblesPastChange}
          valueLabelDisplay='auto'
          aria-labelledby='dribblePast-game-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Shots Total */}
      <div className={classes.sliderContainer}>
        <Typography id='shotsTot-game-slider' gutterBottom>
          Shots Tot / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.shotTotal}
          onChange={handleShotsTotalChange}
          valueLabelDisplay='auto'
          aria-labelledby='shotsTot-game-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Shots on Target */}
      <div className={classes.sliderContainer}>
        <Typography id='shotsOnTarget-game-slider' gutterBottom>
          Shots on Target / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.shotOnTarget}
          onChange={handleShotsOnTargetChange}
          valueLabelDisplay='auto'
          aria-labelledby='shotsOnTarget-game-slider'
          min={0}
          max={10}
        />
      </div>
    </Fragment>
  );
};

export default AttackingParameters;
