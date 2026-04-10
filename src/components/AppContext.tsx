"use client";

import { useState, createContext, useContext } from 'react';

export type ServiceType = 
  | 'none' 
  | '3d_design' 
  | 'web_dev' 
  | 'creative' 
  | 'animation' 
  | 'publishing' 
  | 'character';

interface AppContextType {
  hoverNode: ServiceType;
  setHoverNode: (node: ServiceType) => void;
  activeFace: ServiceType;
  setActiveFace: (node: ServiceType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hoverNode, setHoverNode] = useState<ServiceType>('none');
  const [activeFace, setActiveFace] = useState<ServiceType>('none');

  return (
    <AppContext.Provider value={{ hoverNode, setHoverNode, activeFace, setActiveFace }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
