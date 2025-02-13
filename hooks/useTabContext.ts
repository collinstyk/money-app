import { TabContext } from "@/contexts/TabContext";
import { useContext } from "react";

export function useTabContext() {
  const context = useContext(TabContext);
  return context;
}
