import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/dummy.jsx'; 
import { RiDashboardFill } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider.jsx';

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 800){
      setActiveMenu(false);
    }
  }
  
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-slate-400';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-1'>
      {activeMenu && (<>
      <div className='flex justify-between'>
        <Link to="/" onClick={handleCloseSidebar}
          className="items-center gap-2 mt-2 flex
          text-2xl font-extrabold tracking-tight
          dark:text-white text-slate-900">
          <RiDashboardFill/> <span>Dashboard</span>
        </Link>
        <TooltipComponent content="Close Menu" position='BottomCenter'>
          <button type='button'
          className='rounded-full p-1 m-1 hover:bg-light-gray text-4xl md:hidden'
          onClick={() => setActiveMenu(
          (prevActiveMenu) => 
          !prevActiveMenu)}
          >
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>
      </div>
      
      <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-500 dark:text-gray-200 m-2 mt-2 uppercase font-semibold">
                  {item.title}
                </p>
            {item.links.map((link)=> (
              <NavLink
              to={`/${link.name}`}
              key={link.name}
              onClick={handleCloseSidebar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                {link.icon}
                <span className='capitalize'>{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      </>)}
    </div>
  )
}

export default Sidebar