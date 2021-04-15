import { Fragment, FunctionComponent } from 'react';
import { FiltersProps } from './interfaces';
import { Slider, Typography } from '@material-ui/core';
import makeStyles from '../makeStyles';

const PassingParameters: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  const handleCrossTotal = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        crossTotal: newValue as [number, number],
      },
    });
  };

  const handleCrossSuccess = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        crossSuccess: newValue as [number, number],
      },
    });
  };

  const handlePassAccuracy = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        passAccuracy: newValue as [number, number],
      },
    });
  };


  const handleKeyPass = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        keyPass: newValue as [number, number],
      },
    });
  };


  const handlePassesTotal = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        passesTotal: newValue as [number, number],
      },
    });
  };


  const handleYellowCard = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        yellowCard: newValue as [number, number],
      },
    });
  };


  const handleFoulsDrawn = (event: unknown , newValue: number | number[]) => {
    setFilters({
      ...filters,
      passingParameters: {
        ...filters.passingParameters,
        foulsDrawn: newValue as [number, number],
      },
    });
  };

  return (
    <Fragment>
      <div className={classes.sliderContainer}>
        <Typography id='cross-total-slider' gutterBottom>
          Cross Total/Game
        </Typography>
        <Slider
          value={filters.passingParameters.crossTotal}
          onChange={handleCrossTotal}
          valueLabelDisplay='auto'
          aria-labelledby='cross-total-game'
          min={0}
          max={10}
        />
      </div>

      <div className={classes.sliderContainer}>
        <Typography id='cross-success-slider' gutterBottom>
          Cross Succ/Game
        </Typography>
        <Slider
          value={filters.passingParameters.crossSuccess}
          onChange={handleCrossSuccess}
          valueLabelDisplay='auto'
          aria-labelledby='cross-success-game'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='pass-accuracy-slider' gutterBottom>
          Pass Accuracy/Game
        </Typography>
        <Slider
          value={filters.passingParameters.passAccuracy}
          onChange={handlePassAccuracy}
          valueLabelDisplay='auto'
          aria-labelledby='pass-accuracy-game'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='key-pass-slider' gutterBottom>
          Key Pass/Game
        </Typography>
        <Slider
          value={filters.passingParameters.keyPass}
          onChange={handleKeyPass}
          valueLabelDisplay='auto'
          aria-labelledby='key-pass-slider'
          min={0}
          max={10}
        />
      </div>



      <div className={classes.sliderContainer}>
        <Typography id='passes-total-slider' gutterBottom>
          Passes Total/Game
        </Typography>
        <Slider
          value={filters.passingParameters.passesTotal}
          onChange={handlePassesTotal}
          valueLabelDisplay='auto'
          aria-labelledby='passes-total-game'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='yellow-card-slider' gutterBottom>
          Yellow Card/Game
        </Typography>
        <Slider
          value={filters.passingParameters.yellowCard}
          onChange={handleYellowCard}
          valueLabelDisplay='auto'
          aria-labelledby='yellow-card-slider'
          min={0}
          max={10}
        />
      </div>

      <div className={classes.sliderContainer}>
        <Typography id='fouls-drawn-slider' gutterBottom>
          Fouls Drawn/Game
        </Typography>
        <Slider
          value={filters.passingParameters.foulsDrawn}
          onChange={handleFoulsDrawn}
          valueLabelDisplay='auto'
          aria-labelledby='fouls-drawn-slider'
          min={0}
          max={10}
        />
      </div>
    </Fragment>
  );
};


export default PassingParameters;
