import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  Input,
} from '@material-ui/core';
import { Fragment, FunctionComponent } from 'react';
import { FiltersProps, SelectChangeEvent } from './interfaces';
import makeStyles from '../makeStyles';

const TeamAndPlayer: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  const handleTeamChange: SelectChangeEvent = (event) => {
    setFilters({
      ...filters,
      team: event.target.value as string,
      players: [],
    });
  };

  const handlePlayerChange: SelectChangeEvent = (event) => {
    setFilters({
      ...filters,
      players: event.target.value as string[],
    });
  };

  return (
    <Fragment>
      <FormControl className={classes.select}>
        <InputLabel id='team-select-label'>Team</InputLabel>
        <Select
          labelId='team-select-label'
          label='Team'
          id='team-select'
          value={filters.team}
          onChange={handleTeamChange}
        >
          <MenuItem value={'Besiktas'}>Besiktas</MenuItem>
          <MenuItem value={'Galatasaray'}>Galatasaray</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel id='players-select-label'>Players</InputLabel>
        <Select
          labelId='players-select-label'
          label='Players'
          id='player-multi-select'
          multiple
          value={filters.players}
          onChange={handlePlayerChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          <MenuItem value={'Hakan Çalhanoğlu'}>
            <Checkbox size='small' checked={filters.players.indexOf('Hakan Çalhanoğlu') > -1} />
            <ListItemText primary={'Hakan Çalhanoğlu'} />
          </MenuItem>
          <MenuItem value={'Cenk Tosun'}>
            <Checkbox size='small' checked={filters.players.indexOf('Cenk Tosun') > -1} />
            <ListItemText primary={'Cenk Tosun'} />
          </MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default TeamAndPlayer;
