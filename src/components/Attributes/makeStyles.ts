import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

export default makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
      color: '#f1f1f1',
      fontFamily:"'Poppins', 'sans-serif'",
    },
    title:{
      fontFamily: "'Poppins', 'sans-serif'",
      fontSize: 40
    },
    select: {
      width: '100%',
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
    sliderContainer: {
      width: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    accordionItem : {
      margin:8
    },
    contentShift: {
      marginTop: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    sliderTitle : {
      color: "#f6f6f6"
    }
  }),
);
