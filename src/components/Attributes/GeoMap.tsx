import { ResponsiveChoropleth } from '@nivo/geo';
import mapData from './datas/mapData';
import countries from './datas/world_countries.json';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyResponsiveChoropleth = () => (
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
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor='#dddddd'
    borderWidth={0.5}
    borderColor='#152538'
    // legends={[
    //   {
    //     anchor: 'bottom-left',
    //     direction: 'column',
    //     justify: true,
    //     translateX: 80,
    //     translateY: -57,
    //     itemsSpacing: 1,
    //     itemWidth: 85,
    //     itemHeight: 18,
    //     itemDirection: 'left-to-right',
    //     itemTextColor: '#444444',
    //     itemOpacity: 0.85,
    //     symbolSize: 16,
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
);



export default MyResponsiveChoropleth;
