import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

const PassingParameters: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePassingChange = (event: any, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        passing: newValue as [number, number],
      },
    });
  };

  const handleTechniqueChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        technique: newValue as [number, number],
      },
    });
  };

  const handleVisionChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        vision: newValue as [number, number],
      },
    });
  };

  const handleWorkrateChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        workrate: newValue as [number, number],
      },
    });
  };

  const handleFreekickChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        freekick: newValue as [number, number],
      },
    });
  };

  const handleCrossingChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        crossing: newValue as [number, number],
      },
    });
  };

  const handleDribblingChange = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        dribbling: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      {/* passing / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='passing-slider' gutterBottom>
          Passing / Game
        </Typography>
        <Slider
          value={filters.passingParameters.passing}
          onChange={handlePassingChange}
          valueLabelDisplay='auto'
          aria-labelledby='passing-slider'
          min={0}
          max={10}
        />
      </div>
      {/* Technique / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='technique-slider' gutterBottom>
          Technique / Game
        </Typography>
        <Slider
          value={filters.passingParameters.technique}
          onChange={handleTechniqueChange}
          valueLabelDisplay='auto'
          aria-labelledby='technique-slider'
          min={0}
          max={10}
        />
      </div>

      {/* vision / Game */}
      <div className={classes.sliderContainer}>
        <Typography id='vision-slider' gutterBottom>
            Vision / Game
        </Typography>
        <Slider
          value={filters.passingParameters.vision}
          onChange={handleVisionChange}
          valueLabelDisplay='auto'
          aria-labelledby='vision-slider'
          min={0}
          max={10}
        />
      </div>

      {/* workrate */}
      <div className={classes.sliderContainer}>
        <Typography id='workrate-slider' gutterBottom>
          Workrate / Game
        </Typography>
        <Slider
          value={filters.passingParameters.workrate}
          onChange={handleWorkrateChange}
          valueLabelDisplay='auto'
          aria-labelledby='workrate-slider'
          min={0}
          max={10}
        />
      </div>

      {/* freekick */}
      <div className={classes.sliderContainer}>
        <Typography id='freekick-slider' gutterBottom>
          Freekick / Game
        </Typography>
        <Slider
          value={filters.passingParameters.freekick}
          onChange={handleFreekickChange}
          valueLabelDisplay='auto'
          aria-labelledby='freekick-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Crossing */}
      <div className={classes.sliderContainer}>
        <Typography id='crossing-slider' gutterBottom>
          Crossing / Game
        </Typography>
        <Slider
          value={filters.passingParameters.crossing}
          onChange={handleCrossingChange}
          valueLabelDisplay='auto'
          aria-labelledby='crossing-slider'
          min={0}
          max={10}
        />
      </div>

      {/* Dribbling */}
      <div className={classes.sliderContainer}>
        <Typography id='dribbling-slider' gutterBottom>
          Dribbling / Game
        </Typography>
        <Slider
          value={filters.passingParameters.dribbling}
          onChange={handleDribblingChange}
          valueLabelDisplay='auto'
          aria-labelledby='dribbling-slider'
          min={0}
          max={10}
        />
      </div>
    </Fragment>
  );
};

export default PassingParameters;
