import { Fragment, FunctionComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { FiltersProps } from './interfaces';
import makeStyles from '../makeStyles';

const DefensiveParameters: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  const handleBlocks = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        blocks: newValue as [number, number],
      },
    });
  };

  const handleInterceptions = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        interceptions: newValue as [number, number],
      },
    });
  };

  const handleDuelsTotal = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        duelsTotal: newValue as [number, number],
      },
    });
  };


  const handleDuelsWon = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        duelsWon: newValue as [number, number],
      },
    });
  };


  const handleTackles = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        tackles: newValue as [number, number],
      },
    });
  };


  const handleSaves = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        saves: newValue as [number, number],
      },
    });
  };



  const handleFoulsCommited = (event: unknown, newValue: number | number[]) => {
    setFilters({
      ...filters,
      defensiveParameters: {
        ...filters.defensiveParameters,
        foulsCommited: newValue as [number, number],
      },
    });
  };



  return (
    <Fragment>
      <div className={classes.sliderContainer}>
        <Typography id='cross-total-slider' gutterBottom>
          Blocks/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.blocks}
          onChange={handleBlocks}
          valueLabelDisplay='auto'
          aria-labelledby='blocks-game'
          min={0}
          max={10}
        />
      </div>

      <div className={classes.sliderContainer}>
        <Typography id='interceptions-slider' gutterBottom>
          Interceptions/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.interceptions}
          onChange={handleInterceptions}
          valueLabelDisplay='auto'
          aria-labelledby='interceptions-slider'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='duels-total-slider' gutterBottom>
          Duels Total/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.duelsTotal}
          onChange={handleDuelsTotal}
          valueLabelDisplay='auto'
          aria-labelledby='duels-total-slider'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='duels-won-slider' gutterBottom>
          Duels Won/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.duelsWon}
          onChange={handleDuelsWon}
          valueLabelDisplay='auto'
          aria-labelledby='duels-won-slider'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='tackles-slider' gutterBottom>
          Tackles/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.tackles}
          onChange={handleTackles}
          valueLabelDisplay='auto'
          aria-labelledby='tackles-slider'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='saves-slider' gutterBottom>
          Saves/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.saves}
          onChange={handleSaves}
          valueLabelDisplay='auto'
          aria-labelledby='saves-slider'
          min={0}
          max={10}
        />
      </div>


      <div className={classes.sliderContainer}>
        <Typography id='fouls-comm-slider' gutterBottom>
          Fouls Comm/Game
        </Typography>
        <Slider
          value={filters.defensiveParameters.foulsCommited}
          onChange={handleFoulsCommited}
          valueLabelDisplay='auto'
          aria-labelledby='fouls-comm-slider'
          min={0}
          max={10}
        />
      </div>



    </Fragment>
  );
};


export default DefensiveParameters;
