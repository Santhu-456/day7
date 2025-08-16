import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[Error Boundary]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>[Error Boundary] An error occurred. Please try again.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
