import { Paper } from '@material-ui/core';
import {
  ScatterChart,
  Scatter,
  XAxis,
  Label,
  YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import makeStyles from '../makeStyles';
import data from '../mockData/scatter-data';

const CustomTooltip = (obj: any) => {
  const { active, payload } = obj;
  if (active && payload && payload.length) {
    // console.log(obj, payload);
    return (
      <Paper
        style={{
          backgroundColor: 'black',
          color: '#fff',
          padding: 10,
          fontFamily: "'Lato', 'sans-serif'",
        }}
      >
        <div className='custom-tooltip'>
          {/* <p className='label'>{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className='label'>{`${payload[1].name} : ${payload[0].value}`}</p> */}
          <p className='label'>{`Player:Zlatan Ibrahimović`}</p>
          <p className='label'>{`Rating : 5`}</p>
          <p className='label'>{`Passes/Game: 2`}</p>
          <p className='label'>{`Team : Besiktas`}</p>
          <p className='label'>{`Rank Succesful Dribbling per Game : 4`}</p>
          <p className='label'>{`Rank Duels Per Game : 2`}</p>
          <p className='label'>{`Rank Duels Won Per Game : 1`}</p>
          <p className='label'>{`Rank Intercept Per Game  : 33`}</p>
          <p className='label'>{`Rank Key Passes Per Game : 13`}</p>
          <p className='label'>{`Rank Dribbling Per Game : M`}</p>
          <p className='label'>{`Rating : 8`}</p>
          <p className='label'>{`Age : 28`}</p>
          <p className='label'>{`Apperances : 8`}</p>
          <p className='label'>{`Position : FM`}</p>
          <p className='label'>{`Acceleration : 8`}</p>
          <p className='label'>{`Pace : 10`}</p>
        </div>
      </Paper>
    );
  }
  return <div></div>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Scatter5() {
  const classes = makeStyles();
  // const demoUrl = 'https://codesandbox.io/s/scatter-chart-of-three-dimensions-w2cwd';

  return (
    <div className={classes.scatterRoot}>
      <Paper className={classes.scatterPaper}>
        <ResponsiveContainer width='100%' height='100%'>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 25,
              left: 15,
            }}
          >
            {/* <CartesianGrid /> */}
            <XAxis type='number' dataKey='x' name='Dribbles Success per Game'>
              <Label value='Dribbles Success per Game' offset={-15} position='insideBottom' />
            </XAxis>
            <YAxis offset={10} type='number' dataKey='y' name='Dribblings Att %'>
              <Label value='Dribblings Att %' angle={-90} position='insideLeft' />
            </YAxis>

            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={CustomTooltip} />
            <Scatter data={data} fill='#0047bf' shape='diamond' />
          </ScatterChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
}
