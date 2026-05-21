import React from "react";

type BtnComponentProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const BtnComponent = ({ onClick, children }: BtnComponentProps) => (
  <button onClick={onClick} className="p-5 border rounded-xl cursor-pointer">
    {children}
  </button>
);
