import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

// States of nav buttons
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// Global Variables
export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialState);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [lightMode, setLightMode] = useState(true);

  // Opens a window one at a time with nav buttons
  const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: !isClicked[clicked]})
  }

  // Sends variables with use context between all files (children)
    return (
        <StateContext.Provider
        value={{ activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClick,
            screenSize, setScreenSize,
            lightMode, setLightMode,
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext); 