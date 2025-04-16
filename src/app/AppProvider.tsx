"use client";

import {
  createContext,
  useState,
  type ReactNode,
  type SetStateAction,
  type Dispatch,
} from "react";

export const AppContext = createContext<{
  recentYear: number;
  setRecentYear: Dispatch<SetStateAction<number>>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [recentYear, setRecentYear] = useState<number>(
    Number(process.env.NEXT_PUBLIC_RECENT_YEAR),
  );

  return (
    <AppContext.Provider value={{ recentYear, setRecentYear }}>
      {children}
    </AppContext.Provider>
  );
}
