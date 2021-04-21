import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import data from '../mockData/mockData1'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ScatterPlot1 = () => (
    <ResponsiveScatterPlot
        data={data}
        margin={{ top: 50, right: 110, bottom: 60, left: 55 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat={function(e){return e+" kg"}}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat={function(e){return e+" cm"}}
        colors={["black","yellow","orange"]}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'weight',
            legendPosition: 'middle',
            legendOffset: 40
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'size',
            legendPosition: 'middle',
            legendOffset: -50
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default ScatterPlot1;