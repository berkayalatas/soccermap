import { Fragment } from 'react';
import makeStyles from '../makeStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RadioButtonsGroup() {
  const [pace, setPace] = React.useState(0);

  const values = [1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0];

  const handlePace = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPace(event.target.value as number);
  };
  const classes = makeStyles();

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label' style={{ color: '#fff' }}>
          Pace
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={pace}
          onChange={handlePace}
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
