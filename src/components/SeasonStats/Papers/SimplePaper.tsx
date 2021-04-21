import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import paperData from '../mockData/paperData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paperTitle: {
      fontFamily: "'Poppins', 'sans-serif'",
    },
  }),
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Grid item>
      <div className={classes.root}>
        {paperData.map((paper, index) => (
          <Paper elevation={3} key={index}>
            <Grid container className={classes.paper}>
              <Grid item>
                <Typography variant='overline' className={classes.paperTitle}>
                  {paper.paperTitle}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h4' className={classes.paperTitle}>
                  {paper.paperData}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </div>
    </Grid>
  );
}
