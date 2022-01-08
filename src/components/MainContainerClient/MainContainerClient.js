import React from "react";

const MainContainerClient = ({ children, ...props }) => {
  return <main {...props}>{children}</main>;
};

export default MainContainerClient;
