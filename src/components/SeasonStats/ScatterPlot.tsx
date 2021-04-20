import React from 'react';
import { Scatter, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ScatterPlot = () => {
  return (
    <div>
      <Scatter
        data={{
          datasets: [{
            label: 'Scatter Dataset',
            data: [{
              x: -10,
              y: 0
            }, {
              x: 0,
              y: 10
            }, {
              x: 10,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            },
            {
              "x": 41,
              "y": 0
            },
            {
              "x": 29,
              "y": 79
            },
            {
              "x": 91,
              "y": 31
            },
            {
              "x": 45,
              "y": 37
            },
            {
              "x": 67,
              "y": 117
            },
            {
              "x": 23,
              "y": 5
            },
            {
              "x": 92,
              "y": 62
            },
            {
              "x": 62,
              "y": 79
            },
            {
              "x": 0,
              "y": 74
            },
            {
              "x": 77,
              "y": 19
            },
            {
              "x": 61,
              "y": 39
            }],
            backgroundColor: 'rgb(255, 99, 132)'
          }],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }}
      />
    </div>
  );
};

export default ScatterPlot;
