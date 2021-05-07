import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  ScatterSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
// import { Browser } from '@syncfusion/ej2-base';
import { scatterData } from '../mockData/scatter-data';
import Paper from '@material-ui/core/Paper';
import { FunctionComponent } from 'react';
import makeStyles from '../makeStyles';

const ScatterPlot8: FunctionComponent = () => {
  const classes = makeStyles();

  return (
    <div className={classes.scatterRoot}>
      <Paper elevation={3} className={classes.scatterPaper}>
        <ChartComponent
          id='charts'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%', 
            margin:10            
          }}
          primaryXAxis={{
            minimum: 100,
            maximum: 230,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            title: 'Assist/Game',
          }}
          primaryYAxis={{
            majorTickLines: {
              width: 0,
            },
            minimum: 50,
            maximum: 80,
            lineStyle: {
              width: 0,
            },
            title: 'Goal/Game',
            rangePadding: 'None',
          }}
          title='Goal vs Assist'
          tooltip={{
            enable: true,
            format:
              'Goal: <b>${point.x} lbs</b> <br/> Assist: <b>${point.y}" </b>' +
              'player: abcd <br /> Shots/Game: 0,31  <br />' +
              'ShoutsOnTarget: 2',
          }}
          chartArea={{ border: { width: 0 } }}
        >
          <Inject services={[ScatterSeries, Legend, Tooltip, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={scatterData.getMaleData}
              width={2}
              xName='x'
              yName='y'
              name='goal'
              type='Scatter'
              opacity={0.6}
              
              marker={{ visible: false, width: 10, height: 10, shape: 'Circle' }}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={scatterData.getFemaleData}
              xName='x'
              yName='y'
              name='assist'
              type='Scatter'
              opacity={0.6}
              marker={{ visible: false, width: 12, height: 12, shape: 'Diamond' }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </Paper>
    </div>
  );
};

export default ScatterPlot8;
