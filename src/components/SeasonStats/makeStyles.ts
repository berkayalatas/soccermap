import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

export default makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      color: 'rgba(0,0,0,0.6)',
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
  }),
);