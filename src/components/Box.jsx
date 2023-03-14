import React from "react";

export const Box = ({ title, classes, children }) => {
  return (
    <div className={`box ${classes}`}>
      <h3 className="title title--level_h3 box__title">{title}</h3>
      {children}
    </div>
  );
};
