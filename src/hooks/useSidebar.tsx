import {
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

type SidebarContextData = UseDisclosureReturn;

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextData>({} as SidebarContextData);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  return context;
}