"use client";
import React from "react";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

const StoreProvidor: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default StoreProvidor;
