import { Fragment, FunctionComponent, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import makeStyles from './makeStyles';
import CountryAndLeauge from './Filters/CountryAndLeauge';
import Position from './Filters/Position';
import TeamAndPlayer from './Filters/TeamAndPlayer';
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion';
import { Filters } from './Filters/interfaces';
import countryAndLeague from '../../assets/icons/countryAndLeague.svg';
import position from '../../assets/icons/position.svg';
import teamAndPlayer from '../../assets/icons/teamAndPlayer.svg';
import PositionGroups from './Filters/PositionGroups';
import Year from './Filters/Year'

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
          <Typography className={classes.heading}>
            <img src={countryAndLeague} alt='attackIcon' className={classes.icons} />
            Country and Leauge
          </Typography>
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
          <Typography className={classes.heading}>
            <img src={position} alt='attackIcon' className={classes.icons} />
            Position
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Position filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'position-groups'}
        onChange={handleAccordion('position-groups')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='position-groups'
          id='position-groups'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Position(Groups)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PositionGroups />
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
          <Typography className={classes.heading}>
            <img src={teamAndPlayer} alt='attackIcon' className={classes.icons} />
            Team and Player
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TeamAndPlayer filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'year-birthday'}
        onChange={handleAccordion('year-birthday')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='year-birthday'
          id='year-birthday'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>Year(Birthday)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Year />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default AnalysisFilters;
