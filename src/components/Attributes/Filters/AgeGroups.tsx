import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('');

  const handleAgeGroups = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component='fieldset'>
      <RadioGroup aria-label='ageGroups' name='ageGroups' value={value} onChange={handleAgeGroups}>
        <FormControlLabel
          style={{ color: '#fff' }}
          value='17-19'
          control={<Radio color='primary' />}
          label='17-19'
        />
        <FormControlLabel
          style={{ color: '#fff' }}
          value='20-24'
          control={<Radio color='primary' />}
          label='20-24'
        />
        <FormControlLabel
          style={{ color: '#fff' }}
          value='25-29'
          control={<Radio color='primary' />}
          label='25-29'
        />
        <FormControlLabel
          style={{ color: '#fff' }}
          value='30-34'
          control={<Radio color='primary' />}
          label='30-34'
        />
      </RadioGroup>
    </FormControl>
  );
}
