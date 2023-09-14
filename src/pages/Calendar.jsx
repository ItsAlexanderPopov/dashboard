import React from 'react'
import { ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective,
Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='mt-24 m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="App" title="Calendar"/>
      <ScheduleComponent 
      height="550px"
      width="100%"
      eventSettings={{ dataSource: scheduleData }}
      selectedDate={new Date(2021, 0, 10)}
      workDays={[]}
      >
      <ViewsDirective>
        <ViewDirective option='Day'/>
        <ViewDirective option='Week'/>
        <ViewDirective option='Month'/>
        <ViewDirective option='Agenda'/>
      </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar

// future imporovements : sync google calendar, local data storage