'use client';
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifOpen, setNotifOpen] = useState(false);



  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  
  const openNotif = () => setIsOpen(true);
  const closeNotif = () => setIsOpen(false);
  const toggleNotif = () => setNotifOpen(prev => !prev)

  return (
    <MenuContext.Provider value={{ isOpen,isNotifOpen,toggleNotif,openNotif,closeNotif,openMenu, closeMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
