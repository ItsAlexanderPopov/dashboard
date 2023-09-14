import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy'
import { useStateContext  } from '../../contexts/ContextProvider';

const Stacked = ({width, height}) => {
  const {lightMode} = useStateContext();
  return (
    <ChartComponent 
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: lightMode ? 'white': '#33373E',textStyle: {color: !lightMode ? 'white': '#33373E'} ,margin: {top: 15}}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked