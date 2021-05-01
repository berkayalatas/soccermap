import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Fragment, useState } from 'react';
import makeStyles from '../makeStyles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RadioButtonsGroup() {
  interface State {
    height: string;
    height2: string;
  }

  const [values, setValues] = useState<State>({
    height: '',
    height2: '',
  });

  const handleHeight = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleHeight2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = makeStyles();
  return (
    <Fragment>
      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input
          id='standard-adornment-height'
          value={values.height}
          onChange={handleHeight('height')}
          endAdornment={<InputAdornment position='end'>cm</InputAdornment>}
          aria-describedby='standard-height-helper-text'
          inputProps={{
            'aria-label': 'height',
          }}
          placeholder='152'
        />
        {/* <FormHelperText id="standard-height-helper-text">Weight</FormHelperText> */}
      </FormControl>

      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input
          id='standard-adornment-height2'
          value={values.height2}
          onChange={handleHeight2('height2')}
          endAdornment={<InputAdornment position='end'>cm</InputAdornment>}
          aria-describedby='standard-height-helper-text'
          inputProps={{
            'aria-label': 'height',
          }}
          placeholder='208'
        />
        {/* <FormHelperText id="standard-height-helper-text">Weight</FormHelperText> */}
      </FormControl>
    </Fragment>
  );
}
