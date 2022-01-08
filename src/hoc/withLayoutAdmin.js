import React from "react";

import NavBarAdmin from "../components/NavBarAdmin";
import SideBarAdmin from "../components/SideBarAdmin";
import MainContainerAdmin from "../components/MainContainerClient";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayoutAdmin(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <NavBarAdmin />
        <div style={{ display: "flex" }}>
          <SideBarAdmin />
          <MainContainerAdmin
            className={props.fullWidth ? "container-fluid" : "container"}
          >
            <WrappedComponent {...props} />
          </MainContainerAdmin>
        </div>
      </>
    );
  }
  return WrapperComponent;
}

export default withLayoutAdmin;
