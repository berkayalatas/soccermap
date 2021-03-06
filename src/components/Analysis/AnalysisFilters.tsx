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
import Year from './Filters/Year';
import positionGroups from '../../assets/icons/positionGroups.svg';
import ageGroups from '../../assets/icons/ageGroups.svg';
import Height from './Filters/Height';
import height from '../../assets/icons/height.svg';
import Pace from './Filters/Pace';
import pace from '../../assets/icons/pace.svg';
import minutes from '../../assets/icons/minutes.svg'
import goals from '../../assets/icons/goals.svg'
import Minutes from './Filters/Minutes'
import GoalPerGame from './Filters/GoalPerGame'

const AnalysisFilters: FunctionComponent = () => {
  const classes = makeStyles();
  const defaultFilters: Filters = {
    country: '',
    leauges: [],
    positions: [],
    team: '',
    players: [],
    minutesParameters: {
      minutes: [0, 20],
    },
    goalParameters: {
      goalPerGame: [0, 20],
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
            <img src={countryAndLeague} alt='countryAndLeague' className={classes.icons} />
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
          <Typography className={classes.heading}>
            <img src={position} alt='Positionc Icon' className={classes.icons} />
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
          <Typography className={classes.heading}>
            <img src={positionGroups} alt='positionGroups' className={classes.icons} />
            Position(Groups)
          </Typography>
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
            <img src={teamAndPlayer} alt='Team' className={classes.icons} />
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
          <Typography className={classes.heading}>
            <img src={ageGroups} alt='year' className={classes.icons} />
            Year(Birthday)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Year />
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
          <Typography className={classes.heading}>
            <img src={height} alt='heightIcon' className={classes.icons} />
            Height
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Height />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'pace'}
        onChange={handleAccordion('pace')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='pace'
          id='pace'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>
            <img src={pace} alt='paceIcon' className={classes.icons} />
            Pace
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Pace />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'minutes'}
        onChange={handleAccordion('minutes')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='minutes'
          id='minutes'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>
            <img src={minutes} alt='minutesIcon' className={classes.icons} />
            Minutes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Minutes filters={filters} setFilters={setFilters}/>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        expanded={expanded === 'goalPerGame'}
        onChange={handleAccordion('goalPerGame')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='goalPerGame'
          id='goalPerGame'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>
            <img src={goals} alt='goalIcon' className={classes.icons} />
            Goal Per Game
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GoalPerGame filters={filters} setFilters={setFilters}/>
        </AccordionDetails>
      </Accordion>

    </Fragment>
  );
};

export default AnalysisFilters;
