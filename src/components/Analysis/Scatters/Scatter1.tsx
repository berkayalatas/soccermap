import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import data from '../mockData/mockData1';
import makeStyles from '../makeStyles';
import Paper from '@material-ui/core/Paper';
import { FunctionComponent } from 'react';

// const CustomNode = ({
//   node,
//   x,
//   y,
//   size,
//   color,
//   blendMode,
//   onMouseEnter,
//   onMouseMove,
//   onMouseLeave,
//   onClick,
// }) => {
//   if (node.data.serieId === 'A') {
//     return (
//       <g transform={`translate(${x},${y})`}>
//         <circle
//           r={size / 2}
//           fill={color}
//           style={{ mixBlendMode: blendMode }}
//           onMouseEnter={onMouseEnter}
//           onMouseMove={onMouseMove}
//           onMouseLeave={onMouseLeave}
//           onClick={onClick}
//         />
//       </g>
//     );
//   }

//   if (node.data.serieId === 'B') {
//     return (
//       <g transform={`translate(${x},${y}) rotate(45)`}>
//         <rect
//           x={size * -0.5}
//           y={size * -0.5}
//           width={size}
//           height={size}
//           fill={color}
//           style={{ mixBlendMode: blendMode }}
//           onMouseEnter={onMouseEnter}
//           onMouseMove={onMouseMove}
//           onMouseLeave={onMouseLeave}
//           onClick={onClick}
//         />
//       </g>
//     );
//   }
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <rect
//         x={size * -0.5}
//         y={size * -0.5}
//         width={size}
//         height={size}
//         fill={color}
//         style={{ mixBlendMode: blendMode }}
//         onMouseEnter={onMouseEnter}
//         onMouseMove={onMouseMove}
//         onMouseLeave={onMouseLeave}
//         onClick={onClick}
//       />
//     </g>
//   );
// };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ScatterPlot1: FunctionComponent = () => {
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
          axisRight={null}
          animate={false}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Assist/Game',
            legendPosition: 'middle',
            legendOffset: 40,
          }}
          enableGridX={false}
          enableGridY={false}
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
          tooltip={() => (
            <div
              style={{
                color: 'white',
                background: '#333',
                padding: '12px 16px',
              }}
            >
              <strong>Scatter 1</strong>
              <br />
              {`player: abcd`}
              <br />
              {`Assist/Game: 0,31`}
              <br />
              {`First team: 2`}
              <br />
              {`RankGolpergame: 40`}
              <br />
              {`RankAssistpergame: 30`}
              <br />
              {`rating: 50`}
              <br />
              {`Age: 20`}
              <br />
              {`appearances: 10`}
              <br />
              {`First Position: M`}
              <br />
              {`Acceleration: 12`}
              <br />
              {`Pace: 14`}
            </div>
          )}
        />
      </Paper>
    </div>
  );
};

export default ScatterPlot1;
