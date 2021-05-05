import { ResponsiveChoropleth } from '@nivo/geo';
import mapData from './datas/mapData';
import countries from './datas/world_countries.json';
import Paper from '@material-ui/core/Paper';
import { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(50),
    },
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
  },
}));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyResponsiveChoropleth: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <ResponsiveChoropleth
          data={mapData}
          features={countries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors='OrRd'
          domain={[0, 1000000]}
          unknownColor='#666666'
          label='properties.name'
          valueFormat='.2s'
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[-8, 0, 0]}
          enableGraticule={true}
          graticuleLineWidth={1}
          graticuleLineColor='#dddddd'
          borderWidth={1}
          borderColor='#152538'
          // legends={[
          //   {
          //     anchor: 'bottom-left',
          //     direction: 'column',
          //     justify: false,
          //     translateX: 61,
          //     translateY: -63,
          //     itemsSpacing: 1,
          //     itemWidth: 94,
          //     itemHeight: 17,
          //     itemDirection: 'left-to-right',
          //     itemTextColor: '#444444',
          //     itemOpacity: 0.85,
          //     symbolSize: 17,
          //     effects: [
          //       {
          //         on: 'hover',
          //         style: {
          //           itemTextColor: '#000000',
          //           itemOpacity: 1,
          //         },
          //       },
          //     ],
          //   },
          // ]}
        />
      </Paper>
    </div>
  );
};

export default MyResponsiveChoropleth;
