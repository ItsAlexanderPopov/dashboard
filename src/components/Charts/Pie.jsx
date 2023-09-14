import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, 
Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

const Pie = ({ id, data, height, legendVisiblity }) => {

    return (
        <AccumulationChartComponent
            id={id}
            legendSettings={{ visible: legendVisiblity}}
            height={height}
            tooltip={{ enable: true }}
            width={height}
        >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
            name="Sale"
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                fontWeight: '600',
                color: '#fff',
                },
            }}
            />
        </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    )
}

export default Pie