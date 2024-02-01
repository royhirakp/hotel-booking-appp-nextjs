import React, { ReactNode } from "react";

interface CardContainerProps {
  child: ReactNode;
}

const CardContainerProps: React.FC<CardContainerProps> = ({ child }) => {
  return <div>{child}</div>;
};
