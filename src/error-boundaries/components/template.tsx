import React, { Component, ComponentClass, ComponentType, ErrorInfo, ReactNode } from 'react';
import { LogReportingServiceArgsType } from '../types';

type ErrorBoundaryProps = {
  fallback: ComponentType;
  service?: LogReportingServiceArgsType;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

const withErrorBoundary = (MyComponent: ComponentClass) => {
  return class extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = {
      hasError: false,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      const { service } = this.props;
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      if (service) {
        service(error, errorInfo);
      }
    }

    render(): ReactNode {
      const { fallback } = this.props;
      const { hasError } = this.state;

      const Fallback = fallback;
      if (hasError) {
        return <Fallback />;
      }

      return <MyComponent />;
    }
  };
};

export default withErrorBoundary;
