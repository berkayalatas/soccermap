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
import Foot from './Filters/Foot';
import AgeGroups from './Filters/AgeGroups';
import Height from './Filters/Height';
import countryAndLeague from '../../assets/icons/countryAndLeague.svg';
import position from '../../assets/icons/position.svg';
import teamAndPlayer from '../../assets/icons/teamAndPlayer.svg';
import foot from '../../assets/icons/foot.svg';
import ageGroups from '../../assets/icons/ageGroups.svg';
import height from '../../assets/icons/height.svg';
import physicalParameters from '../../assets/icons/physicalParameters.svg';
import passingParameters from '../../assets/icons/passingParameters.svg';
import attackingParameters from '../../assets/icons/attackingParameters.svg';

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

  // interface State {
  //   height: string;
  //   height2: string;
  //   disabledEither: boolean;
  //   disabledLeft: boolean;
  //   disabledRight: boolean;
  // }

  // const [values, setValues] = useState<State>({
  //   height: '',
  //   height2: '',
  //   disabledEither: false,
  //   disabledLeft: false,
  //   disabledRight: false,
  // });

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
        expanded={expanded === 'foot'}
        onChange={handleAccordion('foot')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='foot'
          id='foot'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>
            <img src={foot} alt='attackIcon' className={classes.icons} />
            Foot
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Foot />
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
          <Typography className={classes.heading}>
            <img src={ageGroups} alt='attackIcon' className={classes.icons} />
            Age Groups
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AgeGroups />
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
            <img src={height} alt='attackIcon' className={classes.icons} />
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
        expanded={expanded === 'physical-parameters'}
        onChange={handleAccordion('physical-parameters')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='physical-parameters'
          id='physical-parameters'
          className={classes.accordionItem}
        >
          <Typography className={classes.heading}>
            <img src={physicalParameters} alt='attackIcon' className={classes.icons} />
            Physical Parameters
          </Typography>
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
          <Typography className={classes.heading}>
            <img src={passingParameters} alt='attackIcon' className={classes.icons} />
            Passing Parameters
          </Typography>
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
          <Typography className={classes.heading}>
            <img src={attackingParameters} alt='attackIcon' className={classes.icons} />
            Attacking Parameters
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AttackingParameters filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default AttributesFilters;
