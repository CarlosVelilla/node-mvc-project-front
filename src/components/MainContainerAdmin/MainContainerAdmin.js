import React from "react";

const MainContainerAdmin = ({ children, ...props }) => {
  return <main {...props}>{children}</main>;
};

export default MainContainerAdmin;
