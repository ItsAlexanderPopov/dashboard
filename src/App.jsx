import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
import { Homepage, Orders, Calendar, Stacked, Employees, Customers, Kanban, Area, Bar, Pie, Line, Financial, Editor} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
  
  const {activeMenu, lightMode} = useStateContext();

  return (
    <div className={!lightMode && 'dark'}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg overflow-x-hidden'>
          {activeMenu ? (
            <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white transition-all duration-500 ease-in z-50'>
              <Sidebar/>
            </div>
          ):(
            <div className='w-0 fixed dark:bg-secondary-dark-bg transition-all duration-500 ease-out z-50'>
              <Sidebar/>
            </div>
          )}
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='bg-main-bg dark:bg-main-dark-bg z-40'>
              <Navbar/>
            </div>
          <div className='-z-10 w-full m-auto'>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={ <Homepage/> } />
              <Route path="/homepage" element={ <Homepage/> } />
              
              {/* Pages */}
              <Route path="/orders" element={ <Orders/> } />
              <Route path="/employees" element={ <Employees/> } />
              <Route path="/customers" element={ <Customers/> } />

              {/* Apps */}
              <Route path="/kanban" element={ <Kanban/> } />
              <Route path="/editor" element={ <Editor/> } />
              <Route path="/calendar" element={ <Calendar/> } />

              {/* Charts */}
              <Route path="/line" element={ <Line/> } />
              <Route path="/area" element={ <Area/> } />
              <Route path="/pie" element={ <Pie/> } />
              <Route path="/bar" element={ <Bar/> } />
              <Route path="/financial" element={ <Financial/> } />
              <Route path="/stacked" element={ <Stacked/> } />

            </Routes>
          </div>
          <Footer/>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App