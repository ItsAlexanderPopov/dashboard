import React, {useEffect} from 'react';
// React icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
// Syncfusion
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// Assets
import avatar from '../data/profileIMG.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
// Global state of menu
import { useStateContext  } from '../contexts/ContextProvider';

// Navbar icon buttons set up template
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button 
      type='button'
      onClick={() => customFunc()}
      style={{ color }}
      className='relative text-2xl rounded-full p-3 mr-3 hover:bg-slate-200 dark:hover:bg-light-gray'
    >
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-3 w-3 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, setLightMode, lightMode} = useStateContext();

  // Handles screen size
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  // Checks last used dark/light mode and reuses it on next entrance
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('themeMode'))
    if(currentTheme === false){
      setLightMode(currentTheme);
    }
  }, []);

  // Auto open/close menu by screen size
  useEffect(() => {
    screenSize >= 800 ? setActiveMenu(true) : setActiveMenu(false)
  },[screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='flex justify-between p-2 m-2 sm:mr-[400px] xl:mr-[200px] mr-2'>
      <NavButton 
        title="Menu" 
        customFunc={handleActiveMenu} 
        color={"#748BA7"} 
        icon={<AiOutlineMenu/>}
      />
      <div className='flex'> 
        <div className='sm:flex hidden'>
          <NavButton
            title="Change Theme" 
            customFunc={()=> { setLightMode(!lightMode);
              localStorage.setItem('themeMode', JSON.stringify(!lightMode));
            }}
            color = "#748BA7"
            icon = { lightMode ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
          />
          <NavButton 
            title="Cart" 
            customFunc={()=> handleClick('cart')}
            color = "#748BA7"
            icon = { <FiShoppingCart/> }
          />
          <NavButton 
            title="Chat" 
            customFunc={()=> handleClick('chat')}
            color = "#748BA7"
            icon = { <BsChatLeft/> }
            dotColor="#03C9D7"
          />
          <NavButton 
            title="Notification" 
            customFunc={()=> handleClick('notification')}
            color = "#748BA7"
            icon = { <RiNotification3Line/> }
            dotColor="#03C9D7"
          />
        </div>
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div onClick={() => handleClick("userProfile")}
          className='flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-200 dark:hover:bg-light-gray rounded-xl'>
           <img
            src={avatar}
            className='rounded-full w-10 h-10'
           />
            <p className='text-slate-400 text-lg items-center hidden sm:flex'>
              <span>Hi,</span>
              <span className=" font-semibold ml-2">Alex</span>
              <MdKeyboardArrowDown/>
            </p>
          </div>
        </TooltipComponent>

        {/* Opens corresponding components to user clicks, using context in ContextProvider component */}
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar