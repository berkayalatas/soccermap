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
import makeStyles from '../makeStyles';
import { FiltersProps, SelectChangeEvent } from './interfaces';

const CountryAndLeauge: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  const handleCountryChange: SelectChangeEvent = (event) => {
    setFilters({
      ...filters,
      country: event.target.value as string,
      leauges: [],
    });
  };

  const handleLeaugeChange: SelectChangeEvent = (event) => {
    setFilters({
      ...filters,
      leauges: event.target.value as string[],
    });
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
          <MenuItem value={'Germany'}>Germany</MenuItem>
          <MenuItem value={'France'}>France</MenuItem>
          <MenuItem value={'Italy'}>Italy</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel id='leagues-select-label' style={{ color: 'white' }}>
          Leauges
        </InputLabel>
        <Select
          labelId='leagues-select-label'
          label='Leauges'
          id='leauge-multi-select'
          multiple
          value={filters.leauges}
          onChange={handleLeaugeChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          <MenuItem value={'Süper Lig'}>
            <Checkbox
              size='small'
              color='primary'
              checked={filters.leauges.indexOf('Süper Lig') > -1}
            />
            <ListItemText primary={'Süper Lig'} />
          </MenuItem>
          <MenuItem value={'TFF 1. Lig'}>
            <Checkbox
              size='small'
              color='primary'
              checked={filters.leauges.indexOf('TFF 1. Lig') > -1}
            />
            <ListItemText primary={'TFF 1. Lig'} />
          </MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default CountryAndLeauge;
