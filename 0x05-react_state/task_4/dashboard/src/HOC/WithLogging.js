import React from "react";

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      const componentName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(
        `Component ${componentName} is mounted on componentDidMount()`
      );
    }

    componentWillUnmount() {
      const componentName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(
        `Component ${componentName} is going to unmount on componentWillUnmount()`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  WithLoggingComponent.displayName = `WithLogging(${wrappedComponentName})`;

  return WithLoggingComponent;
};

export default WithLogging;
