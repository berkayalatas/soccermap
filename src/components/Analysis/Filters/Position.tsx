import { FunctionComponent } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  Input,
} from '@material-ui/core';
import { FiltersProps, SelectChangeEvent } from './interfaces';
import makeStyles from '../makeStyles';

const Position: FunctionComponent<FiltersProps> = ({ filters, setFilters }) => {
  const classes = makeStyles();

  const handleChange: SelectChangeEvent = (event) => {
    setFilters({
      ...filters,
      positions: event.target.value as string[],
    });
  };

  return (
    <FormControl className={classes.select}>
      <InputLabel id='position-select-label' style={{ color: '#fff' }}>Positions</InputLabel>
      <Select
        labelId='position-select-label'
        label='Positions'
        id='position-multi-select'
        multiple
        value={filters.positions}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(', ')}
      >
        <MenuItem value={'Forward'}>
          <Checkbox size='small'  color="primary" checked={filters.positions.indexOf('Forward') > -1} />
          <ListItemText primary={'Forward'} />
        </MenuItem>
        <MenuItem value={'Defense'}>
          <Checkbox size='small'  color="primary" checked={filters.positions.indexOf('Defense') > -1} />
          <ListItemText primary={'Defense'} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Position;
