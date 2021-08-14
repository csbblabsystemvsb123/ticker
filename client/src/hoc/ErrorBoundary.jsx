import React from 'react';
import propTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please reload the page</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.any
};

export default ErrorBoundary;