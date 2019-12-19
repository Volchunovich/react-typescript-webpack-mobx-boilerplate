import { ErrorInfo } from 'react';
import DefaultErrorBoundary from './components/default-error';
import EngineeringWorksErrorBoundary from './components/engineering-works-error';

export { DefaultErrorBoundary, EngineeringWorksErrorBoundary };

// region Example AnyServices
/* eslint-disable no-console */
const AnyReportingService = (error: Error, errorInfo: ErrorInfo) => {
  console.group(['Error', 'Error Info']);
  console.error(error);
  console.error(errorInfo);
  console.groupEnd();
};

export default AnyReportingService;
// endregion
