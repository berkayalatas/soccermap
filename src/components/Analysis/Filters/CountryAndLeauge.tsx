import {
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core';
import config from '../../../config.json';
import { Fragment, useState } from 'react';
import makeStyles from '../makeStyles';
import { SelectChangeEvent } from './interfaces';
import { API } from 'aws-amplify';

const CountryAndLeauge = ({ filters, setFilters, data, setData }: any) => {
  const classes = makeStyles();
  const [leaguesList, setLeaguesList] = useState(data.leagues);

  const handleCountryChange: SelectChangeEvent = (event) => {
    const value = event.target.value;

    setFilters({ ...filters, country: value as string, leauges: [] });
    setLeaguesList(data.leagues.filter((o: any) => o.country === value));
  };

  const handleLeaugeChange: SelectChangeEvent = async (event) => {
    const value = event.target.value;
    const newFilters = { ...filters, leauges: value as string[] };
    setFilters(newFilters);

    const { API_NAME, paths } = config.api;
    const { GET_TEAMS } = paths;

    let teamsList: any = [];

    await Promise.all(
      newFilters.leauges.map(async (leagueId: number) => {
        const request = { queryStringParameters: { leagueId } };
        const response = await API.get(API_NAME, GET_TEAMS, request);
        teamsList = [...teamsList, ...response.teams];
      }),
    );

    setData({ ...data, teams: teamsList });
  };

  return (
    <Fragment>
      <FormControl className={classes.select}>
        <InputLabel id='country-select-label' style={{ color: 'white' }}>
          Country
        </InputLabel>
        <Select
          labelId='country-select-label'
          label='Country'
          id='country-select'
          value={filters.country}
          onChange={handleCountryChange}
        >
          {data.countries &&
            data.countries.map((country: any, index: number) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel id='leagues-select-label' style={{ color: 'white' }}>
          Leagues
        </InputLabel>
        <Select
          labelId='leagues-select-label'
          label='Leauges'
          id='leauge-multi-select'
          multiple
          value={filters.leauges}
          onChange={handleLeaugeChange}
          input={<Input />}
          renderValue={(_v) => ''}
          //renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {leaguesList &&
            leaguesList.map(({ leagueId, name }: any) => (
              <MenuItem key={leagueId} value={leagueId}>
                <Checkbox
                  size='small'
                  color='primary'
                  checked={filters.leauges.indexOf(leagueId) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default CountryAndLeauge;
