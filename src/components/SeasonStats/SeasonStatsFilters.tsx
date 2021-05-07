import { Fragment, FunctionComponent, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import makeStyles from './makeStyles';
import CountryAndLeauge from './Filters/CountryAndLeauge';
import Position from './Filters/Position';
import TeamAndPlayer from './Filters/TeamAndPlayer';
import AttackingParamters from './Filters/AttackingParameters';
import PassingParameters from './Filters/PassingParameters';
import DefensiveParamters from './Filters/DefensiveParameters';
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion';
import { Filters } from './Filters/interfaces';
import countryAndLeague from '../../assets/icons/countryAndLeague.svg';
import position from '../../assets/icons/position.svg';
import teamAndPlayer from '../../assets/icons/teamAndPlayer.svg';
import attackingParameters from '../../assets/icons/attackingParameters.svg';
import passingParameters from '../../assets/icons/passingParameters.svg';
import defensiveParameters from '../../assets/icons/defensiveParameters.svg';

const SeasonStatsFilters: FunctionComponent = () => {
  const classes = makeStyles();
  const defaultFilters: Filters = {
    country: '',
    leauges: [],
    positions: [],
    team: '',
    players: [],
    attackingParameters: {
      goal: [0, 5],
      assist: [1, 5],
      dribbleAttempts: [1, 5],
      dribbleSuccess: [1, 5],
      dribblePast: [1, 5],
      shotTotal: [1, 5],
      shotOnTarget: [1, 5],
    },
    defensiveParameters: {
      blocks: [1, 6],
      duelsTotal: [1, 6],
      duelsWon: [1, 6],
      foulsCommited: [1, 6],
      interceptions: [1, 6],
      saves: [1, 6],
      tackles: [1, 6],
    },
    passingParameters: {
      crossSuccess: [1, 6],
      crossTotal: [1, 6],
      foulsDrawn: [1, 6],
      keyPass: [1, 6],
      passAccuracy: [1, 6],
      passesTotal: [1, 6],
      yellowCard: [1, 6],
    },
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
            Country and League
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
          <img src={position} alt='attackIcon' className={classes.icons} />
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
          <img src={teamAndPlayer} alt='attackIcon' className={classes.icons} />
          <Typography className={classes.heading}>Team and Player</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TeamAndPlayer filters={filters} setFilters={setFilters} />
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
          <img src={attackingParameters} alt='attackIcon' className={classes.icons} />
          <Typography className={classes.heading}>Attacking Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AttackingParamters filters={filters} setFilters={setFilters} />
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
          <img src={passingParameters} alt='attackIcon' className={classes.icons} />
          <Typography className={classes.heading}>Passing Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PassingParameters filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'defensive-parameters'}
        onChange={handleAccordion('defensive-parameters')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='defensive-parameters'
          id='defensive-parameters'
          className={classes.accordionItem}
        >
          <img src={defensiveParameters} alt='attackIcon' className={classes.icons} />
          <Typography className={classes.heading}>Defensive Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DefensiveParamters filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default SeasonStatsFilters;
