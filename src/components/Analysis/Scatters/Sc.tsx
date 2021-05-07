import { ScatterPlot, ScatterSeries, ScatterPoint } from 'reaviz';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FunctionComponent } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      height: theme.spacing(40),
      width: theme.spacing(40),
    },
    padding: 5,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '95%',
  },
}));

const Sc: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <ScatterPlot
          height={300}
          width={400}
          data={[
            { key: new Date('11/29/2019'), data: 13 },
            { key: new Date('11/30/2019'), data: 5 },
            { key: new Date('12/1/2019'), data: 1 },
          ]}
          margins={20}
          series={
            <ScatterSeries
              point={
                <ScatterPoint color='rgba(45, 96, 232, .8)' size={5} />
              }
            />
          }
        />
      </Paper>
    </div>
  );
};

export default Sc;
