import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

export const Accordion = withStyles(({/*theme*/}) => ({
  root: {
    border: '3px solid rgba(0, 0, 0, 0.2)',
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
    transition: 'all 0.3s',
    backgroundColor:"#484848",
  },
  expanded: {
    background: '#878787',
  },
}))(MuiAccordion);

export const AccordionSummary = withStyles(({/*theme*/}) => ({
  root: {
    marginBottom: -1,
    '&$expanded': {
      minHeight: 0,
    },
    backgroundColor:"BEBEBE",
 
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      color:"#ffff"
    },
    
  },
  expanded: {
    // backgroundColor:"#484848"
    color:"#ffff"
  },
}))(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    display: 'block',
    padding: theme.spacing(2),
    paddingTop: 0,

  },
}))(MuiAccordionDetails);
