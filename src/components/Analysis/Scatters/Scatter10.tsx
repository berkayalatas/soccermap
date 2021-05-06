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
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '95%',
  },
}));

const ScatterPlot10: FunctionComponent = () => {
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
            colors={['#004E7C']}
            blendMode='multiply'
            axisTop={null}
            nodeSize={5}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'weight',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'size',
              legendPosition: 'middle',
              legendOffset: -50,
            }}
            legends={[]}
            // renderNode={CustomNode}
            tooltip={({ node }) => (
              <div
                style={{
                  color: "white",
                  background: '#333',
                  padding: '12px 16px',
                }}
              >
                <strong>`aaaaaaaaaaaa`</strong>
                <br />
                {`x: 1`}
                <br />
                {`y: 2`}
              </div>
            )}
          />
        </Paper>
      </div>
    );
  };
  
  export default ScatterPlot10;