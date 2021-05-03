import { Fragment } from 'react';
import makeStyles from '../makeStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RadioButtonsGroup() {
  const [height, setHeight] = React.useState(150);

  const values = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210];

  const handleHeight = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHeight(event.target.value as number);
  };
  const classes = makeStyles();

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label' style={{ color: '#fff' }}>
          Height
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={height}
          onChange={handleHeight}
          placeholder="cm"
        >
          {values.map( (value, index)=> (
            <MenuItem value={value} key={index} >{value}</MenuItem>
          ))}        
        </Select>
      </FormControl>
    </Fragment>
  );
}
