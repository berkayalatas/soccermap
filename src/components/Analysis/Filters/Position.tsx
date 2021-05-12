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
import { defaultPositions } from '../defaultData';

const Position = ({ filters, setFilters }: any) => {
  const classes = makeStyles();
  const positionsList = defaultPositions;

  const handleChange: SelectChangeEvent = (event) => {
    setFilters({ ...filters, positions: event.target.value as string[] });
  };

  return (
    <FormControl className={classes.select}>
      <InputLabel id='position-select-label' style={{ color: '#fff' }}>
        Positions
      </InputLabel>
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
        {positionsList &&
          positionsList.map((p, index) => (
            <MenuItem key={index} value={p}>
              <Checkbox size='small' color='primary' checked={filters.positions.indexOf(p) > -1} />
              <ListItemText primary={p} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Position;
