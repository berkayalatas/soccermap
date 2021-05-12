import {
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core';
import { API } from 'aws-amplify';
import { Fragment } from 'react';
import config from '../../../config.json';
import makeStyles from '../makeStyles';
import { SelectChangeEvent } from './interfaces';

const TeamAndPlayer = ({ filters, setFilters, data, setData }: any) => {
  const classes = makeStyles();

  const teamsList = data.teams;
  const playersList = data.players;
  console.log(playersList);

  const handleTeamChange: SelectChangeEvent = async (event) => {
    const value = event.target.value;
    setFilters({ ...filters, team: value as string, players: [] });

    const { API_NAME, paths } = config.api;
    const { GET_PLAYERS } = paths;
    const request = { queryStringParameters: { teamId: value } };

    try {
      const { players } = await API.get(API_NAME, GET_PLAYERS, request);
      setData({ ...data, players });
    } catch (err) {
      console.log(err, err.request);
    }
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
        <InputLabel id='team-select-label' style={{ color: '#fff' }}>
          Team
        </InputLabel>
        <Select
          labelId='team-select-label'
          label='Team'
          id='team-select'
          value={filters.team}
          onChange={handleTeamChange}
        >
          {teamsList &&
            teamsList.map(({ name, teamId }: any) => (
              <MenuItem key={teamId} value={teamId}>
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel id='players-select-label' style={{ color: '#fff' }}>
          Players
        </InputLabel>
        <Select
          labelId='players-select-label'
          label='Players'
          id='player-multi-select'
          multiple
          value={filters.players}
          onChange={handlePlayerChange}
          input={<Input />}
          renderValue={(_v) => ''}
          //renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {playersList &&
            playersList.map(({ name, playerId }: any) => (
              <MenuItem key={playerId} value={playerId}>
                <Checkbox
                  size='small'
                  color='primary'
                  checked={filters.players.indexOf(playerId) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default TeamAndPlayer;
