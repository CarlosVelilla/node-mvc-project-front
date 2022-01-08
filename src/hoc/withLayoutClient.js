import React from "react";

import NavBar from "../components/NavBar";
import MainContainerClient from "../components/MainContainerClient";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayoutClient(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <NavBar />
        <MainContainerClient
          className={props.fullWidth ? "container-fluid" : "container"}
        >
          <WrappedComponent {...props} />
        </MainContainerClient>
      </>
    );
  }
  return WrapperComponent;
}

export default withLayoutClient;
