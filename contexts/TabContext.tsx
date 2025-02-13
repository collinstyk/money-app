import React, { createContext, useEffect, useReducer } from "react";

interface TabContextType {
  sideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

const TabContext = createContext({} as TabContextType);

const initialState = { sideMenuOpen: false };

function reducer(state: typeof initialState, action: { type: string }) {
  switch (action.type) {
    case "OPEN_SIDE_MENU":
      return { ...state, sideMenuOpen: true };
    case "CLOSE_SIDE_MENU":
      return { ...state, sideMenuOpen: false };
    default:
      return state;
  }
}

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [{ sideMenuOpen }, dispatch] = useReducer(reducer, initialState);

  const openSideMenu = () => dispatch({ type: "OPEN_SIDE_MENU" });
  const closeSideMenu = () => dispatch({ type: "CLOSE_SIDE_MENU" });
  return (
    <TabContext.Provider value={{ sideMenuOpen, openSideMenu, closeSideMenu }}>
      {children}
    </TabContext.Provider>
  );
}

export { TabContext };
