import { UseDisclosureReturn } from "@chakra-ui/react";
import { ReactNode, useContext, createContext } from "react";
import { useDisclosure } from '@chakra-ui/react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}
type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)
const disclosure = useDisclosure()
export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)