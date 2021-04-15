import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

export const Accordion = withStyles((theme) => ({
  root: {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 0,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '0',
    },
    transition: 'all 0.4s',
  },
  expanded: {
    background: 'rgba(194, 208, 255, 0.1)',
  },
}))(MuiAccordion);

export const AccordionSummary = withStyles((theme) => ({
  root: {
    marginBottom: -1,
    '&$expanded': {
      minHeight: 0,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    display: 'block',
    padding: theme.spacing(2),
    paddingTop: 0,
  },
}))(MuiAccordionDetails);
