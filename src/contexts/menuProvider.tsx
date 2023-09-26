'use client'

import { createContext, useState } from 'react'

export const MenuContext = createContext({ isOpened: false, setIsOpened: (boolean: boolean) => { } })

export default function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return <MenuContext.Provider value={{ isOpened, setIsOpened }}> {children} </ MenuContext.Provider>
}