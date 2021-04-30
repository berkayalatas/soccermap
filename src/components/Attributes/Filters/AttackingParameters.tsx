import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

const AttackingParameters: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFinishingChange = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        finishing: newValue as [number, number],
      },
    });
  };

  const handleAnticipationChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        anticipation: newValue as [number, number],
      },
    });
  };

  const handleFlairChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        flair: newValue as [number, number],
      },
    });
  };

  const handleFirstTouchChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        firstTouch: newValue as [number, number],
      },
    });
  };

  const handleDeterminationChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        determination: newValue as [number, number],
      },
    });
  };

  const handleOffTheBallChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        offTheBall: newValue as [number, number],
      },
    });
  };

  const handleLongShotChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      attackingParameters: {
        ...filters.attackingParameters,
        longShot: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      {/* finishing / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='finishing-slider' gutterBottom>
          Finishing / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.finishing}
          onChange={handleFinishingChange}
          valueLabelDisplay='auto'
          aria-labelledby='finishing-slider'
          min={0}
          max={10}
        />
      </div>
      {/* Anticipation / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='anticipation-slider' gutterBottom>
          Anticipation / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.anticipation}
          onChange={handleAnticipationChange}
          valueLabelDisplay='auto'
          aria-labelledby='anticipation-slider'
          min={0}
          max={10}
        />
      </div>

      {/* flair / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='flair-slider' gutterBottom>
            Flair / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.flair}
          onChange={handleFlairChange}
          valueLabelDisplay='auto'
          aria-labelledby='flair-slider'
          min={0}
          max={10}
        />
      </div>

      {/* firstTouch */}
      <div className={classes.sliderContainer}>
        <Typography id='firstTouch-slider' gutterBottom>
            FirstTouch / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.firstTouch}
          onChange={handleFirstTouchChange}
          valueLabelDisplay='auto'
          aria-labelledby='firstTouch-slider'
          min={0}
          max={10}
        />
      </div>

      {/* determination */}
      <div className={classes.sliderContainer}>
        <Typography id='determination-slider' gutterBottom>
          Determination / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.determination}
          onChange={handleDeterminationChange}
          valueLabelDisplay='auto'
          aria-labelledby='determination-slider'
          min={0}
          max={10}
        />
      </div>

      {/* OffTheBall */}
      <div className={classes.sliderContainer}>
        <Typography id='offTheBall-slider' gutterBottom>
          OffTheBall / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.offTheBall}
          onChange={handleOffTheBallChange}
          valueLabelDisplay='auto'
          aria-labelledby='offTheBall-slider'
          min={0}
          max={10}
        />
      </div>

      {/* LongShot */}
      <div className={classes.sliderContainer}>
        <Typography id='longShot-slider' gutterBottom>
          LongShot / Game
        </Typography>
        <Slider
          value={filters.attackingParameters.longShot}
          onChange={handleLongShotChange}
          valueLabelDisplay='auto'
          aria-labelledby='longShot-slider'
          min={0}
          max={10}
        />
      </div>
    </Fragment>
  );
};

export default AttackingParameters;
