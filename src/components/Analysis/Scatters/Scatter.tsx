import Paper from '@material-ui/core/Paper';
import { FunctionComponent } from 'react';
import { VictoryChart, VictoryVoronoiContainer, VictoryScatter } from 'victory';
import makeStyles from '../makeStyles';

const ScatterPlot3: FunctionComponent = () => {
  const classes = makeStyles();

  return (
    <div className={classes.scatterRoot}>
      <Paper elevation={3} className={classes.scatterPaper}>
        <VictoryChart
          domain={{ y: [0, 100] }}
          containerComponent={
            <VictoryVoronoiContainer
              mouseFollowTooltips
              voronoiDimension='x'
              labels={({ datum }) =>
                `y: ${datum.y}
                Player:X
              flag:Y
              age:40,
              pace:26,
              rating:256
              Goal:2
              First Team : asv
              `
              }
            />
          }
        >
          <VictoryScatter
            style={{ data: { fill: 'red' }, labels: { fill: 'red' } }}
            symbol={({ datum }) => (datum.y > 3 ? 'triangleUp' : 'triangleDown')}
            size={6}
            data={[
              { x: 0, y: 24 },
              { x: 20, y: 32 },
              { x: 40, y: 40 },
              { x: 60, y: 50 },
              { x: 20, y: 20 },
              { x: 40, y: 30 },
              { x: 64, y: 4 },
              { x: 87, y: 52 },
              { x: 57, y: 20 },
              { x: 44, y: 30 },
              { x: 34, y: 40 },
              { x: 62, y: 55 },
              { x: 52, y: 27 },
              { x: 90, y: 34 },
              { x: 22, y: 42 },
              { x: 59, y: 52 },
            ]}
          />
        </VictoryChart>
      </Paper>
    </div>
  );
};

export default ScatterPlot3;
