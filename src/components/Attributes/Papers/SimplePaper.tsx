import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(14),
      },
      
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%"
    },
    paperTitle: {
      color: '#004E7C',
      fontFamily: "'Lato', 'sans-serif'",
    },
    paperData: {
      fontFamily: "'Lato', 'sans-serif'",
    },
  }),
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SimplePaper() {
  const classes = useStyles();
  const paperData = [
    {
      paperTitle: 'Acceleration',
      paperData: 12,
    },
    {
      paperTitle: 'Pace',
      paperData: 12,
    },
    {
      paperTitle: 'Jumping',
      paperData: 9,
    },
    {
      paperTitle: 'EU Nationality',
      paperData: 'No',
    },
  ];

  return (
    <div className={classes.root}>
      {paperData.map((paper, index) => (
        <Paper elevation={4} key={index} style={{ borderRadius: 15, width:'40%' }}>
          <Grid container className={classes.paper}>
            <Grid item>
              <Typography variant='overline' className={classes.paperTitle}>
                {paper.paperTitle}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h4' className={classes.paperData}>
                {paper.paperData}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Paper elevation={4} style={{ width: '200px', borderRadius: 15 }}>
        <Grid container style={{ justifyContent: 'center',alignItems:"center" }}>
          <Grid item>
            <Typography variant='overline' className={classes.paperTitle}>
              Expires Expires
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' className={classes.paperData}>
              27.04.2021
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
