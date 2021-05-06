import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import data from '../mockData/mockData1';
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
      width: theme.spacing(45),
      height: theme.spacing(40),
    },
    padding:5
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    minWidth:"95%"
  },
}));

const ScatterPlot2: FunctionComponent = () => {
  const classes = useStyles();


  
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <ResponsiveScatterPlot
          data={data}
          margin={{ top: 35, right: 35, bottom: 60, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          xFormat={function (e) {
            return e + ' kg';
          }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          yFormat={function (e) {
            return e + ' cm';
          }}
          colors={['#B73225']}
          blendMode='multiply'
          axisTop={null}
          nodeSize={6}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Shots Total/Game',
            legendPosition: 'middle',
            legendOffset: 40,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ShotsOnTarget',
            legendPosition: 'middle',
            legendOffset: -50,
          }}
          legends={[]}
          // renderNode={CustomNode}
          tooltip={() => (
            <div
              style={{
                color: 'white',
                background: '#333',
                padding: '12px 16px',
              }}
            >
              <strong>Scatter 2</strong>
              <br />
              {`player: abcd`}
              <br />
              {`Flag: y`}
              <br />
              {`Shots/Game: 0,31`}
              <br />
              {`ShoutsOnTarget: 2`}
              <br />
              {`First Team: 40`}
              <br />
              {`RankShotspergame: 30`}
              <br />
              {`rating: 50`}
              <br />
              {`Age: 20`}
              <br />
              {`appearances: 10`}
              <br />
              {`First Position: M`}
              <br />
              {`Pace: 14`}
              <br />
              {`Acceleration: 12`}
            </div>
          )}
        />
      </Paper>
    </div>
  );
};

export default ScatterPlot2;
