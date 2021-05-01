import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

const AttackingParameters: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAccelerationChange = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        acceleration: newValue as [number, number],
      },
    });
  };

  const handlePaceChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        pace: newValue as [number, number],
      },
    });
  };

  const handleJumpingChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        jumping: newValue as [number, number],
      },
    });
  };

  const handleAgilityChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        agility: newValue as [number, number],
      },
    });
  };

  const handleStrengthChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        strength: newValue as [number, number],
      },
    });
  };

  const handleStaminaChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        stamina: newValue as [number, number],
      },
    });
  };

  const handleBalanceChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      physicalParameters: {
        ...filters.physicalParameters,
        balance: newValue as [number, number],
      }
    })
  }

  return (
    <Fragment>
      {/* acceleration / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='goal-game-slider' gutterBottom className={classes.sliderTitle}>
          Acceleration / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.acceleration}
          onChange={handleAccelerationChange}
          valueLabelDisplay='auto'
          aria-labelledby='acceleration-slider'
          min={0}
          max={10}
        />
      </div>
      {/* pace / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='pace-slider' gutterBottom className={classes.sliderTitle}>
            Pace / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.pace}
          onChange={handlePaceChange}
          valueLabelDisplay='auto'
          aria-labelledby='pace-slider'
          min={0}
          max={10}
        />
      </div>
      {/* jumping */}
      <div className={classes.sliderContainer}>
        <Typography id='jumping-slider' gutterBottom className={classes.sliderTitle}>
          Jumping / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.jumping}
          onChange={handleJumpingChange}
          valueLabelDisplay='auto'
          aria-labelledby='jumping-slider'
          min={0}
          max={10}
        />
      </div>

      {/* agility */}
      <div className={classes.sliderContainer}>
        <Typography id='agility-slider' gutterBottom className={classes.sliderTitle}>
          Agility / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.agility}
          onChange={handleAgilityChange}
          valueLabelDisplay='auto'
          aria-labelledby='agility-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Strength */}
      <div className={classes.sliderContainer}>
        <Typography id='strength-slider' gutterBottom className={classes.sliderTitle}>
          Strength / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.strength}
          onChange={handleStrengthChange}
          valueLabelDisplay='auto'
          aria-labelledby='strength-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Stamina */}
      <div className={classes.sliderContainer}>
        <Typography id='stamina-slider' gutterBottom className={classes.sliderTitle}>
          Stamina / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.stamina}
          onChange={handleStaminaChange}
          valueLabelDisplay='auto'
          aria-labelledby='stamina-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Balance */}
      <div className={classes.sliderContainer}>
        <Typography id='balance-slider' gutterBottom className={classes.sliderTitle}>
          Balance / Game
        </Typography>
        <Slider
          value={filters.physicalParameters.balance}
          onChange={handleBalanceChange}
          valueLabelDisplay='auto'
          aria-labelledby='balance-slider'
          min={0}
          max={10}
        />
      </div>
    </Fragment>
  );
};

export default AttackingParameters;
