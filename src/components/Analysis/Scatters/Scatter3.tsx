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
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '95%',
  },
}));

const ScatterPlot3: FunctionComponent = () => {
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
          colors={['red']}
          blendMode='multiply'
          axisTop={null}
          nodeSize={6}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Successful Dribblings/Game',
            legendPosition: 'middle',
            legendOffset: 40,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Goal/Game',
            legendPosition: 'middle',
            legendOffset: -50,
          }}
          legends={[]}
          // renderNode={CustomNode}
          tooltip={({}) => (
            <div
              style={{
                color: 'white',
                background: '#333',
                padding: '12px 16px',
              }}
            >
              <strong>Scatter 3</strong>
              <br />
              {`player: abcd`}
              <br />
              {`Flag: y`}
              <br />
              {`Successful Dribbling/Game: 0,31`}
              <br />
              {`Goal/Game: 2`}
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
              <br />
              {`RankGolpergame: 12`}
               <br />
              {`RankDribbsuccspergame: 12`}
            </div>
          )}
        />
      </Paper>
    </div>
  );
};

export default ScatterPlot3;
