import { ErrorInfo } from 'react';

// region LogReportingService
export type LogReportingServiceArgsType = (error: Error, errorInfo: ErrorInfo) => void;
// endregion
