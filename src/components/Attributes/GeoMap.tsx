import { ResponsiveChoropleth } from '@nivo/geo';
import mapData from './datas/mapData';
import countries from './datas/world_countries.json';
import { FunctionComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyResponsiveChoropleth: FunctionComponent = () => {
  return (
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
  );
};

export default MyResponsiveChoropleth;
