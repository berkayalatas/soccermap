import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { API } from 'aws-amplify';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import ageGroups from '../../assets/icons/ageGroups.svg';
import countryAndLeague from '../../assets/icons/countryAndLeague.svg';
import goals from '../../assets/icons/goals.svg';
import height from '../../assets/icons/height.svg';
import minutes from '../../assets/icons/minutes.svg';
import position from '../../assets/icons/position.svg';
import positionGroups from '../../assets/icons/positionGroups.svg';
import teamAndPlayer from '../../assets/icons/teamAndPlayer.svg';
import config from '../../config.json';
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion';
import { defaultPositionGroups, defaultPositions } from './defaultData';
import Age from './Filters/Age';
import CountryAndLeauge from './Filters/CountryAndLeauge';
import GoalPerGame from './Filters/GoalPerGame';
import Height from './Filters/Height';
import Minutes from './Filters/Minutes';
import Position from './Filters/Position';
import PositionGroups from './Filters/PositionGroups';
import TeamAndPlayer from './Filters/TeamAndPlayer';
import makeStyles from './makeStyles';

const AnalysisFilters: FunctionComponent = () => {
  const classes = makeStyles();
  const defaultFilters = {
    country: '',
    leauges: [],
    positions: [],
    team: '',
    players: [],
    heightParameters: { height: [150, 250] },
    ageParameters: { age: [10, 100] },
    minutesParameters: { minutes: [0, 90] },
    goalParameters: { goalPerGame: [0, 20] },
  };

  const defaultData = {
    countries: [],
    leagues: [],
    positionGroups: defaultPositionGroups,
    positions: defaultPositions,
    teams: [],
    players: [],
  };

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      const { API_NAME, paths } = config.api;
      const { POPULATE_COUNTRIES_LEAGUES } = paths;
      const request = {};

      try {
        const response = await API.get(API_NAME, POPULATE_COUNTRIES_LEAGUES, request);
        console.log(response);

        if (response && response.countries) {
          const tmpCountries: any = [];
          const tmpLeagues: any = [];

          response.countries.forEach((country: any) => {
            tmpCountries.push(country.name);
            country.leagues.forEach((league: any) => {
              tmpLeagues.push({
                name: league.name,
                leagueId: league.leagueId,
                country: country.name,
              });
            });
          });

          console.log({ ...data, countries: tmpCountries, leagues: tmpLeagues });
          setData({ ...data, countries: tmpCountries, leagues: tmpLeagues });
        }
      } catch (err) {
        console.log(err, err.request);
      }
    })();
  }, []);

  const [filters, setFilters] = useState(defaultFilters);
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
          <CountryAndLeauge
            filters={filters}
            setFilters={setFilters}
            data={data}
            setData={setData}
          />
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
          <TeamAndPlayer filters={filters} setFilters={setFilters} data={data} setData={setData} />
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
            Age
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Age filters={filters} setFilters={setFilters} />
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
          <Minutes filters={filters} setFilters={setFilters} />
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
          <GoalPerGame filters={filters} setFilters={setFilters} />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default AnalysisFilters;
