import data from '../mockData/mockData1';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import { FunctionComponent } from 'react';
// import { ScatterPlot, ScatterSeries, ScatterPoint } from 'reaviz';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(45),
//       height: theme.spacing(40),
//     },
//     padding: 5,
//   },
//   paper: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     minWidth: '95%',
//   },
// }));

// const MyScatter: FunctionComponent = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper elevation={3} className={classes.paper}>
//         <ScatterPlot
//           height={400}
//           width={750}
//           data={[
//             { key: new Date('11/29/2019'), data: 13 },
//             { key: new Date('11/30/2019'), data: 13 },
//             { key: new Date('12/1/2019'), data: 13 },
//           ]}
//           series={
//             <ScatterSeries
//               point={
//                 <ScatterPoint
//                   symbol={() => {
//                     const d = symbol().type(symbolStar).size(175)();

//                     return (
//                       <path
//                         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//                         d={d!}
//                         style={{
//                           fill: 'lime',
//                           stroke: 'purple',
//                           strokeWidth: 1.5,
//                         }}
//                       />
//                     );
//                   }}
//                 />
//               }
//             />
//           }
//         />
//       </Paper>
//     </div>
//   );
// };

// export default MyScatter;
