import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,
Page, Selection, Inject, Toolbar, Edit, Sort, Filter} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
    <Header category="Page" title="Customers"/>
    <GridComponent
    dataSource={customersData}
    allowPaging 
    allowSelection
    allowSorting
    toolbar={['Add', 'Delete']}
    editSettings={{allowDeleting:true, allowEditing:true, allowAdding:true, mode:'Dialog'}} // Double click to open dialog edit window
    height={410}
    width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item}/>
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Filter, Sort, Edit, Selection]}/>
    </GridComponent>
  </div>
  )
}

export default Customers