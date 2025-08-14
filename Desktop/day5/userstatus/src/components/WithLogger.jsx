import React from "react";
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("[HOC Log] Wrapped component rendered with props", props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
