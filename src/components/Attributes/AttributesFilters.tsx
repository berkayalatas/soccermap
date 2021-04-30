import { Fragment, FunctionComponent, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import makeStyles from './makeStyles';
import CountryAndLeauge from './Filters/CountryAndLeauge';
import Position from './Filters/Position';
import TeamAndPlayer from './Filters/TeamAndPlayer';
import PhysicalParameters from './Filters/PhysicalParameters';
import PassingParameters from './Filters/PassingParameters';
import AttackingParameters from './Filters/AttackingParameters';
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion';
import { Filters } from './Filters/interfaces';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

const AttributesFilters: FunctionComponent = () => {
  const classes = makeStyles();
  const defaultFilters: Filters = {
    country: '',
    leauges: [],
    positions: [],
    team: '',
    players: [],
    physicalParameters: {
      acceleration: [1, 20],
      pace: [1, 20],
      jumping: [1, 20],
      agility: [1, 20],
      strength: [1, 20],
      stamina: [1, 20],
      balance: [1, 20],
    },
    passingParameters: {
      passing: [1, 20],
      technique: [1, 20],
      vision: [1, 20],
      workrate: [1, 20],
      freekick: [1, 20],
      crossing: [1, 20],
      dribbling: [1, 20],
    },
    attackingParameters: {
      finishing: [1, 20],
      anticipation: [1, 20],
      flair: [1, 20],
      firstTouch: [1, 20],
      determination: [1, 20],
      offTheBall: [1, 20],
      longShot: [1, 19],
    },
  };

  interface State {
    height: string;
    height2: string;
    disabledEither: boolean;
    disabledLeft: boolean;
    disabledRight: boolean;
  }

  const [values, setValues] = useState<State>({
    height: '',
    height2: '',
    disabledEither: false,
    disabledLeft: false,
    disabledRight: false,
  });

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [expanded, setExpanded] = useState('country-and-leauge');

  const handleAccordion = (panel: string) => (
    event: React.ChangeEvent<unknown>,
    newExpanded: boolean,
  ) => {
    setExpanded(newExpanded ? panel : '');
  };

  const [value, setValue] = useState('');

  const handleAgeGroups = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleHeight = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleHeight2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Fragment>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'country-and-leauge'}
        onChange={handleAccordion('country-and-leauge')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='country-and-leauge'
          id='country-and-leauge'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Country and Leauge</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CountryAndLeauge filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'position'}
        onChange={handleAccordion('position')}
      >
        <AccordionSummary
          className={classes.accordionItem}
          expandIcon={<ExpandMore />}
          aria-controls='position'
          id='position'
        >
          <Typography className={classes.heading}>Position</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Position filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'team-and-player'}
        onChange={handleAccordion('team-and-player')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='team-and-player'
          id='team-and-player'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Team and Player</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TeamAndPlayer filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'foot'}
        onChange={handleAccordion('foot')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='foot'
          id='foot'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Foot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component='fieldset'>
            <FormGroup aria-label='position' row>
              <FormControlLabel
                value='start'
                control={<Checkbox color='secondary' />}
                label='Right'
                labelPlacement='start'
              />
              <FormControlLabel
                value='start'
                control={<Checkbox color='secondary' />}
                label='Left'
                labelPlacement='start'
              />
              <FormControlLabel
                value='start'
                control={<Checkbox color='secondary' />}
                label='Either'
                labelPlacement='start'
              />
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'ageGroups'}
        onChange={handleAccordion('ageGroups')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='ageGroups'
          id='ageGroups'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Age Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component='fieldset'>
            <RadioGroup
              aria-label='ageGroups'
              name='ageGroups'
              value={value}
              onChange={handleAgeGroups}
            >
              <FormControlLabel value='17-19' control={<Radio />} label='17-19' />
              <FormControlLabel value='20-24' control={<Radio />} label='20-24' />
              <FormControlLabel value='25-29' control={<Radio />} label='25-29' />
              <FormControlLabel value='30-34' control={<Radio />} label='30-34' />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'height'}
        onChange={handleAccordion('height')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='height'
          id='height'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Height</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'physical-parameters'}
        onChange={handleAccordion('physical-parameters')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='physical-parameters'
          id='physical-parameters'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Physical Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PhysicalParameters filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'passing-parameters'}
        onChange={handleAccordion('passing-parameters')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='passing-parameters'
          id='passing-parameters'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Passing Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PassingParameters filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'attacking-parameters'}
        onChange={handleAccordion('attacking-parameters')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='attacking-parameters'
          id='attacking-parameters'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Attacking Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AttackingParameters filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default AttributesFilters;
