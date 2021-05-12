import { Fragment } from 'react';
import makeStyles from '../makeStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RadioButtonsGroup() {
  const [year, setYear] = React.useState(150);

  const values = [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

  const handleYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as number);
  };
  const classes = makeStyles();

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label' style={{ color: '#fff' }}>
          Year
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={year}
          onChange={handleYear}
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
