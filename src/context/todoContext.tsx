"use client";
import React, { createContext, ReactNode, useState } from "react";

interface AppContextType {
  editData: string | null;
  setEditData: (data: string | null) => void;
}

const MyContext = createContext<AppContextType | null>(null);

type ContextProps = {
  children: ReactNode;
};

const TodoContext = ({ children }: ContextProps) => {
  const [editData, setEditData] = useState<string | null>(null);

  return (
    <MyContext.Provider value={{ editData, setEditData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, TodoContext };
