import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, 
Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'
import { barPrimaryYAxis, barPrimaryXAxis, barCustomSeries} from '../../data/dummy'
import { Header } from '../../components'

const Bar = () => {
  return (
    <div className='m-4 mt-24 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category = "Bar Chart" title = "Olympic Medals"/>
      <ChartComponent 
        id="bar-chart" 
        height='420px' 
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }} 

      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item}/>
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar