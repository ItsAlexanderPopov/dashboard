import React from 'react'
import { Header } from '../components'
import { HtmlEditor, Image, Inject, Link, RichTextEditorComponent, 
QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="App" title="Editor"/>
      <RichTextEditorComponent height={550}>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor