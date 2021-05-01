import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props: CheckboxProps) => <Checkbox color='default' {...props} />);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedRight: false,
    checkedLeft: false,
    checkedEither: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedRight}
            onChange={handleChange}
            name='checkedRight'
            color='primary'
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
          />
        }
        label='Right'
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedLeft}
            onChange={handleChange}
            name='checkedLeft'
            color='primary'
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
          />
        }
        label='Left'
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedEither}
            onChange={handleChange}
            name='checkedEither'
            color='primary'
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
          />
        }
        label='Either'
      />
    </FormGroup>
  );
}
