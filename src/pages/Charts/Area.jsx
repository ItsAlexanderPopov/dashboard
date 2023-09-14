import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries,
DateTime, Legend } from '@syncfusion/ej2-react-charts'
import { areaPrimaryYAxis, areaPrimaryXAxis, areaCustomSeries} from '../../data/dummy'
import { Header } from '../../components'

const Area = () => {
  return (
    <div className='m-4 mt-24 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category = "Area Chart" title = "Inflation Rate"/>
      <ChartComponent 
        id="area-chart" 
        height='420px' 
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item}/>
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area