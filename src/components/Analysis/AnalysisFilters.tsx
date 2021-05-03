import { Fragment, FunctionComponent, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import makeStyles from './makeStyles';
import CountryAndLeauge from './Filters/CountryAndLeauge';
import Position from './Filters/Position';
import TeamAndPlayer from './Filters/TeamAndPlayer';
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion';
import { Filters } from './Filters/interfaces';
import attackingParameters from '../../assets/icons/attackingParameters.svg'

const AnalysisFilters: FunctionComponent = () => {
  const classes = makeStyles();
  const defaultFilters: Filters = {
    country: '',
    leauges: [],
    positions: [],
    team: '',
    players: [],
  };

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [expanded, setExpanded] = useState('');

  const handleAccordion = (panel: string) => (
    event: React.ChangeEvent<unknown>,
    newExpanded: boolean,
  ) => {
    setExpanded(newExpanded ? panel : '');
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
          {/* <img src={attackingParameters} alt="attackIcon" style={{color: '#fff' }} className={classes.icons}/> */}
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
    </Fragment>
  );
};

export default AnalysisFilters;
