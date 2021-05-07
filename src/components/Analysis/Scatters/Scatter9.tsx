import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import data from '../mockData/mockData1';
import Paper from '@material-ui/core/Paper';
import { FunctionComponent } from 'react';
import makeStyles from '../makeStyles';

const ScatterPlot9: FunctionComponent = () => {
  const classes = makeStyles();

  return (
    <div className={classes.scatterRoot}>
      <Paper elevation={3} className={classes.scatterPaper}>
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
          colors={['#dc1703']}
          blendMode='multiply'
          axisTop={null}
          nodeSize={8}
          animate={false}
          axisRight={null}
          enableGridX={false}
          enableGridY={false}
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

export default ScatterPlot9;
