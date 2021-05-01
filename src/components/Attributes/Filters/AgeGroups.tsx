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
        <FormControlLabel value='17-19' control={<Radio />} label='17-19' />
        <FormControlLabel value='20-24' control={<Radio />} label='20-24' />
        <FormControlLabel value='25-29' control={<Radio />} label='25-29' />
        <FormControlLabel value='30-34' control={<Radio />} label='30-34' />
      </RadioGroup>
    </FormControl>
  );
}
